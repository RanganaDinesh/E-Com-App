import React, { useEffect, createContext, useState } from "react";


export const CurrencyContext = createContext();
export const LanguageContext = createContext();

export const CartContext = createContext();
export const CartCountContext = createContext();

const AllFilter = (props) => {


  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let c = JSON.parse(localStorage.getItem("Cart"));
    if (c) {
      setCart(c);
      setCartCount(c.length);
    }
  }, []);

  

  return (
      <div>
           {/* <AppBar languages={languages} currencies={currencies} /> */}
     
          <CartContext.Provider value={[cart, setCart]}>
            <CartCountContext.Provider value={[cartCount, setCartCount]}>
             
                          { props.children}
            </CartCountContext.Provider>
          </CartContext.Provider>
    
    </div>
  );
};

export default AllFilter;
