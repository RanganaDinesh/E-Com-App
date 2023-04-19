import React,{useState} from 'react'
import Nav from '../HeaderComponents/Nav'
import GenericLandScope from '../GenericComponents/GenericCards/GenericLandScope'
import GenericCards from '../GenericComponents/GenericCards/GenericCards'
import Footer from './Footer'

const Ipad = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const data=require('../../ApiData/Ipaddata.json')
  const [products] = useState(data);
  const [product] = useState(data);
  return (
      <div>
      <Nav />
      <div id='menubar-set'>
      
        <i class="bi bi-grid-3x3-gap-fill" id='hover-blue'onClick={toggleVisibility}></i>
     
     
          <i class="bi bi-border-width" id='hover-blue' onClick={toggleVisibility}></i>
          


      </div>
      {isVisible ? (
          product.map((product, index ,item) => {
            return (
                
                <GenericLandScope product={product} index={index} item={item}/> )
        })
          
        ) : (
          <div className='box-container'>
      {products.map((product, index ,item) => {
        return (
            
            <GenericCards product={product} index={index} item={item}/> )
    })
      }
      </div>
        )}

<Footer/>




    
      
     
    </div>
  )
}

export default Ipad
