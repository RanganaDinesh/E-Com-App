import React, { useEffect, useState } from 'react'
import Nav from '../HeaderComponents/Nav'
import ContentProdect from '../HeaderComponents/ContentProdect'
import { useNavigate } from 'react-router-dom'
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


const Store = () => {
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
 

  // console.log("Loaded products", visible);
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

 

  useEffect(() => {
    setFullProducts(data);
  }, [data]);

 
 
 
 
 


  return (

    <>
      <Nav />
      
               
      <div style={{display:'flex'}} >
      <div>

                <div className='filter-container' onChange={handleChange} value={alignment}>

            <h5>Filter By Category</h5>
            
            <div id="category-box2">
    <nav className="category-filters" id='category-filters'>
        <ToggleButtonGroup
         id="category-box1"
       
          value={alignment}
          exclusive
          onChange={handleChange}
         
          style={{marginLeft:'650px'}}
        >
          <ToggleButton value="all" id="category-box2">  <div className='filter-div'>

          <span className='span1' value="all">ALL</span>
          <span className='span2'>14</span>
          </div></ToggleButton>
         
          <ToggleButton value="iphone" id="category-box2"> <div className='filter-div'   onChange={handleChange} value={alignment}>

          <span className='span1' value='iphone'>Phones</span>
          <span className='span2'>2</span>
          </div></ToggleButton>

          <ToggleButton value="watch"id="category-box2">  <div className='filter-div'>

          <span className='span1'>Watches</span>
          <span className='span2'>2</span>
          </div></ToggleButton>
          <ToggleButton value="accessories"id="category-box2"> <div className='filter-div'>

          <span className='span1'>Accesories</span>
          <span className='span2'>1</span>
          </div></ToggleButton>
          <ToggleButton value="mac"id="category-box2"> <div className='filter-div'>

          <span className='span1'>Computer</span>
          <span className='span2'>5</span>
          </div></ToggleButton>
          </ToggleButtonGroup>   </nav></div>
              
               
               
              
               
                <div >
                <input type="range" className='range-filter'/>
                </div>
                <div  >
                <h5>Filter By Color</h5>
                <div className="color-filter" >

                <label className="radio-container">
                <input type="radio" name="Radio-Inline" value="RoseGold"/>
                <span className="checkmark1 checkmark"></span>
                </label>
                <label className="radio-container">
                <input type="radio" name="Radio-Inline" value="Silver"/>
                <span className="checkmark2 checkmark"></span>
                </label>
                <label className="radio-container">
                <input type="radio" name="Radio-Inline" value="Black"/>
                <span className="checkmark3 checkmark"></span>
                </label><label className="radio-container">
                <input type="radio" name="Radio-Inline" value="Blue" />
                <span className="checkmark4 checkmark"></span>
                </label>
                <label className="radio-container">
                <input type="radio" name="Radio-Inline" value="White"/>
                <span className="checkmark5 checkmark"></span></label>
                <label className="radio-container">
                <input type="radio" name="Radio-Inline" value="Green" />
                <span className="checkmark6 checkmark"></span></label>
                </div>
                <button className='reset-btn' value='all'> Reset Filter</button>
                </div>
                </div>
      </div>
      


    <div id='banner-iphone'> <ContentProdect />
        <div className='cards-container'>
          
         {products.map((product, index ,item) => {
          return (
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
          )
                    })
        }
        

    

          </div>
          </div>
        </div>
      </>

    
    
  )
}

export default Store
