import React, { useEffect ,useState} from 'react'
import './Product.css'

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {  useNavigate } from 'react-router-dom';


          

const GenericProducts = () => {
  
  const Navigate = useNavigate()
  const handlenavigate = (id , product) => {
    Navigate(`/Details/${id}`,{
      state: {Details:product}

    })
  
  }
  
  const data = require("../../ApiData/BestSeller.json");
  const [fullProducts, setFullProducts] = useState(data);
  const [products, setProducts] = useState(data);
  const [alignment, setAlignment] = useState("all");
  const [visible, setVisible] = useState(4);

  console.log("Loaded products", visible);
  console.log("Total Number of products", data.length);

 
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(newAlignment);

    if (newAlignment === "all") {
      setProducts(fullProducts);
      return;
    }

    const filteredProducts = fullProducts.filter(
      (product) => product.category.toLowerCase() === newAlignment
    );
    setProducts(filteredProducts);
    console.log(filteredProducts);
  };

  const showMoreArticles = () => {
    setVisible((previousValue) => previousValue + 4);
  };

  useEffect(() => {
    setFullProducts(data);
  }, [data]);

 
 
 
 
  return (
    <>
    <div className="category-box">
    <nav className="category-filters" style={{marginLeft:"-250px"}}>
        <ToggleButtonGroup
          className='category-box'
          id="toggle-group"
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Category"
          style={{marginLeft:'650px'}}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="mac">Mac</ToggleButton>
          <ToggleButton value="iphone">iPhone</ToggleButton>
          <ToggleButton value="ipad">iPad</ToggleButton>
          <ToggleButton value="watch">Watch</ToggleButton>
          <ToggleButton value="accessories">Accessories</ToggleButton>
          <ToggleButton value="others">Others</ToggleButton>
        </ToggleButtonGroup>   </nav></div>
      <div className='box-container'>
      {products.slice(0, visible).map((product, index ,item) => {
          return (
            <div className='product-box main-card ' key={index} >
              <div className="circle">
            <div className='blur-box ' >
                          <span className='hot-box'>Hot</span>
                          <div className='cart-like'>
                    <div className="like" >
                      
                      <img src={product.image} className='img-product1' alt="" />
                      <button className='cartbag'onClick={()=>handlenavigate(index ,product,product.id )} ><i class="bi bi-cart4" id='bag' ></i>Add Cart</button>
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
          )
                    })
        }
        <br />

        {visible >= products.length ? (
          " "
        ) : (
           <div>
          <span onClick={showMoreArticles} className='load-more'>Load more</span></div>  )}
        </div>
      </>
  )
}

export default GenericProducts

