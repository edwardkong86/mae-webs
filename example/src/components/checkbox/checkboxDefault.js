import React, { useState } from 'react'
import { Checkbox } from 'antd-mobile'
import Block from '../block'
import Error from '../error'
import Tooltip from '../tooltip'
import { getStyle } from '../tailwind'

const CheckboxDefault = (props) => {
  //Access to main props
  //Injected at runtime
  const { item, field, managedCallback } = props

  //Always check to not render with error ;)
  if (item === undefined) return null

  const { theme = '', tooltip = '', label = '', action } = item
  const { value, onChange } = field
  
  const onValueChange = () => {
    if (action) {
      managedCallback({ item })
      return
    }
    onChange(!value)
  }
  //Access to all props that introduced in element.
  return (
    <Block style={getStyle(theme)}>
      <Checkbox value={value} onChange={onValueChange}>
        {label}
      </Checkbox>
      {tooltip && <Tooltip tooltip={tooltip} title={label} />}
      <Error {...props} />
    </Block>
  )
}

export default CheckboxDefault
