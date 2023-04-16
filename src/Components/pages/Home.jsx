import React from 'react'
import GenericProducts from '../GenericComponents/GenericProducts'
import ContentProdect from '../HeaderComponents/ContentProdect'
import Nav from '../HeaderComponents/Nav'
import SlidingImage from '../HeaderComponents/SlidingImage'

import './Home.css'
const Home = () => {
  return (
      <div>
          <Nav/>
      <SlidingImage />
      <h2 className='best-seller'>BEST SELLER</h2>
     
      <GenericProducts />
      <ContentProdect/>
    </div>
  )
}

export default Home
