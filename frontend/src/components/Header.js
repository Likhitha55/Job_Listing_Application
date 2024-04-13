import React from 'react'
import logo from '../Logo.png';
import './Admin.css'
import pic from '../profile.jpg';

function Header() {
  return (
    <div className='header'>
        <div className='menu-icon'>
            
        </div>
        <div className='header-left'>
           
            <a href='#'>Homepage</a>
        </div>
        <div className='header-right ms-auto me-3'>
            <a className='logout'>Logout</a>
        </div>
        
      
    </div>
  )
}

export default Header

