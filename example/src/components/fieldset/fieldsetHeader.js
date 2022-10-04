import React from 'react'
import { getStyle } from '../tailwind'

const FieldsetHeader = (props) => {
  //   const safeAreaInsets = useSafeAreaInsets()
  //Access to main props
  //Injected at runtime
  const { item, child } = props

  //Always check to not render with error ;)
  if (item === undefined) return null

  const { label = '', theme = '' } = item
  //Access to all props that introduced in element.
  return (
    <header className='header'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: child?.length > 1 ? 'space-between' : 'center',
          alignItems: 'center',
          marginTop: 20,
          ...getStyle(theme)
        }}
      >
        {child && child}
      </div>
    </header>
  )
}

export default FieldsetHeader
