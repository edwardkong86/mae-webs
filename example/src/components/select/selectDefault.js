import React, { useState } from 'react'
import { Button, Picker, Space } from 'antd-mobile'
import { DownOutline } from "antd-mobile-icons";
import Block from '../block'
import Error from '../error'
import { getStyle } from '../tailwind'

const SelectDefault = (props) => {
  //Access to main props
  const [visible, setVisible] = useState(false);
  
  //Injected at runtime
  const { item, field, managedCallback } = props

  //Always check to not render with error ;)
  if (item === undefined) return null


  const { value, onChange } = field
  const { theme = '', label = '', tooltip = '', options, placeholder } = item

  const onSelect = (val, extend) => {
    onChange({ val })
  }
  
  const onClick = () => setVisible(true)
  const onClose = () => setVisible(false)
  const onConfirm = (val, extend) => onChange(extend.items[0].label)
  return (
    <Block
      title={label}
      tooltip={tooltip}
      blockClassName='pickerBlock'
      titleClassName='pickerTitle'
      style={getStyle(theme)}
    >
      <Space direction='vertical' block>
        <Button
          className='pickerButton'
          onClick={onClick}
        >
          <Space justify='between' style={{ width: '100%' }}>
            <span>{value ? value : 'Please Select'}</span>
            <DownOutline
              style={{ color: 'black', fontSize: '20px', marginRight: '16px' }}
            />
          </Space>
        </Button>
      </Space>
      <Picker
        style={{
          '--item-height': '44px'
        }}
        columns={[options]}
        visible={visible}
        onClose={onClose}
        value={[value]}
        onConfirm={onConfirm}
        // onSelect={(val, extend) => {
        //   //setValue(extend.items[0].label)
        //   console.log('onSelect', val, extend)
        // }}
        confirmText={<Button className='doneButton'>Done</Button>}
        cancelText={<Button className='cancelButton'>Cancel</Button>}
        mouseWheel={true}
      />
      <Error {...props} />
    </Block>
  )
}

export default SelectDefault
