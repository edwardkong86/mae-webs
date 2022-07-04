import React from 'react'
import './index.scss'
export const List = (props) => {
  const { titleClassName, contentClassName, title,content } = props
  return (
      <div className='container-list'>
        <div className={`${titleClassName} title-list`}>{title}</div>
        <div className={`${contentClassName} content-list`}>{content}</div>
      </div>
  )
}
