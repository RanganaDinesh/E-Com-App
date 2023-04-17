import React from 'react'
import Nav from '../HeaderComponents/Nav'
import ContentProdect from '../HeaderComponents/ContentProdect'

const Store = () => {
  return (
      <div>
          <Nav/>
      <ContentProdect />
      <div className='filter-container'>
        <h5>Filter By Category</h5>
        <div className='filter-div'>
        
          <span className='span1'>ALL</span>
          <span className='span2'>14</span>
        </div>
        <div className='filter-div'>
        
          <span className='span1'>Phones</span>
          <span className='span2'>2</span>
        </div>
        <div className='filter-div'>
        
          <span className='span1'>Computer</span>
          <span className='span2'>5</span>
        </div>
        <div className='filter-div'>
        
          <span className='span1'>Watches</span>
          <span className='span2'>2</span>
        </div>
        <div className='filter-div'>
        
          <span className='span1'>Accesories</span>
          <span className='span2'>1</span>
        </div>
        <div >
        <input type="range" className='range-filter'/>
      </div>
        <div >
      <i class="bi bi-circle-fill"></i>
      </div>
      </div>
    
    </div>
  )
}

export default Store
