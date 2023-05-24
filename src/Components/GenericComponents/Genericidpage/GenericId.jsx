import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import GenericSlider from '../../GenericComponents/GenericCards/GenericSlider'
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Nav from "../../HeaderComponents/Nav"
import "./GenericId.css"
import Footer from '../../pages/Footer';


const GenericId = () => {
    
    const [isNameChanged, setIsNameChanged] = useState(false);
  
    const handleClick = () => {
      if (isNameChanged) {
        
        setIsNameChanged(false);
      } else {
       
        setIsNameChanged(true);
      }
    };
    
    const location = useLocation();
    const product = location.state.Details;
  return (
      <>
           <Nav/>
          <div id='container-uni'>
              <img src={product.image} alt="" className='generic-img' />
              <div className='section-details'>
              <h1 className='generic-h1'>{product.name}</h1>
              <Stack className="best-product-rating" spacing={2}>
                  <Rating
                    name="half-rating-read"
                    // defaultValue={2.5}
                    value={product.rating}
                    precision={0.5}
                       
                    className='rating-star'
                  />
                  </Stack> <br />
                  <h3 className='generic-new'>Sale Price :${ product.newPrice}/-  <br />
                  <span className='generic-old'> Original Price :${ product.oldPrice}/-</span></h3><br />
                
                  <p className='generic-pre'><strong>Item Description : </strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ratione odit illo molestias itaque tempore possimus cumque nihil exercitationem,</p>
                  <button onClick={handleClick} className='btn-generic'> {isNameChanged ? 'Add to Cart' : 'Remove  from cart'}</button>
            </div>
   

      </div>
      <GenericSlider />
      <Footer/>
      </>
  )
}

export default GenericId
