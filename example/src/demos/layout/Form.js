import React from 'react'
import {
  TextInput,
  Block,
  Header,
  DropdownPicker,
  Button,
  Radio,
  ShowModal,
  Tab
} from 'mae-webs'
import { AutoCenter } from 'antd-mobile'
import { AddOutline } from 'antd-mobile-icons'

import './Form.css'
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
const items = [
  {
    key: '1',
    title: 'Accounts',
    content: 'Accounts'
  },
  {
    key: '2',
    title: 'cards',
    content: 'cards'
  },
  {
    key: '3',
    title: 'Fixed Deposits',
    content: 'Fixed Deposits'
  },
  {
    key: '4',
    title: 'Loan',
    content: 'Loan'
  },
  {
    key: '5',
    title: 'Wealth',
    content: 'Wealth'
  }
]
const Form = () => {
  return (
    <React.Fragment>
      <Header />
      <Tab items={items}/>
            <div className='container'>
        <div className='content'>
          <Block blockClassName='titleBlock'>
            <div className='title1' styles={{ marginBottom: '4px' }}>
              ASB Financing/-i Application
            </div>
            <div className='title2'>Please fill in your employment details</div>
          </Block>
          <DropdownPicker title='Country' error='Maximum 2 line' />
          {data.map((d, index) => (
            <TextInput
              key={index}
              label={d.label}
              placeholder={d.placeholder}
              error={d?.error}
            />
          ))}

          <Radio />
          <ShowModal />
        </div>
      </div>
      <AutoCenter className='buttonFooter'>
        <Button disabled block shape='rounded'>
          Continue
        </Button>
        <>
        <Button className="link-fullButton" block shape='rounded'>
            Add to Favourite
        </Button>
        </>
        <Button hasIcon block shape='rounded'>
          Add
          <AddOutline />
        </Button>
      </AutoCenter>
    </React.Fragment>
  )
}

export default Form
