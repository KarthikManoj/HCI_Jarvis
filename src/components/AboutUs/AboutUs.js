import React from 'react'

import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'


const App = () => {
  const items = [
    {
      id: 1,
      header: 'About us',
      description:
        'InternationalSchoolBooks.lk is an online comparison website for international school books which brings together buyers and sellers, where they can buy and sell at the best price.',

    },
    {
      id: 2,
      header: 'If you are a buyer',
      description:
        'You can compare prices of NEW books from different bookshops, and compare prices of carefully used books from many resellers, All in one place',

    },
    {
      id: 3,
      header: 'If you are a Seller',
      description:
        'Convenient way to sell your pre-used text books',

    },
    
  ]
  return (
    <CardView
      items={items}
      activeColor='#000'
      imageHeight='650px'
      imageWidth='800px'
    />
  )
}

export default App