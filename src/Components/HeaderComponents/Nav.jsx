import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
//



const Nav = () => {
  return (
      <>
          <div className="tool-bar">
              <div>
              <select name="" id="price-nav">
                  <option value="" >EN</option>
                  <option value="">IN</option>
                  </select>
                  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <select name="" id="price-nav">
                  <option value="">$</option>
                  <option value="">&#8377;</option>
              </select>
            </div>
              <span className='profile-nav'>&nbsp; <i class="bi bi-person-circle" style={{ fontSize: '25px' }}> &nbsp;&nbsp;</i>&nbsp;<span style={{ fontSize: '17px' }}>My Profile&nbsp;</span><i class="bi bi-bag-check-fill"  style={{ fontSize: '25px' }}></i></span>
              

              {/* // */}
              
             {/*  */}
             
          </div>
          

          <div className='headings-nav'>
              <h1 style={{color:'#FF4252'}}>iSHOP</h1>
          <Link to='/HOME' style={{textDecoration:'none' ,color:'#262626',marginRight:'70px'}}> <span className='nav-hov'>HOME</span></Link>
          <Link to='/STORE' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov'>STORE</span></Link>
          <Link to='/IPHONE' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov'>IPHONE</span></Link>
          <Link to='/IPAD' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov'>IPAD</span></Link>
          <Link to='/MACKBOOK' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov'>MACKBOOK</span></Link>
          <Link to='/ACCESORIES' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov'>ACCESORIES</span></Link>
              
          </div>
      
      </>
  )
}

export default Nav
