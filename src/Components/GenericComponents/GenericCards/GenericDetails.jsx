import React from 'react'
import support from './support.svg'
import refound from './refund.svg'
import shipping from './shipping.svg'
const GenericDetails = () => {
  return (
    <div className='policy-div'>
          <div className='policy-content'>
             
              <img src={shipping} alt="" />
              <br /><br /><br />
              <h2>FREE SHIPPING</h2><br />
              <p>Lorem ipsum dolor sit  consectetur adipisicing elit. Eveniet atque facere accusamus ducimus repudiandae, eligendi eaque culpa placeat harum obcaecati dicta officiis libero iusto provident delectus dolorem enim quia ut.</p>
              
      </div>
          <div className='policy-content'>
              
              <img src={refound} alt="" /><br /><br /><br />
              <h2>100% REFUND</h2><br />
              <p>Lorem ipsum dolor sit  consectetur adipisicing elit. Eveniet atque facere accusamus ducimus repudiandae, eligendi eaque culpa placeat harum obcaecati dicta officiis libero iusto provident delectus dolorem enim quia ut.</p>

      </div>
          <div className='policy-content'>
              
              <img src={support} alt="" /><br /><br /><br />
              <h2>SUPPORT 24/7</h2><br />
              <p>Lorem ipsum dolor sit  consectetur adipisicing elit. Eveniet atque facere accusamus ducimus repudiandae, eligendi eaque culpa placeat harum obcaecati dicta officiis libero iusto provident delectus dolorem enim quia ut.</p>

      </div>
    </div>
  )
}

export default GenericDetails
