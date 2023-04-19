import React from 'react'
import GenericProducts from '../GenericComponents/GenericProducts'
import ContentProdect from '../HeaderComponents/ContentProdect'
import Nav from '../HeaderComponents/Nav'
import SlidingImage from '../HeaderComponents/SlidingImage'
import GenericSlider from "../GenericComponents/GenericCards/GenericSlider"

import './Home.css'
import Footer from './Footer'
import GenericDetails from '../GenericComponents/GenericCards/GenericDetails'
const Home = () => {
  return (
      <div>
          <Nav/>
      <SlidingImage />
      <h2 className='best-seller'>BEST SELLER</h2>
     
      <GenericProducts />
      <ContentProdect />
      <GenericDetails/>
      <GenericSlider />
      <Footer/>
    </div>
  )
}

export default Home
