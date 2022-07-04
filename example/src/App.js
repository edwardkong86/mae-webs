import React from 'react'
import Dashboard from './demos/layout/Dashboard/Dashboard'


import Form from './demos/layout/Form/Form'
import ProductPage from './demos/layout/ProductPageForm/ProductPageForm'
import ASB_financing from './demos/layout/ProductPage_ASB_financing/ASB_financing-i'
import { QuickActionCard} from 'mae-webs'
import QRPay from "./assets/QRPay.svg"
const App = () => {
  return (
    <>
      {/* <Form /> */}
      {/* <Dashboard/> */}
      {/* <ProductPage /> */}
      <ASB_financing />
      {/* <div style={{padding:"10rem"}}>
      <QuickActionCard image={QRPay} title="Pay Bills"/>

      </div> */}
    </>
  )
}

export default App
