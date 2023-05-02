import React from 'react'
import Nav from '../src/Components/HeaderComponents/Nav'
import HOME from '../src/Components/pages/Home'
import STORE from '../src/Components/pages/Store'
import IPHONE from '../src/Components/pages/Iphone'
import IPAD from '../src/Components/pages/Ipad'
import MACKBOOK from '../src/Components/pages/MackBook'
import ACCESORIES from '../src/Components/pages/ACCESORIES'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import GenericId from './Components/GenericComponents/Genericidpage/GenericId'
import Cart from './Components/pages/Cart'



const Router = () => {
  return (
      <>
        
          <BrowserRouter>
              <Routes>
                 <Route path='/Home' element={<Nav/>}/>
                
                 <Route path='/Details/:id' element={<GenericId/>}/>
                 <Route path='/' element={<HOME/>}/>
                 <Route path='/STORE' element={<STORE/>}/>                 

                 <Route path='/IPHONE' element={<IPHONE/>}/>
                 <Route path='/IPAD' element={<IPAD/>}/>
                 <Route path='/MACKBOOK' element={<MACKBOOK/>}/>
                 <Route path='/ACCESORIES' element={<ACCESORIES/>}/>
                 <Route path='/Cart' element={<Cart/>}/>
              </Routes>
          </BrowserRouter>
          
      </>
  )
}

export default Router
