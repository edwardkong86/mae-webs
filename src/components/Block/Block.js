import React from 'react'
import PropTypes from 'prop-types'
import "./Block.scss"
export const Block = (props) => {
  const {
    title,
    padding,
    background,
    children,
    blockClassName,
    titleClassName,
    childrenClassName,
    variant
  } = props
  return (
    <div variant={variant} className={`${blockClassName} `}>
      {title && <div className={`${titleClassName} `}>{title}</div>}
      {children && (
        <div
          className={childrenClassName}
          style={{
            padding: padding,
            background: background
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

Block.defaultProps = {
  title: '',
  padding: '',
  background: '',
  blockClassName: '',
  titleClassName: '',
  childrenClassName: ''
}

Block.propTypes = {
  title: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string,
  blockClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  childrenClassName: PropTypes.string
}
