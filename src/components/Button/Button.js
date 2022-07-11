import React from 'react'
import { Button as AntdButton } from 'antd-mobile'

import './Button.scss'
export const Button = (props) => {
  const { label, children, disabled, className, hasIcon, onClick } = props
  return (
    <AntdButton
      className={`${className} ${hasIcon ? 'fullButtonIcon' : 'fullButton'}`}
      disabled={disabled}
      block
      shape='rounded'
      onClick={onClick}
    >
      <div>{label || children}</div>
    </AntdButton>
  )
}
