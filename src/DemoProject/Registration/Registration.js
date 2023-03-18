import React from 'react'
import './Registration.css'

function Registration() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='nav'>
        <label className='login' htmlFor="">Login </label>
        <label className='divid' htmlFor=""> | </label>
        <label className='register1' htmlFor=""> Register </label>
        <button className='cart'> <i class="fa fa-shopping-cart"> 0</i> Cart</button>
      </div>
      <div className='nav2'>
        <input className='text' type="text" placeholder='What are you looking for' />
        <button className='search'> <i class="fa fa-search"></i> Search</button>
        <button className='cancel'>Cancel</button>
      </div>
      <div className='nav3'>
        <label className='home' htmlFor="">Home</label>
        <label className='des' htmlFor="">-</label>
        <label className='create' htmlFor="">Create an Account</label>
      </div>
      <div className='nav4'>
        <label className='heading' htmlFor=""><b>Login or Create an Account</b></label>
      </div>
      <div className='nav5'>
        <label className='info' htmlFor=""><b>Pesonal information</b></label>
      </div>
      <div className='line'>
        <hr size="1" width="88.5%" color="#414141" />
      </div>
      <div className='nav6'>
        <p>Please enter the following information to create your account</p>
      </div>
      <div className='nav7'>
        <label className='fname' htmlFor="">First Name *</label>
        <label className='lname' htmlFor="">Last Name *</label>
      </div>
      <div className='nav8'>
        <input type="text" className='finput' />
        <input type="text" className='linput' />
      </div>
      <div className='nav9'>
        <label className='fname' htmlFor="">Email Address *</label>
      </div>
      <div className='nav10'>
        <input type="text" className='email' />
      </div>
      <div className='nav11'>
        <label className='Linfo' htmlFor=""><b>Login information</b></label>
      </div>
      <div className='line'>
        <hr size="1" width="88.5%" color="#414141" />
      </div>
      <div className='nav12'>
        <label className='Pass' htmlFor="">Password *</label>
        <label className='Confirm' htmlFor="">Confirm Password *</label>
      </div>
      <div className='nav13'>
        <input type="text" className='finput' />
        <input type="text" className='linput' />
      </div>
      <div className='nav14'>
        <button className='register'>Register</button>
      </div>
      <div className='nav15'>
        <img src="C:\Users\Admin\book-Store\src\DemoProject\Registration\book-store.png" alt=''/>
        <h3>&#169;2015 Book-Store.com. All Right Reserved</h3>
      </div>
    </div>
  )
}

export default Registration