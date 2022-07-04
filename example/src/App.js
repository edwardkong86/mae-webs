import React from 'react'
import Dashboard from './demos/layout/Dashboard/Dashboard'

import Form from './demos/layout/Form/Form'
import ProductPage from './demos/layout/ProductPageForm/ProductPageForm'
import ASB_financing from './demos/layout/ProductPage_ASB_financing/ASB_financing-i'
import { QuickActionCard, List, BoxTopBottom, Divider } from 'mae-webs'
import QRPay from './assets/QRPay.svg'

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
      <div style={{color:"#4A90E2"}}>View</div>
    </>
  )
}

const App = () => {
  return (
    <>
      {/* <Form /> */}
      {/* <Dashboard/> */}
      {/* <ProductPage /> */}
      {/* <ASB_financing /> */}
      <div style={{ margin: 'auto' }}>
        {/* <QuickActionCard image={QRPay} title="Pay Bills"/> */}
        <div
          style={{
            width: '327px',
            backgroundColor: 'white',
            height: '295px',
            borderRadius: '8px'
          }}
        >
          <BoxTopBottom title='Top Financing Amount' amount='RM 150,000.00' />
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
      </div>
    </>
  )
}

export default App
