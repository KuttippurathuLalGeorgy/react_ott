import React from 'react'
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
            <button className='button'>Play </button>
            <button className='button'>My list </button>
        </div>
        <p className='description'> Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</p>
      </div>
      <div className="fade_bottom">

      </div>
    </div>
  )
}

export default Banner
