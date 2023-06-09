import React, { useEffect, createContext, useState } from "react";
// import AppBar from "../../Utilities/TopBar/TopBar";
import Nav from '../../HeaderComponents/Nav'
// import Greeting from "./../../Utilities/Greeting/Greeting";
import Routers from "../../../Router";
// import About from "./../../Utilities/About/About";
// import Footer from "./../../Utilities/Footer/Footer";
import "./LoadingPage.css";

export const CurrencyContext = createContext();
export const LanguageContext = createContext();

export const CartContext = createContext();
export const CartCountContext = createContext();

const LandingPage = () => {
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
      <LanguageContext.Provider value={[language, setLanguage]}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <CartContext.Provider value={[cart, setCart]}>
            <CartCountContext.Provider value={[cartCount, setCartCount]}>
              <Nav languages={languages} currencies={currencies} />
            {/* /sliding image */}
              <Routers />
              <section className="app-footer">
{/* Aboutus */}
                {/* <Footer /> */}
              </section>
            </CartCountContext.Provider>
          </CartContext.Provider>
        </CurrencyContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default LandingPage;
