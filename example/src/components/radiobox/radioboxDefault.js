import React from 'react'
import { Radio as AntdRadio, Space } from 'antd-mobile'
import Icon from '@ant-design/icons'
import CheckedSvg from '../../assets/icons/CheckedSvg'
import UncheckedSvg from '../../assets/icons/UnCheckedSvg'
import Block from '../block'
import Error from '../error'
import { getStyle } from '../tailwind'

const RadioboxDefault = (props) => {
  //Access to main props
  //Injected at runtime
  const { item, field, managedCallback } = props

  console.log('RadioDefault', props)
  //Always check to not render with error ;)
  if (item === undefined) return null

  const { value, onChange } = field
  const { theme = '', label = '', tooltip = '', options } = item

  return (
    <Block
      title={label}
      tooltip={tooltip}
      blockClassName='pickerBlock'
      titleClassName='pickerTitle'
      style={getStyle(theme)}
    >
      <AntdRadio.Group value={value} onChange={onChange}>
        <Space direction='horizontal'>
          {options.map((item) => (
            <AntdRadio
              value={item.value}
              //icon={(checked) => (checked ? <CheckedIcon /> : <UnCheckedIcon />)}
            >
              {item.label}
            </AntdRadio>
          ))}
        </Space>
      </AntdRadio.Group>

      <Error {...props} />
    </Block>
  )
}

export default RadioboxDefault
