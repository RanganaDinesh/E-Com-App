import React, { useEffect ,useState} from 'react'
import './Product.css'

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
          

const GenericProducts = () => {
  
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
    
    <nav className="category-filters">
        <ToggleButtonGroup
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
        </ToggleButtonGroup>   </nav>
      <div className='box-container'>
      {products.slice(0, visible).map((product, index) => {
          return (
          <div className='product-box' key={index} >
            <div className='blur-box' >
                          <span className='hot-box'>Hot</span>
                          <div className='cart-like'>
                            <i class="bi bi-cart4" className='like'><i class="bi bi-heart-fill" ></i></i>    &nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="bi bi-heart-fill"className='like' > <i class="bi bi-bag-check-fill" ></i>   </i>              
              </div>
              <img src={product.image} className='img-product' alt="" />
              
             
            </div>
            <div>
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
                          <span className='price-red'> {product.newPrice}<span className='price-black'>{ product.oldPrice}</span></span>
          
            </div>
         
        
          </div>  )
                    })
        }
        

        {visible >= products.length ? (
          " "
        ) : (
          
          <span onClick={showMoreArticles} className='load-more'>Load more</span> )}
        </div>
      </>
  )
}

export default GenericProducts

