import React from 'react'
import "./index.scss"
export const BoxTopBottom = (props) => {
  const { title, amount } = props
  return (
    <div
      style={{
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className='box-topBottom-title'>{title}</div>
      <div className='box-topBottom-amount'>{amount}</div>
    </div>
  )
}
