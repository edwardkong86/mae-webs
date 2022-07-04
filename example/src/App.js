import React from 'react'

import Form from './demos/layout/Form/Form'
import ProductPage from './demos/layout/ProductPageForm/ProductPageForm'
import ASB_financing from './demos/layout/ProductPage_ASB_financing/ASB_financing-i'
import { CardDemo } from './demos/components/CardDemo'
import { WidgetDemo } from './demos/components/WidgetDemo'

const App = () => {
  return (
    <>
      <Form />
      <WidgetDemo/>
      <ProductPage />
      {/* <ASB_financing /> */}
      <CardDemo />
    </>
  )
}

export default App
