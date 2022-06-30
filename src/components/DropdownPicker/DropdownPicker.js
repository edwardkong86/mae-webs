import React, { useState } from "react";
import { Button, Picker, Space } from "antd-mobile";
// import Icon from "@ant-design/icons";
import { Block } from "../Block/Block";
import { DownOutline } from "antd-mobile-icons";

import "../../styles.css";
export const basicColumns = [
  [
    { label: "Malaysia", value: "my" },
    { label: "Singapore", value: "sg" },
    { label: "Indonesia", value: "id" },
    { label: "Vietnam", value: "viet" },
    { label: "China", value: "cn" },
    { label: "Hong Kong", value: "hk" },
    { label: "Taiwan", value: "tw" },
  ],
];

export const DropdownPicker = (props) => {
  const [visible, setVisible] = useState(false);
  const { title } = props;
  const [value, setValue] = useState("");

  return (
    <Block
      title={title}
      blockClassName="pickerBlock"
      titleClassName="pickerTitle"
    >
      <Space direction="vertical" block>
        <Button
          className="pickerButton"
          onClick={() => {
            setVisible(true);
          }}
        >
          <Space justify="between" style={{ width: "100%" }}>
            <span>{value ? value : "Please Select"}</span>
            <DownOutline
              style={{ color: "black", fontSize: "20px", marginRight: "16px" }}
            />
          </Space>
        </Button>
      </Space>
      <Picker
        style={{
          "--item-height": "44px",
        }}
        defaultValue={["my"]}
        columns={basicColumns}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        value={value}
        onSelect={(val, extend) => {
          setValue(extend.items[0].label)
          console.log("onSelect", val, extend.items[0].label);
        }}
        confirmText={<Button className="doneButton">Done</Button>}
        cancelText={<Button className="cancelButton">Cancel</Button>}
        mouseWheel={true}
      />
    </Block>
  );
};
