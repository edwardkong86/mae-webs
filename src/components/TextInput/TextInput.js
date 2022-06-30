import React from "react";
import { Input } from "antd-mobile";
import { Block } from "../Block";
import { ErrorMessage } from "../Error";

import "./TextInput.scss"
import "../../styles.css"

export const TextInput = (props) => {
    const { label, placeholder,error } = props;
    console.log(error)
    return (
        <Block
          title={label}
          blockClassName="inputBlock"
          titleClassName="inputTitle"
        >
          <Input
            placeholder={placeholder}

            className={(error && 'inputError')}
          />
          <ErrorMessage {...props} />
        </Block>
    );
  };
  