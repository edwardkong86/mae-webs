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
  updatedDate: '2022-10-20T06:48:23.795+00:00',
  id: 37012,
  title: 'Turn your spare change into a change of scenery',
  summary:
    '<p>We all have that one goal we set our minds to save for. Whether it&#8217;s a vacay to Europe with the besties, the latest phone or even that must-have fashion splurge, saving for whatever you want shouldn&#8217;t be that difficult.</p>&#10;<p>Achieve your goals faster and easier by saving with Tabung on the MAE app.</p>&#10;<p><b>Here&#8217;s how you can set up a Tabung:</b></p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1662205647873_Merdeka_Tabung_1.png"><br>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1662205647897_Merdeka_Tabung_2.png"><br>&#10;&#10;<p><b>Use these Boosters to help achieve your goals faster</b></p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1662205647927_Merdeka_Tabung_3.png"><br>&#10;&#10;<p><b>You can also stand a chance to win awesome prizes when you set up and save with Tabung!</b></p>&#10;&#10;<p><b>Step 1: </b>Select \'Create Tabung\' on your homepage and create an Individual Tabung.</p>&#10;&#10;<p><b>Step 2:</b> Set to save a minimum amount of RM500 and make sure the completion date of the Tabung is 18 November 2022.</p>&#10;<p><b>Step 3: </b> Activate any of the Boosters and proceed to complete your savings goal for a chance to win!</p>&#10;&#10;&#10;<p>Stand a chance to win iPhone 13 Pro Max, AirPods Pro and AEON shopping vouchers!</p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1662205647907_Merdeka_Tabung_4.png"><br>&#10;',
  summaryLinkText: null,
  template: null,
  source: 'CMS',
  promoted: true,
  published: true,
  imageUrl:
    'https://img.maybanksandbox.com/2/cms/maya-img/1662205647913_Merdeka_Tabung.jpg',
  fullText: '<p>T&amp;C Apply.</p>',
  introText: null,
  contentType: 'TEMPLATE1',
  likeCount: 466,
  dislikeCount: 6,
  bookmarkCount: null,
  contentUrl: null,
  collectionId: null,
  partnerId: null,
  merchantId: null,
  merchantName: null,
  partnerName: null,
  seen: 0,
  importedDate: '2022-10-20T06:48:23.953+00:00',
  publishedDate: '2022-09-03T11:51:07.139+00:00',
  callToActions: [
    {
      title: 'Read More',
      action: 'EXTERNAL_URL',
      url: 'https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/mae-raikan-malaysia-tabung.page'
    }
  ],
  tags: [],
  startDate: '2022-09-13T08:19:52.081+00:00',
  endDate: '2030-01-01T00:00:00.000+00:00',
  validDate: {
    start: '2022-09-13T08:19:52.081+00:00',
    end: '2030-01-01T00:00:00.000+00:00'
  },
  firstCTA: 'EXTERNAL_URL',
  firstCTAText: 'Read More',
  secondCTAText: null,
  secondCTA: null,
  firstCTAUrl:
    'https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/mae-raikan-malaysia-tabung.page',
  secondCTAUrl: null,
  promoValidDate: {
    start: null,
    end: null
  },
  promoCode: null,
  seenUser: 4096,
  createdBy: 0,
  updatedBy: 0,
  createdByUsername: '00134902',
  updatedByUsername: '00134902',
  userContent: {
    id: 44004,
    emotionStatus: 'LIKE',
    isBookmarked: null,
    userId: 493331402,
    contentId: 37012,
    collectionId: null,
    collectionName: null,
    defaultType: null
  },
  externalId: null,
  voucher: null,
  content: true
}

const jsonDataList = {
  content: [
    {
      updatedDate: '2022-10-30T05:14:54.934+00:00',
      id: 3910,
      title: 'Don’t become a mule account victim',
      summary:
        '<p><b>4 tactics scammers use to get mule accounts online.</b></p>&#10;<p>Scammers have more than one way to trick you into becoming a money mule. Here&#8217;s what you need to know to stay safe.</p><p><b>What is a mule account?</b></p><p>Mule accounts are accounts that don&#8217;t belong to the scammer but the scammer has access to it to receive and transfer stolen money while keeping their identity hidden.</p><p><b>What happens to mule account holders?</b></p><p>Anyone who holds a mule account could be:</p>&#10;<ul>&#10;<li>Detained for investigation</li>&#10;<li>Fined, jailed for 5 years or both</li>&#10;<li>Blacklisted by Maybank</li>&#10;<li>Unable to open a Maybank account in the future</li>&#10;</ul>&#10;<p>Here are the 4 common scam tactics:</p>&#10;<p>1. Fake job advertisements </p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1665736258736_tr-s2u-awareness1.jpg"><br>&#10;<p>If you see a job ad that is too good to be true, it could be a scam! Many scammers set up fake job postings on social media or they may approach you via chats to get you to give them your ATM card and banking details for fake salary processing. Don&#8217;t fall for them!&#10;</p>&#10;<p>2. Loan sharks </p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1665736258756_tr-s2u-awareness2.jpg"><br>&#10;<p>Loan sharks usually prey on their victims with quick and easy cash loans. In return, they will ask for your ATM card and banking information to &#8216;check on your money in the bank&#8217;. They will then use your account to transfer illegal money and keep their identities hidden. &#10;</p>&#10;<p>3. Bank account rentals</p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1665736258763_tr-s2u-awareness3.jpg"><br>&#10;<p>ALL bank account rentals are scams. They&#8217;ll offer you payment for your ATM card and online banking details so scammers can use your identities to funnel illegal funds and hide their real identity.  &#10;</p>&#10;<p>4. Friends and family</p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1665736258725_tr-s2u-awareness4.jpg"><br>&#10;<p>NEVER give out your ATM card or banking details to anyone, not even your friends and family. More often than not, the reason given is to help them receive and/or transfer funds to third parties using your bank account.&#10;</p>&#10;<p><b>What to do when you&#8217;re unsure if your bank account is compromised?</b></p>&#10;<p>Whenever in doubt, you can visit semakmule.rmp.gov.my to check if your bank account is compromised or if the bank account you&#8217;re transferring to is a mule account. This website also allows you to make a report of any suspicious mule accounts.</p>',
      summaryLinkText: null,
      template: null,
      source: 'CMS',
      promoted: true,
      published: true,
      imageUrl:
        'https://img.maybanksandbox.com/2/cms/maya-img/1667061261219_tr-mulescam-v3.jpg',
      fullText: '&#160;&#10;<p></p>',
      introText: null,
      contentType: 'TEMPLATE1',
      likeCount: 279,
      dislikeCount: 30,
      bookmarkCount: null,
      contentUrl: null,
      collectionId: null,
      partnerId: null,
      merchantId: null,
      merchantName: null,
      partnerName: null,
      seen: 0,
      importedDate: '2022-10-30T05:14:55.040+00:00',
      publishedDate: '2022-10-14T08:52:39.644+00:00',
      callToActions: [
        {
          title: 'Read More',
          action: 'EXTERNAL_URL',
          url: 'https://maybank.my/SecurityAwareness'
        }
      ],
      tags: [],
      startDate: null,
      endDate: '2022-10-14T08:44:04.137+00:00',
      validDate: {
        start: null,
        end: '2022-10-14T08:44:04.137+00:00'
      },
      firstCTA: 'EXTERNAL_URL',
      firstCTAText: 'Read More',
      secondCTAText: null,
      secondCTA: null,
      firstCTAUrl: 'https://maybank.my/SecurityAwareness',
      secondCTAUrl: null,
      promoValidDate: {
        start: null,
        end: null
      },
      promoCode: null,
      seenUser: 7083,
      createdBy: 0,
      updatedBy: 0,
      createdByUsername: '00134902',
      updatedByUsername: '00134902',
      userContent: {
        id: 27149,
        emotionStatus: 'LIKE',
        isBookmarked: null,
        userId: 493331402,
        contentId: 3910,
        collectionId: null,
        collectionName: null,
        defaultType: null
      },
      externalId: null,
      voucher: null,
      content: true
    },
    {
      updatedDate: '2022-10-28T07:49:10.938+00:00',
      id: 33121,
      title: 'Is it too soon to think about retirement?',
      summary:
        '<p>The answer is: it&#8217;s never too soon! The earlier you start planning, the better. Where do I start? How much do I need to save? Fret not, we&#8217;re here to give you some pointers to kickstart your road to retirement!</p>&#10;<p><b>At what age should I start planning?</b></p>&#10;<p>The truth is &#8211; you should start as early as your 20&#8217;s or once you enter the workforce and start earning money. It&#8217;s pretty simple: the more funds you have, the more comfortable your retirement will be.</p>&#10;<p><b>Is EPF not enough?</b></p>&#10;<p>Your Employee Provident Fund (EPF), also known as KWSP, is a good start but there&#8217;s no harm in growing your funds to retire more comfortably. If you&#8217;re a salaried worker, your monthly EPF contributions come from both you and your employer.</p>&#10;<p>If you didn&#8217;t know, you can actually increase your employee contribution up to 11% (it was lowered to 9% because of the pandemic), so you can bump up your savings each month! In some companies, the employer&#8217;s contribution can be more than 13%. Want to know if you can negotiate this amount? Drop an email to your recruiter or HR to find out!</p>&#10;<p><b>Can I top up my own EPF contributions?</b></p>&#10;<p>Yes, you can! All you need is your EPF number. If you&#8217;re self-employed, visit<a href="www.kwsp.gov.my"> www.kwsp.gov.my</a> and set up an EPF account. You can even set up recurring transfers to your EPF account via Maybank2u, here&#8217;s how:</p>&#10;<p><b>Step 1:</b> On your MAE dashboard, go to &#8216;Maybank2u&#8217; at the bottom navigation bar</p>&#10;<p><b>Step 2:</b> Tap &#8216;Pay&#8217; &gt; Select &#8216;Payee&#8217; then key in &#8216;EPF&#8217;</p>&#10;<p><b>Step 3:</b> Follow the on-screen instructions to set up recurring payments</p>&#10;<p><i>Tip: Make your contributions now so you can earn dividends for this year in early 2023!</i></p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1666231227685_M2U_Retirement_02.png"><br>&#10;<p><b>I don&#8217;t know how much to save. How can I find out?</b></p>&#10;<p>Planning your retirement savings is easier than you think, it&#8217;s all about breaking down your expenses. Let us help you with the first step: start with the Maybank Financial Goal Simulator, tap the button at the end of this article to give yourself an stimate.</p>&#10;<p>This simulator calculates an estimated amount for you so you can gauge how much you&#8217;ll need to start saving!</p>&#10;<p><b>My savings goal is six figures. How can I reach it?</b></p>&#10;<p>Don&#8217;t be too alarmed if you see a large sum of money. That&#8217;s completely normal because the simulator factors in your retirement age, monthly expenses and the number of years you&#8217;d like the money to last too. Plus, there are other ways to grow your money apart from just investing it in EPF. For instance, you can invest extra money in&#160;<a href="https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/wealth/unit_trusts/unit_trusts.page" target="_blank">Unit Trust</a>,&#160;<a href="https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/accounts/fixed_deposits/efixed_deposit.page" target="_blank">Fixed Deposit</a>,&#160;<a href="https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/wealth/asnb/asb_unit_trust_additional_purchase.page" target="_blank">ASNB</a>&#160;and more.</p>&#10;<p><i>Tip: Always do your research and never invest on a whim!</i></p>&#10;<p>Having a goal in mind means you&#8217;re already on your way to saving a little more for your retirement!</p>&#10;<p>Like this article? We&#8217;ll be sharing more about retirement funds besides EPF so stay tuned for the next read!</p>&#10;<p>This article was first published in October 2022.</p>&#10;<p>Disclaimer: The information provided above is not to be construed as financial advice and/or the provision of financial planning services. Neither is it to be construed as financial, legal, accounting, tax or any other form of advice whatsoever. You must obtain your own independent advice before making any financial or other decisions. No representations or warranties are provided as to the accuracy, completeness or timeliness of any of the information provided here. The Bank shall not be held liable and/or responsible for any loss as a result of reliance on the information presented.</p>',
      summaryLinkText: null,
      template: null,
      source: 'CMS',
      promoted: true,
      published: true,
      imageUrl:
        'https://img.maybanksandbox.com/2/cms/maya-img/1666231227667_M2U_Retirement_01.png',
      fullText: '<p></p>',
      introText: null,
      contentType: 'TEMPLATE1',
      likeCount: 52,
      dislikeCount: 2,
      bookmarkCount: null,
      contentUrl: null,
      collectionId: null,
      partnerId: null,
      merchantId: null,
      merchantName: null,
      partnerName: null,
      seen: 0,
      importedDate: '2022-10-28T07:49:10.956+00:00',
      publishedDate: '2022-10-20T02:08:59.998+00:00',
      callToActions: [
        {
          title: 'Simulate My Goal',
          action: 'EXTERNAL_URL',
          url: 'https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/wealth/digital_wealth/retirement.page'
        }
      ],
      tags: [],
      startDate: '2022-10-27T17:00:00.000+00:00',
      endDate: '2023-02-27T16:01:00.000+00:00',
      validDate: {
        start: '2022-10-27T17:00:00.000+00:00',
        end: '2023-02-27T16:01:00.000+00:00'
      },
      firstCTA: 'EXTERNAL_URL',
      firstCTAText: 'Simulate My Goal',
      secondCTAText: null,
      secondCTA: null,
      firstCTAUrl:
        'https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/wealth/digital_wealth/retirement.page',
      secondCTAUrl: null,
      promoValidDate: {
        start: null,
        end: null
      },
      promoCode: null,
      seenUser: 1429,
      createdBy: 0,
      updatedBy: 0,
      createdByUsername: '00139283',
      updatedByUsername: '00134902',
      userContent: {
        id: 177008,
        emotionStatus: 'LIKE',
        isBookmarked: null,
        userId: 493331402,
        contentId: 33121,
        collectionId: null,
        collectionName: null,
        defaultType: null
      },
      externalId: null,
      voucher: null,
      content: true
    },
    {
      updatedDate: '2022-10-28T07:46:15.270+00:00',
      id: 33023,
      title: 'Buying new vs used cars: Which is better?',
      summary:
        '<p>When it comes to buying a car, we all want to get the best bang for our buck. Here are four things you should know before deciding on a brand new or used car!</p>&#10;<p><b>1. Price: used cars are exponentially more affordable</b></p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1666230565153_M2U_NewOldCar_02.jpg"><br>&#10;<p>Used cars are a great way to get your dream ride for less. You can find a car that\'s just as affordable but with higher specifications. Of course, there are some things to look out for when buying a used car. You can start by researching the model\'s longevity, especially the engine, through reviews online! Then, check the car\'s full maintenance history, parts and servicing before you make a purchase.</p>&#10;<p><b>2. Maintenance: new cars are covered by the manufacturer&#8217;s warranty</b></p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1666230565295_M2U_NewOldCar_03.jpg"><br>&#10;<p>A new car might be more expensive than a used one, but you won\'t have to worry about costly repairs or regular maintenance. New cars would not surprise you with wear and tear, such as a broken gearbox or compressor, which could cost quite a bit to repair or replace. All of that is covered under your warranty. And also, you don&#8217;t have to worry about the car not starting in the morning or if the air conditioning will hold out during a heat wave!</p>&#10;<p><b>3. Insurance: used cars are cheaper to insure</b></p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1666230565261_M2U_NewOldCar_04.jpg"><br>&#10;<p>You can spend less on car insurance if you purchase a used vehicle! The market value of your car is one of many factors that go into determining your car insurance premium. So a cheaper car would translate to cheaper insurance. On top of that, you can transfer your No Claim Discount (NCD) to your next car to continue enjoying a discount on your insurance premium!</p>&#10;<p><i>Tip: Make sure to change the ownership of the car at the Road Transport Department (JPJ) before transferring your NCD.</i></p>&#10;<p><b>4. Car loan: banks offer lower interest rates on new cars</b></p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1666230565217_M2U_NewOldCar_05.jpg"><br>&#10;<p>When you\'re buying a new car, there are more financing options available to you. This means you can get a lower interest rate and more favourable terms. The downside of taking a loan for a used car is that the interest rate is higher than that of a new car.</p>&#10;<p><b>Should I buy a new or used car?</b></p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1666230565261_M2U_NewOldCar_06.jpg"><br>&#10;<p>The decision of whether to buy a new or used car is up to you. Both options have their pros and cons, and it ultimately comes down to what&#8217;s important to you. Before you commit to a loan, having an idea of your monthly repayment can help when you&#8217;re putting together a budget. Tap on the button below and select \'Car Loan Calculator\' to estimate your monthly repayment amount.&#10;</p>&#10;<p>This article was first published in October 2022.</p>&#10;<p>Disclaimer: The information provided above is not to be construed as investment advice and/or the provision of financial planning services. Neither is it to be construed as financial, legal, accounting, tax or any other form of advice whatsoever. You must obtain your own independent advice before making any financial or other decisions. No representations or warranties are provided as to the accuracy, completeness or timeliness of any of the information provided here. The Bank shall not be held liable and/or responsible for any loss as a result of reliance on the information presented.</p>',
      summaryLinkText: null,
      template: null,
      source: 'CMS',
      promoted: true,
      published: true,
      imageUrl:
        'https://img.maybanksandbox.com/2/cms/maya-img/1666230565290_M2U_NewOldCar_01.jpg',
      fullText: '<p></p>',
      introText: null,
      contentType: 'TEMPLATE1',
      likeCount: 31,
      dislikeCount: 1,
      bookmarkCount: null,
      contentUrl: null,
      collectionId: null,
      partnerId: null,
      merchantId: null,
      merchantName: null,
      partnerName: null,
      seen: 0,
      importedDate: '2022-10-28T07:46:15.298+00:00',
      publishedDate: '2022-10-20T01:48:32.462+00:00',
      callToActions: [
        {
          title: 'Check Monthly Repayment',
          action: 'EXTERNAL_URL',
          url: 'https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/loans/hire_purchase_loan_listing.page'
        }
      ],
      tags: [],
      startDate: '2022-10-26T17:00:00.000+00:00',
      endDate: '2023-02-27T16:00:00.000+00:00',
      validDate: {
        start: '2022-10-26T17:00:00.000+00:00',
        end: '2023-02-27T16:00:00.000+00:00'
      },
      firstCTA: 'EXTERNAL_URL',
      firstCTAText: 'Check Monthly Repayment',
      secondCTAText: null,
      secondCTA: null,
      firstCTAUrl:
        'https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/loans/hire_purchase_loan_listing.page',
      secondCTAUrl: null,
      promoValidDate: {
        start: null,
        end: null
      },
      promoCode: null,
      seenUser: 686,
      createdBy: 0,
      updatedBy: 0,
      createdByUsername: '00139283',
      updatedByUsername: '00134902',
      userContent: {
        id: 177007,
        emotionStatus: 'LIKE',
        isBookmarked: null,
        userId: 493331402,
        contentId: 33023,
        collectionId: null,
        collectionName: null,
        defaultType: null
      },
      externalId: null,
      voucher: null,
      content: true
    },
    {
      updatedDate: '2022-10-20T07:08:02.475+00:00',
      id: 34914,
      title: 'Worried about SMS TAC fraud? We’ve got you covered! ',
      summary:
        '<p>Did you know that scam apps (commonly .apk files) can steal SMS from your device? This means it can redirect your SMS TAC to a scammer and you won&#8217;t even receive a text at all.</p>&#10;<p>So, what can you do? Switch to Secure2u instead!</p>&#10;<p><b>How is Secure2u safer?</b></p>&#10;<p>Secure2u pairs your device to your Maybank2u account &#8211; ensuring that you can only authorise transactions on one registered device at a time. And, that helps to reduce your exposure to SMS TAC fraud too. Plus, it&#8217;s faster because you can approve transactions with just one tap.</p>&#10;<p><b>How do I use Secure2u?</b></p>&#10;<p>It&#8217;s quick and it&#8217;s easy: simply make an online transaction and you&#8217;ll receive a notification from your MAE app, on your registered device. Then, just &#8216;Approve&#8217; or &#8216;Reject&#8217; the transaction with one tap!</p>&#10;<p><i>Tip: Allow push notification for the MAE app, so you can easily access your Secure2u verification via push notification. No login required!</i></p>&#10;<p><b>How do I activate Secure2u?</b></p>&#10;<p>Just go to your dashboard and you&#8217;ll see &#8216;Secure2u&#8217; right under Quick Actions. Tap on it and follow the on-screen instructions to enable Secure2u.</p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1666248784274_tr-s2u-cooling-2.jpg"><br>&#10;<p>Activate Secure2u now so you can use it as soon as possible because it&#8217;s enhanced with a 12-hour activation period to prevent unauthorised transaction approvals and further safeguard your online banking security. </p>&#10;<p><i>Note: This 12-hour activation period only happens when you enable Secure2u on the MAE app for the first time or on a different device. </i></p>&#10;<p><b>This article was first published in October 2022.</b></p>&#10;',
      summaryLinkText: null,
      template: null,
      source: 'CMS',
      promoted: true,
      published: true,
      imageUrl:
        'https://img.maybanksandbox.com/2/cms/maya-img/1666248821113_tr-s2u-cooling-1.jpg',
      fullText:
        '<br><div class="small">Disclaimer:<br>&#10;The information provided above is not to be construed as investment advice and/or the provision of financial planning&#10;services. Neither is it to be construed as financial, legal, accounting, tax or any other form of advice whatsoever. You must obtain your own independent advice before making any financial or other decisions. No representations or warranties are provided as to the accuracy, completeness or timeliness of any of the information provided here. The Bank shall not be held liable and/or&#10;responsible for any loss as a result of reliance on the information presented.</div>&#10;',
      introText: null,
      contentType: 'TEMPLATE1',
      likeCount: 266,
      dislikeCount: 12,
      bookmarkCount: null,
      contentUrl: null,
      collectionId: null,
      partnerId: null,
      merchantId: null,
      merchantName: null,
      partnerName: null,
      seen: 0,
      importedDate: '2022-10-20T07:08:02.487+00:00',
      publishedDate: '2022-10-20T07:08:02.475+00:00',
      callToActions: [
        {
          title: 'Tell Me More',
          action: 'EXTERNAL_URL',
          url: 'https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/announcements/2022/october/secure2u-activation-period.page?utm_source=mae&utm_medium=app&utm_campaign=secure2u&utm_content=topreads'
        }
      ],
      tags: [],
      startDate: null,
      endDate: '2022-10-20T07:04:23.901+00:00',
      validDate: {
        start: null,
        end: '2022-10-20T07:04:23.901+00:00'
      },
      firstCTA: 'EXTERNAL_URL',
      firstCTAText: 'Tell Me More',
      secondCTAText: null,
      secondCTA: null,
      firstCTAUrl:
        'https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/announcements/2022/october/secure2u-activation-period.page?utm_source=mae&utm_medium=app&utm_campaign=secure2u&utm_content=topreads',
      secondCTAUrl: null,
      promoValidDate: {
        start: null,
        end: null
      },
      promoCode: null,
      seenUser: 3386,
      createdBy: 0,
      updatedBy: 0,
      createdByUsername: '00134902',
      updatedByUsername: '00134902',
      userContent: {
        id: 149072,
        emotionStatus: 'LIKE',
        isBookmarked: null,
        userId: 493331402,
        contentId: 34914,
        collectionId: null,
        collectionName: null,
        defaultType: null
      },
      externalId: null,
      voucher: null,
      content: true
    },
    {
      updatedDate: '2022-10-20T06:50:55.299+00:00',
      id: 37016,
      title:
        "Property assessment tax is due 31 Aug! Here's what you need to know",
      summary:
        '<p>If you are a new homeowner or property owner, let us help answer some commonly asked questions so you know what to do next!</p>&#10;<p><b>What is Assessment Tax?</b></p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1662206207344_Cukaitaksiran_house.jpg"><br>&#10;<p>Assessment Tax is more commonly known as <i>Cukai Taksiran</i> or <i>Cukai Pintu</i>. It is the land tax collected by local town councils to maintain local infrastructure and services such as lighting, cleaning of parks and municipal waste collection.</p>&#10;<p><b>How do I know if I need to pay?</b></p>&#10;<p>If you own a home or a property under your name, you are required to pay Assessment Tax twice every year, before 28 February and 31 August respectively.</p>&#10;<p><b>What if I don&#8217;t own a home and pay rent instead?</b></p>&#10;<p>If you&#8217;re paying rent for the place you&#8217;re staying in, not to worry. This tax is usually paid for by the homeowner but you can always check with your property agent or landlord to be sure.</p>&#10;<p><b>How much do I need to pay?</b></p>&#10;<p>The tax amount differs from one homeowner to another, it depends on the type of property you own. You can check your Assessment Tax bill that&#8217;s usually sent to your house by mail from your town council!</p>&#10;<p>If you haven&#8217;t received yours, contact your local town council (e.g. Dewan Bandaraya Kuala Lumpur) to request for your bill.</p>&#10;<p><b>How can I pay?</b></p>&#10;<p>You can easily pay your Assessment Tax online with us! Simply follow this step-by-step guide:</p>&#10;<img src="https://img.maybanksandbox.com/2/cms/maya-img/1662206207347_Cukaitaksiran_phone.jpg"><br>&#10;<p><b>Step 1:</b> Go to your &#8216;Wallet&#8217; and log in</p>&#10;<p><b>Step 2:</b> Tap &#8216;Pay Bills&#8217; and search for &#8216;Cukai Taksiran&#8217;</p>&#10;<p><b>Step 3:</b> Select your local authority and proceed to pay</p>&#10;<p><i>Tip: Remember to save your receipt for future reference!</i></p>&#10;<p>If you haven&#8217;t paid yet, be sure to do it soon before 31 August 2022 to avoid late payment charges!</p>&#10;<p>This article was first published in August 2022.</p>&#10;<p><i>Disclaimer:</i></p>&#10;&#10;<p><i>The information provided above is not to be construed as investment advice and/or the provision of financial planning services. Neither is it to be construed as financial, legal, accounting, tax or any other form of advice whatsoever. You must obtain your own independent advice before making any financial or other decisions. No representations or warranties are provided as to the accuracy, completeness or timeliness of any of the information provided here. The Bank shall not be held liable and/or responsible for any loss as a result of reliance on the information presented.</i></p>&#10;&#10;&#10;',
      summaryLinkText: null,
      template: null,
      source: 'CMS',
      promoted: true,
      published: true,
      imageUrl:
        'https://img.maybanksandbox.com/2/cms/maya-img/1662206407012_Cukaitaksiran_cover.jpg',
      fullText: null,
      introText: null,
      contentType: 'TEMPLATE1',
      likeCount: 315,
      dislikeCount: 4,
      bookmarkCount: null,
      contentUrl: null,
      collectionId: null,
      partnerId: null,
      merchantId: null,
      merchantName: null,
      partnerName: null,
      seen: 0,
      importedDate: '2022-10-20T06:50:55.348+00:00',
      publishedDate: '2022-09-03T12:00:16.140+00:00',
      callToActions: [
        {
          title: 'Make Payment Now',
          action: 'WALLET_PAYBILL',
          url: null
        }
      ],
      tags: [],
      startDate: '2022-09-12T03:47:21.320+00:00',
      endDate: '2030-01-01T00:00:00.000+00:00',
      validDate: {
        start: '2022-09-12T03:47:21.320+00:00',
        end: '2030-01-01T00:00:00.000+00:00'
      },
      firstCTA: 'WALLET_PAYBILL',
      firstCTAText: 'Make Payment Now',
      secondCTAText: null,
      secondCTA: null,
      firstCTAUrl: null,
      secondCTAUrl: null,
      promoValidDate: {
        start: null,
        end: null
      },
      promoCode: null,
      seenUser: 3023,
      createdBy: 0,
      updatedBy: 0,
      createdByUsername: '00134902',
      updatedByUsername: '00134902',
      userContent: {
        id: 44011,
        emotionStatus: 'LIKE',
        isBookmarked: null,
        userId: 493331402,
        contentId: 37016,
        collectionId: null,
        collectionName: null,
        defaultType: null
      },
      externalId: null,
      voucher: null,
      content: true
    }
  ],
  pageable: {
    sort: {
      empty: false,
      unsorted: false,
      sorted: true
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 5,
    unpaged: false,
    paged: true
  },
  totalElements: 11,
  totalPages: 3,
  last: false,
  size: 5,
  number: 0,
  sort: {
    empty: false,
    unsorted: false,
    sorted: true
  },
  numberOfElements: 5,
  first: true,
  empty: false
}

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
      <Block>
        <AddOutline />
      </Block>
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
