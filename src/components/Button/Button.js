import React from 'react'
import { Button as AntdButton} from "antd-mobile";
import "./Button.scss"
export const Button = (props) => {
    const {label,children,disabled} = props
    return(
        <AntdButton className="fullButton" disabled={disabled} block shape="rounded">
          {label || children}
        </AntdButton>
    )
}