import React from 'react'
import { Tab } from 'mae-webs'
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
  return <Tab items={items}/>
}

export default Dashboard
