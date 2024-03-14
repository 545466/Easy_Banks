import React from 'react'
import image from './Assets/images/image-mockups.png'
import './Easy_bank.css'
function Easy_bank_banner() {
  return (
    <>
      <div className="main">
        <div className="gen">
            <h1>Next generation <br />digital backing</h1>
            <p className='online'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <p className='invite'>Request invite</p>
        </div>
        <img className='phone' src={image} alt=""/>
      </div>
      
    </>
  )
}

export default Easy_bank_banner
