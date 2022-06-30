import React, { useState } from "react";
import { Block } from "../Block";
import { Radio as AntdRadio, Space } from "antd-mobile";
import Icon from "@ant-design/icons";
import { CheckedSvg } from "../../assets/Icon/CheckedSvg";
import { UncheckedSvg } from "../../assets/Icon/UnCheckedSvg";
export const Radio = (props) => {
  const [value, setValue] = useState();
  const CheckedIcon = (props) => <Icon component={CheckedSvg} {...props} />;
  const UnCheckedIcon = (props) => <Icon component={UncheckedSvg} {...props} />;

  return (
    <Block
      title="Bumiputera"
      titleClassName="inputTitle"
      childrenClassName="bumiBlock"
    >
      <AntdRadio.Group
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      >
        <Space direction="horizontal">
          <AntdRadio
            value="radio1"
            icon={(checked) => (checked ? <CheckedIcon /> : <UnCheckedIcon />)}
          >
            Yes
          </AntdRadio>
          <AntdRadio
            value="radio2"
            icon={(checked) => (checked ? <CheckedIcon /> : <UnCheckedIcon />)}
          >
            No
          </AntdRadio>
        </Space>
      </AntdRadio.Group>
    </Block>
  );
};
