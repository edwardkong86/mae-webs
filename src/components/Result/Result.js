import React from 'react'
import { Result as AntdResult } from 'antd-mobile'
import Icon from '@ant-design/icons'
import PropTypes from 'prop-types'

import { ResultFailedSvg } from '../../assets/Icon/ResultFailedSvg'
import { ResultSuccessSvg } from '../../assets/Icon/ResultSuccessSvg'
import './index.scss'

export const Result = (props) => {
  const { status, title, description, icon } = props

  const ResultFailedIcon = (props) => (
    <Icon component={ResultFailedSvg} {...props} />
  )

  const ResultSuccessIcon = (props) => (
    <Icon component={ResultSuccessSvg} {...props} />
  )
  let resultIcon
  if (status === 'error') {
    resultIcon = <ResultFailedIcon />
  } else if (status === 'success') {
    resultIcon = <ResultSuccessIcon />
  }

  return (
    <AntdResult
      status={status}
      title={title}
      description={description}
      icon={icon || resultIcon}
    />
  )
}
Result.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.any
}
