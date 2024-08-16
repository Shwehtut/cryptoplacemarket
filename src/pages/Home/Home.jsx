/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom'


const Home = () => {
  const {allCoin, currency} = useContext(CoinContext);
  const [ displayCoin , setDisplayCoin] = useState([]);
  const [input , setInput] = useState('');

  const InputHandler = (event) =>{
      setInput(event.target.value)
      if(event.target.value === ""){
        setDisplayCoin(allCoin);
      }
    }

  const searchHandler = async (event) =>{
    event.preventDefault();
    const coins = await allCoin.filter((item)=> {
      return item.name.toLowerCase().includes(input.toLowerCase());
    })
    setDisplayCoin(coins)
  }

  useEffect(() => {
    setDisplayCoin(allCoin)
  },[allCoin])

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>Welcome to the world largest cryptocurrency marketplace.
          Sign up to explore more about to cryptos.
        </p>
        <form onSubmit={searchHandler}>
          <input 
          type="text" 
          placeholder='Search crypto...'
          onChange={InputHandler}
          value={input}
          required
          list='coinlist'
           />

          <datalist id='coinlist'>
            {
              allCoin.map((item, index)=> (<option key={index} value={item.name}/>))
            }
          </datalist>

          <button type='submit'>Search</button>
        </form>
     </div>

      <div className='crypto-table'>
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(0,10).map((item, index)=> (
            <Link to={`/coin/${item.id}`} key={index}  className='table-layout'>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name +' - '+ item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_24h > 0 ? 'green' : 'red'}>
                {Math.floor(item.price_change_24h*100)/100}
              </p>
              <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home