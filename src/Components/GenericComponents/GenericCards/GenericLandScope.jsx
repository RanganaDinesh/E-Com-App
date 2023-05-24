import React from 'react'
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from 'react-router-dom'

const GenericLandScope = ({ product, index, item }) => {
    const Navigate = useNavigate()
    const handlenavigate = (id , product) => {
      Navigate(`/Details/${id}`,{
        state: {Details:product}
  
      })
    
    }
  return (
      <div>
             <div className='landscope-generic'  key={index} >
                    <div className="circle">
                    <div className='blur-box ' >
                    <span className='hot-box'>Hot</span>

                    <img src={product.image} className='img-product' alt="" />
                    </div>
              </div>
              
  <div className='back'>
                  <h3  id='head-generic'>{product.name} <br />
                  <Stack className="best-product-rating" spacing={1}>
                <Rating
                name="half-rating-read"
                // defaultValue={2.5}
                value={product.rating}
                precision={0.5}
                readOnly
                className='rating-star'
                />
                      </Stack> <br />
                      <div className='cart-like'>
                    <div className="like">
                    <button className='cartbag' id='btn-land' onClick={()=>handlenavigate(index ,product,product.id )}><i class="bi bi-cart4" id='bag' ></i>Add Cart</button>
                    </div>
                    </div></h3>
                
</div>

          <div id='price-tag' style={{marginLeft:'-100px'}}>
                  {/* <span>Price :<span className='price-red' id='price-text'> {product.newPrice}<span className='price-black'>{product.oldPrice}</span></span></span> */}
                  <h4 id='1price-tag'>SalePrice :  &#8377;{product.newPrice}/- </h4>
                  <h4 id='old-tag1'>OriginalPrice :  &#8377; {product.oldPrice}/-</h4>

</div>

</div>

    </div>
  )
}

export default GenericLandScope

