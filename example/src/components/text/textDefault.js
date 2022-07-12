import React from "react";
import { Input } from "antd-mobile";
import Block from '../block'
import Error from '../error'
import { getStyle } from '../tailwind'

const TextDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { name, item, child, field, error, sharedItems } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;
    const {
        theme = "",
        tooltip = "",
        label = "",
        placeholder = "",
        description = "",
        editable = true,
        prefix = "",
        multiline = true,
        disabled = null,
    } = item;
    const { value, onChange } = field;

    // const isWatch = disabled && sharedItems?.getValues(disabled.slice(1, -1));
    //Access to all props that introduced in element.
    return (
        <Block
          title={label}
          tooltip={tooltip}
          blockClassName="inputBlock"
          titleClassName="inputTitle"
          style={getStyle(theme)}
        >
          <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={((error && error[name] && error[name].message) && 'inputError')}
          />
          <Error {...props} />
        </Block>
    );
};

export default TextDefault;
