/* eslint-disable no-unused-vars */
import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='loginForm'>
        <h2>Create an Account</h2>
        <p>connect with your friends today.</p>
        <div>
            <input type="text" placeholder='Enter your Username'/>
            <input type="email" placeholder='Enter your Email'/>
            <input type="text" placeholder='Enter your Phone number'/>
            <input type="text" placeholder='Enter your Password'/>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUp