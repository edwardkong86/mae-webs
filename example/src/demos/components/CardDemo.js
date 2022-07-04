import React from 'react'
import { QuickActionCard, List, BoxTopBottom, Divider } from 'mae-webs'
import QRPay from '../../assets/QRPay.svg'

const items = [
  {
    title: 'Tenure',
    content: '5 years'
  },
  {
    title: 'Profile rate',
    content: '3.60%'
  },
  {
    title: 'Monthly payment',
    content: 'RM 3,500.00'
  },
  {
    title: TitleContainer,
    content: 'RM 28.00'
  }
]

function TitleContainer() {
  return (
    <>
      <div>Insurance/Takaful fee</div>
      <div style={{ color: '#4A90E2' }}>View</div>
    </>
  )
}

export const CardDemo = () => {
  return (
    <div style={{ margin: 'auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <QuickActionCard image={QRPay} title='Pay Bills' />
      </div>
      <div
        style={{
          width: '327px',
          backgroundColor: 'white',
          height: '295px',
          borderRadius: '8px'
        }}
      >
        <BoxTopBottom
          title='Top Financing Amount'
          tooltip={false}
          amount='RM 150,000.00'
        />
        <Divider />
        <div
          style={{
            padding: '24px 16px'
          }}
        >
          {items.map((item) => {
            return (
              <List
                title={
                  typeof item.title === `string` ? item.title : item.title()
                }
                content={item.content}
              />
            )
          })}
        </div>
      </div>
      <div
        style={{
          background: '#FFFFFF',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
          borderRadius: '8px',
          marginTop: '1rem'
        }}
      >
        <BoxTopBottom title='Potential Earning' amount='RM 49,570.00' />
      </div>
    </div>
  )
}
