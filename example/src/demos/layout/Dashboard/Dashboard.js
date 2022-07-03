import React from 'react'
import { Result , Wallet} from 'mae-webs'

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
const Dashboard = () => {
  return (
    // <Result
    //   status='success'
    //   title='Financing Successful!'
    //   description='We will update you within 5 working days once your ASB loan and investment has been placed.'
    // />
    <Wallet title="Wallet" desc="RM 225.00"/>
  )
}

export default Dashboard
