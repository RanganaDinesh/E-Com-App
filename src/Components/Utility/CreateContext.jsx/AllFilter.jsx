import React, { useEffect, createContext, useState } from "react";
// import AppBar from "../../HeaderComponents/Nav";

// import "./LandingPage.css";

export const CurrencyContext = createContext();
export const LanguageContext = createContext();

export const CartContext = createContext();
export const CartCountContext = createContext();

const AllFilter = (props) => {
  const languages = ["IN", "EN"];
  const currencies = ["₹", "$"];

  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("₹");

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let c = JSON.parse(localStorage.getItem("Cart"));
    if (c) {
      setCart(c);
      setCartCount(c.length);
    }
  }, []);

  useEffect(() => {
    let c = localStorage.getItem("Currency");
    if (c) {
      setCurrency(JSON.parse(c));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Currency", JSON.stringify(currency));
  }, [currency]);

  return (
      <div>
           {/* <AppBar languages={languages} currencies={currencies} /> */}
      <LanguageContext.Provider value={[language, setLanguage]}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <CartContext.Provider value={[cart, setCart]}>
            <CartCountContext.Provider value={[cartCount, setCartCount]}>
             
                          { props.children}
            </CartCountContext.Provider>
          </CartContext.Provider>
        </CurrencyContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default AllFilter;
