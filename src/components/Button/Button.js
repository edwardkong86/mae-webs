import React from 'react'
import { Button as AntdButton} from "antd-mobile";
import "../../styles.css"

export const Button = (props) => {
    const {label,children} = props
    return(
        <AntdButton block shape="rounded">
          {label || children}
        </AntdButton>
    )
}