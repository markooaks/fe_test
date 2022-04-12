import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { ProductContext } from './store/context';
import './App.css'
import Header from './components/Header'
import Product from './components/Product'


const App = () => {
  const { setDatas, setCart } = useContext(ProductContext);

  useEffect(()=>{
    axios.get('/data.json')
    .then(res=>{
      setCart (res.data.cart.items)
      setDatas(res.data.article)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  
  return (
    <div className='App'>
      <Header/>
      <Product/>
    </div>
  )
}

export default App