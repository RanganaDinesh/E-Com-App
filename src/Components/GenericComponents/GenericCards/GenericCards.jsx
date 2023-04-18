import React from 'react'
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from 'react-router-dom'

const GenericCards = ({ product, index, item }) => {
    const Navigate = useNavigate()
    const handlenavigate = (id , product) => {
      Navigate(`/Details/${id}`,{
        state: {Details:product}
  
      })
    
    }
  return (
    <div >
      
      <div >
   
            <div className='product-box main-card ' key={index} >
              <div className="circle">
            <div className='blur-box ' >
                          <span className='hot-box'>Hot</span>
                          <div className='cart-like'>
                <div className="like">
                <img src={product.image} className='img-product1' alt="" />
                      <button className='cartbag'onClick={()=>handlenavigate(index ,product,product.id )}><i class="bi bi-cart4" id='bag' ></i>Add Cart</button>
                          </div>
                                        
                  </div>
                  
              <img src={product.image} className='img-product' alt="" />
              
             
            </div>
            <div className='back'>
                          <h4 className='item-h'>{ product.name}</h4>
                          <Stack className="best-product-rating" spacing={1}>
                  <Rating
                    name="half-rating-read"
                    // defaultValue={2.5}
                    value={product.rating}
                    precision={0.5}
                    readOnly
                    className='rating-star'
                  />
                </Stack>
                <span className='price-red'> {product.newPrice}<span className='price-black'>{product.oldPrice}</span></span>
               
            
                          
          
                </div>
                </div>
              
             
        
        </div>
        </div>
         
    </div>
  )
}

export default GenericCards
