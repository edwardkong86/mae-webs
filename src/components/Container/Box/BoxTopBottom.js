import React from 'react'
import { Block } from '../../Block'
import './index.scss'
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
      <Block titleClassName='box-topBottom-title' tooltip={false} title={title} />
      <div className='box-topBottom-amount'>{amount}</div>
    </div>
  )
}
