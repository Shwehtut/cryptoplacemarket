/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch(event.target.value){
      case "usd" : {
        setCurrency({name : "usd" , symbol : "$"});
        break;
      
      }
      case "eur" : {
        setCurrency({name : "eur" , symbol : "€"});
        break;
      }
      case "inr" : {
        setCurrency({name : "inr" , symbol : "₹"});
        break;
      }
      case "mmk" : {
        setCurrency({name : "mmk" , symbol : "Ks"});
        break;
      }
      // default : 0;
      default : {
        setCurrency({name : "usd" , symbol : "$"});
        break;
      }
    }

  }

  return (
    <div className='navbar'>
        <Link to={'/'}>
        <img src={logo} alt="" className='logo'/>
        </Link>
        <ul>
            <Link to={'/'}>
              <li>Home</li>
            </Link>
            <Link to={'/features'}>
              <li>Features</li>
            </Link>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="mmk">MMK</option>
            </select>
            <Link to={'/login'}><button>Sign Up <img src={arrow_icon} alt="" /></button></Link>
        </div>
    </div>
  )
}

export default Navbar