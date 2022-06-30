import React from 'react'
import { TextInput } from 'mae-webs'
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
  return (
    <div>
      {data.map((d, index) => (
        <TextInput
          key={index}
          label={d.label}
          placeholder={d.placeholder}
          error={d?.error}
        />
      ))}
    </div>
  )
}

export default Form
