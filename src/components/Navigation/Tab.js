import React, { Children, useRef, useState } from 'react'
import { Block } from '../Block/Block'
import { Tabs, Swiper } from 'antd-mobile'
import SwiperRef from 'antd-mobile/es/components/swiper'

import './index.scss'

export const Tab = (props) => {
  const { items } = props
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <Block padding='0'>
      <Tabs
        className='navigationTabs'
        activeKey={items[activeIndex].key}
        onChange={(key) => {
          const index = items.findIndex((item) => item.key === key)
          setActiveIndex(index)
          swiperRef.current?.swipeTo(index)
        }}
      >
        {items.map((item) => (
          <Tabs.Tab key={item.key} title={item.title} />
        ))}
      </Tabs>

      <Swiper
        direction='horizontal'
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index)
        }}
      >
        {items.map((item) => (
          <Swiper.Item>
            <div style={{height:"80vh",width:"80vh"}}>{item.content}</div>
          </Swiper.Item>
        ))}
      </Swiper>
    </Block>
  )
}
