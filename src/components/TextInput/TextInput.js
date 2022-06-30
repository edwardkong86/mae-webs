import React, { useState } from "react";
import { Input } from "antd-mobile";
import { Block } from "../Block";
import { ErrorMessage } from "../Error";
import "../../styles.css"
export const TextInput = (props) => {
    const { label, placeholder,error } = props;
    const [value, setValue] = useState("");
  
    console.log(error)
    return (
        <Block
          title={label}
          blockClassName="inputBlock"
          titleClassName="inputTitle"
        >
          <Input
            placeholder={placeholder}
            value={value}
            onChange={(val) => {
              setValue(val);
            }}
            className={(error && 'inputError')}
          />
          <ErrorMessage {...props} />
        </Block>
    );
  };