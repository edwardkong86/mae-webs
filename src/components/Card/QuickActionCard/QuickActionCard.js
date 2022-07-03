import React from 'react'
import './index.scss'
export const QuickActionCard = (props) => {
  const { image, title } = props
  return (
    <div className='container-quick'>
      <div>
        <div className='quick-img'>
          <img src={image} alt={image}/>
        </div>
        <div className='quick-title'>{title}</div>
      </div>
    </div>
  )
}
