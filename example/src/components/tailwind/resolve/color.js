export function color(type, value, config) {
    // support opacity shorthand: `bg-red-200/50`
    let shorthandOpacity = undefined;
    if (value.includes(`/`)) {
        [value = ``, shorthandOpacity] = value.split(`/`, 2);
    }

    let color = ``;

    // for arbitrary support: `bg-[#eaeaea]`, `text-[rgba(1, 1, 1, 0.5)]`
    if (value.startsWith(`[#`) || value.startsWith(`[rgb`)) {
        color = value.slice(1, -1);

        // search for color in config
    } else {
        color = findColorInConfigRecursive(value, config);
    }

    if (!color) {
        return null;
    }

    if (shorthandOpacity) {
        const opacity = Number(shorthandOpacity);
        if (!Number.isNaN(opacity)) {
            color = addOpacity(color, opacity / 100);
            return complete({ [STYLE_PROPS[type].color]: color });
        }
    }

    // return a dependent style to support merging of classes
    // like `bg-red-800 bg-opacity-75`
    return {
        kind: `dependent`,
        complete(style) {
            const opacityProp = STYLE_PROPS[type].opacity;
            const opacity = style[opacityProp];
            if (typeof opacity === `number`) {
                color = addOpacity(color, opacity);
            }
            style[STYLE_PROPS[type].color] = color;
        },
    };
}

export function colorOpacity(type, value) {
    const percentage = parseInt(value, 10);
    if (Number.isNaN(percentage)) {
        return null;
    }

    const opacity = percentage / 100;
    const style = { [STYLE_PROPS[type].opacity]: opacity };
    return { kind: `complete`, style };
}

function addOpacity(color, opacity) {
    if (color.startsWith(`#`)) {
        color = hexToRgba(color);
    } else if (color.startsWith(`rgb(`)) {
        color = color.replace(/^rgb\(/, `rgba(`).replace(/\)$/, `, 1)`);
    }
    // @TODO: support hls/hlsa if anyone opens an issue...
    return color.replace(/, ?\d*\.?(\d+)\)$/, `, ${opacity})`);
}

export function removeOpacityHelpers(style) {
    for (const key in style) {
        if (key.startsWith(`__opacity_`)) {
            delete style[key];
        }
    }
}

const STYLE_PROPS = {
    bg: { opacity: `__opacity_bg`, color: `backgroundColor` },
    text: { opacity: `__opacity_text`, color: `color` },
    border: { opacity: `__opacity_border`, color: `borderColor` },
    borderTop: { opacity: `__opacity_border`, color: `borderTopColor` },
    borderBottom: { opacity: `__opacity_border`, color: `borderBottomColor` },
    borderLeft: { opacity: `__opacity_border`, color: `borderLeftColor` },
    borderRight: { opacity: `__opacity_border`, color: `borderRightColor` },
    shadow: { opacity: `__opacity_shadow`, color: `shadowColor` },
    tint: { opacity: `__opacity_tint`, color: `tintColor` },
};

function hexToRgba(hex) {
    const orig = hex;
    hex = hex.replace(MATCH_SHORT_HEX, (_, r, g, b) => r + r + g + g + b + b);
    const result = MATCH_FULL_HEX.exec(hex);
    if (!result) {
        warn(`invalid config hex color value: ${orig}`);
        return `rgba(0, 0, 0, 1)`;
    }

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, 1)`;
}

function findColorInConfigRecursive(colorName, config) {
    const configColor = config[colorName];

    // the color is found at the current config level
    if (isString(configColor)) {
        return configColor;
    } else if (isObject(configColor) && isString(configColor.DEFAULT)) {
        return configColor.DEFAULT;
    }

    // search for a matching sub-string at the current config level
    let [colorNameStart = ``, ...colorNameRest] = colorName.split(`-`);
    while (colorNameStart !== colorName) {
        const subConfig = config[colorNameStart];
        if (isObject(subConfig)) {
            return findColorInConfigRecursive(colorNameRest.join(`-`), subConfig);
        } else if (colorNameRest.length === 0) {
            return ``;
        }
        colorNameStart = `${colorNameStart}-${colorNameRest.shift()}`;
    }

    return ``;
}

const MATCH_SHORT_HEX = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
const MATCH_FULL_HEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
