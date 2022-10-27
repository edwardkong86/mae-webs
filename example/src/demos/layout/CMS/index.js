import React from 'react'
import {
  TextInput,
  Block,
  Header,
  DropdownPicker,
  Button,
  Radio,
  ShowModal,
  Tab,
  Result
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

const jsonData = {
  "updatedDate": "2022-10-20T06:48:23.795+00:00",
  "id": 37012,
  "title": "Turn your spare change into a change of scenery",
  "summary": "<p>We all have that one goal we set our minds to save for. Whether it&#8217;s a vacay to Europe with the besties, the latest phone or even that must-have fashion splurge, saving for whatever you want shouldn&#8217;t be that difficult.</p>&#10;<p>Achieve your goals faster and easier by saving with Tabung on the MAE app.</p>&#10;<p><b>Here&#8217;s how you can set up a Tabung:</b></p>&#10;<img src=\"https://img.maybanksandbox.com/2/cms/maya-img/1662205647873_Merdeka_Tabung_1.png\"><br>&#10;<img src=\"https://img.maybanksandbox.com/2/cms/maya-img/1662205647897_Merdeka_Tabung_2.png\"><br>&#10;&#10;<p><b>Use these Boosters to help achieve your goals faster</b></p>&#10;<img src=\"https://img.maybanksandbox.com/2/cms/maya-img/1662205647927_Merdeka_Tabung_3.png\"><br>&#10;&#10;<p><b>You can also stand a chance to win awesome prizes when you set up and save with Tabung!</b></p>&#10;&#10;<p><b>Step 1: </b>Select 'Create Tabung' on your homepage and create an Individual Tabung.</p>&#10;&#10;<p><b>Step 2:</b> Set to save a minimum amount of RM500 and make sure the completion date of the Tabung is 18 November 2022.</p>&#10;<p><b>Step 3: </b> Activate any of the Boosters and proceed to complete your savings goal for a chance to win!</p>&#10;&#10;&#10;<p>Stand a chance to win iPhone 13 Pro Max, AirPods Pro and AEON shopping vouchers!</p>&#10;<img src=\"https://img.maybanksandbox.com/2/cms/maya-img/1662205647907_Merdeka_Tabung_4.png\"><br>&#10;",
  "summaryLinkText": null,
  "template": null,
  "source": "CMS",
  "promoted": true,
  "published": true,
  "imageUrl": "https://img.maybanksandbox.com/2/cms/maya-img/1662205647913_Merdeka_Tabung.jpg",
  "fullText": "<p>T&amp;C Apply.</p>",
  "introText": null,
  "contentType": "TEMPLATE1",
  "likeCount": 466,
  "dislikeCount": 6,
  "bookmarkCount": null,
  "contentUrl": null,
  "collectionId": null,
  "partnerId": null,
  "merchantId": null,
  "merchantName": null,
  "partnerName": null,
  "seen": 0,
  "importedDate": "2022-10-20T06:48:23.953+00:00",
  "publishedDate": "2022-09-03T11:51:07.139+00:00",
  "callToActions": [
      {
          "title": "Read More",
          "action": "EXTERNAL_URL",
          "url": "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/mae-raikan-malaysia-tabung.page"
      }
  ],
  "tags": [],
  "startDate": "2022-09-13T08:19:52.081+00:00",
  "endDate": "2030-01-01T00:00:00.000+00:00",
  "validDate": {
      "start": "2022-09-13T08:19:52.081+00:00",
      "end": "2030-01-01T00:00:00.000+00:00"
  },
  "firstCTA": "EXTERNAL_URL",
  "firstCTAText": "Read More",
  "secondCTAText": null,
  "secondCTA": null,
  "firstCTAUrl": "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/mae-raikan-malaysia-tabung.page",
  "secondCTAUrl": null,
  "promoValidDate": {
      "start": null,
      "end": null
  },
  "promoCode": null,
  "seenUser": 4096,
  "createdBy": 0,
  "updatedBy": 0,
  "createdByUsername": "00134902",
  "updatedByUsername": "00134902",
  "userContent": {
      "id": 44004,
      "emotionStatus": "LIKE",
      "isBookmarked": null,
      "userId": 493331402,
      "contentId": 37012,
      "collectionId": null,
      "collectionName": null,
      "defaultType": null
  },
  "externalId": null,
  "voucher": null,
  "content": true
};

const Form = () => {
  return (
    <React.Fragment>
      <Header />
      <Tab items={items} />
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
          <div style={{ marginTop: '10px' }}>
            <ShowModal />
          </div>
        </div>
      </div>
      <AutoCenter className='buttonFooter'>
        <Button disabled block shape='rounded'>
          Continue
        </Button>
        <Button className='link-fullButton' block shape='rounded'>
          Add to Favourite
        </Button>
        <div style={{ marginBottom: '10px' }}>
          <Button className='sec-fullButton' block shape='rounded'>
            Add to Favourite
          </Button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Button className='sec-fullButton' disabled block shape='rounded'>
            Add to Favourite
          </Button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Button hasIcon block shape='rounded'>
            Add
            <AddOutline />
          </Button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Button hasIcon disabled block shape='rounded'>
            Add
            <AddOutline />
          </Button>
        </div>
      </AutoCenter>

    </React.Fragment>
  )
}

export default Form
