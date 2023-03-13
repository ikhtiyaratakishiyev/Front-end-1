import React from 'react'
import search from "../asserts/icons/search.svg"
import arrowdown from "../asserts/icons/arrowdown.svg"
// import "../style/index.css"

export default function DailyDesignFirst() {
  return (
  
    <>
    <div className='wrapper'>

      <div className="component-search">

     <form action="" >
       <div className="search-icon">
        <img src={search} alt="search" />
        </div>
        <input type="text" placeholder='Start typing to search' /> 
     </form>
     <h6>Popular Searches</h6>
     <ul>
        <li>
            <a href="#">Air Transport</a>
        </li>
        <li>
            <a href="#">Aviation</a>
        </li>
        <li className='active' >
            <a  href="#">Mekaniske Verksted</a>
        </li>
        <li>
            <a href="#">Port Authority</a>
        </li>
        <li>
            <a href="#">Sporvei</a>
        </li>
        <li>
            <a href="#">Bergens Kreditbank</a>
        </li>

     </ul>
     </div>
     
     <div className="component--filter--search">
       <form action="">
        <div className="input">
        <div className="search-icon">
        <img src={search} alt="search" />
        </div>
            <input type="text" placeholder='Start typing to search'/>
        </div>
        <ul>
            <li>
                <label>
                    <input type="radio" name="type" id="" value='Projects' />
                    <span className='text'>Projects</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="type" id="" value='Images' />
                    <span className='text'>Images</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="type" id="" value='People' />
                    <span className='text'>People</span>
                </label>
            </li>
        </ul>
       </form>
     </div>
      
     </div>

     
     <div className='component-container'>
       <div className="component--filter">
        <form action="">
            <ul>
                <li>
                   <div className="key">Country</div>
                   <div className="value">
                    <label className='selectbox'>
                    <img  src={arrowdown} alt="" />
                    <select name="" id="">
                        <option value="">Norway</option>
                        <option value="">Turkey</option>
                    </select>
                    </label>
                   
                   </div>
                </li>
                <li>
                    <div className="key">City</div>
                    <div className="value">
                        <input  type="text" value='Bergen' />
                    </div>
                </li>
                <li className="filter-button">
                    <a href="#">
                       Cancel 
                    </a>
                    <button type='submit'>Apply Filters</button>
                </li>
            </ul>
        </form>
     </div>
       </div>
     </>

   

  )
}


