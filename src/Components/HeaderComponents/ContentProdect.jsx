import React from 'react'
import './ContectProduct.css'
import image from './2_corousel.png'

const ContentProdect = () => {
  return (
      <div>
          <div className='box-sliding1'>
          <img src={image} alt="" className='coro2' />
              <div className='box-mobile'>
                  <h1 className='mobile-name'>iPhone 6 Plus</h1>
                 <p className='mobile-p'>Performance and design. Taken right to the edge.</p>
                  <span className='mobile-span'>SHOP NOW</span>
              </div>
       
       
 </div>
      
    </div>
  )
}

export default ContentProdect
