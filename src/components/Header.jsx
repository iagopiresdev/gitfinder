import React, { useState } from 'react'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'
import '../styles/Header.css'



function Header({ theme }) {
  return (
    <div className='header'>
      <h1>gitfinder</h1>
      <div className='toggle' onClick={theme}>
        <h4>LIGHT</h4>
        <img src={sun} alt='sun' />
      </div>
    </div>
  )
}

export default Header