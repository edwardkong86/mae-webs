import React from 'react'
import { TextInput , Block,Header,DropdownPicker,Button} from 'mae-webs'
import { AutoCenter } from "antd-mobile";

import "./Form.css"
const data = [
  {
    label: 'Office address line 1',
    placeholder: 'e.g. Unit no/Floor/Building',
    error: 'Please enter a valid address'
  },
  {
    label: 'Office address line 2',
    placeholder: 'e.g. Street name'
  },
  {
    label: 'Office address line 3',
    placeholder: 'e.g. Neighbourhood name'
  },
  {
    label: 'Postcode',
    placeholder: 'e.g. 52200',
    error: 'Please enter a valid postcode'
  }
]
const Form = () => {
  return (<>
  <Header />
        <div className="container">
        <div className="content">
          <Block blockClassName="titleBlock">
            <div className="title1" styles={{ marginBottom: "4px" }}>
              ASB Financing/-i Application
            </div>
            <div className="title2">Please fill in your employment details</div>
          </Block>
          <DropdownPicker title="Country" />
          {data.map((d, index) => (
            <TextInput
              key={index}
              label={d.label}
              placeholder={d.placeholder}
              error={d?.error}
            />
          ))}

          {/* <RadioButton /> */}
          {/* <ShowModal /> */}
        </div>
      </div>
      <AutoCenter className="buttonFooter">
        <Button block shape="rounded">
          Continue
        </Button>
      </AutoCenter>
  </>
  )
}

export default Form
