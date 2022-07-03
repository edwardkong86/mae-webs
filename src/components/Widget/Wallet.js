import React from 'react'
import './index.scss'
import Icon from '@ant-design/icons'

import { WalletSvg } from '../../assets/Icon/WalletSvg'
export const Wallet = (props) => {
  const { title, desc } = props
  const WalletIcon = (props) => <Icon component={WalletSvg} {...props} />

  return (
    <div className='container-wallet'>
      <div className='content-wallet'>
        <div className='container-title'>
          <div className='content-title'>{title}</div>
          <div className='content-desc'>{desc}</div>
        </div>
        <div className='container-icon'>
          <WalletIcon />
        </div>
      </div>
    </div>
  )
}
