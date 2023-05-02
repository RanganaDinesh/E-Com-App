import React from 'react'
import './Sliding.css' 
import image from './2_corousel.png'
import boy from '../../images/boy.png'
const SlidingImage = () => {
  return (
    <div className='box-sliding'> <div className='box-mobile'>
    <h1 className='mobile-name'>iPhone 6 Plus</h1>
   <p className='mobile-p'>Performance and design. Taken right to the edge.</p>
    <span className='mobile-span'>SHOP NOW</span>
</div>
        
          <img src={image} alt="" className='coro4' />
      <img src={boy} alt="" id='coro2' />
      <span className='mobile-buy'>BUY NOW &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i class="bi bi-bag-check-fill"  style={{ fontSize: '25px' }}></i></span>
      <span className='mobile-buy1'>GET OFFER &nbsp;&nbsp;&nbsp;<i class="bi bi-bag-check-fill"  style={{ fontSize: '25px' }}></i></span>
    </div>
  )
}

export default SlidingImage
