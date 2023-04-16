import React from 'react'
import Nav from '../src/Components/HeaderComponents/Nav'
import HOME from '../src/Components/pages/Home'
import STORE from '../src/Components/pages/Iphone'
import IPHONE from '../src/Components/pages/Iphone'
import IPAD from '../src/Components/pages/Ipad'
import MACKBOOK from '../src/Components/pages/MackBook'
import ACCESORIES from '../src/Components/pages/ACCESORIES'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const Router = () => {
  return (
      <>
        
          <BrowserRouter>
              <Routes>
                 <Route path='/' element={<Nav/>}/>
                
             
                 <Route path='/HOME' element={<HOME/>}/>
                 <Route path='/STORE' element={<STORE/>}/>
                 <Route path='/IPHONE' element={<IPHONE/>}/>
                 <Route path='/IPAD' element={<IPAD/>}/>
                 <Route path='/MACKBOOK' element={<MACKBOOK/>}/>
                 <Route path='/ACCESORIES' element={<ACCESORIES/>}/>
              </Routes>
          </BrowserRouter>
          
      </>
  )
}

export default Router
