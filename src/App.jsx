import NavBar from './components/NavBar';
import './App.css'
import Layout from './components/Layout';
import Grid from './components/Grid';

import { useState } from 'react';
function App() {
  const data = [
    {
      item:"Fancy Product",
      star:"false",
      price:"$40.00 - $80.00"
    },
    {
      item:"Special item",
      star:"true",
      price:"$20.00 $18.00"
    }, {
      item:"Sale item",
      star:"false",
      price:"$50.00 $25.00"
    },
    {
      item:"Popular item",
      star:"true",
      price:"$40.00"
    },
    {
      item:"Sale item",
      star:"false",
      price:"$40.00 - $80.00"
    },
    {
      item:"Fancy Product",
      star:"false",
      price:"$120.00 - $280.00"
    },
    {
      item:"Special item",
      star:"true",
      price:"$20.00 $18.00"
    },
    {
      item:"Popular item",
      star:"true",
      price:"$40.00"
    },
  ]
  
  
  
  
  const [inCart, SetinCart] = useState(0);
  const [product,Setproduct]= useState(data);
  
  return (
    <div className='app'>
      <NavBar
      inCart = {inCart}
      SetinCart = {SetinCart}
      />
      <Layout/>
      <div className='space' ></div>
      <Grid
       inCart = {inCart}
       SetinCart = {SetinCart}
       product = {product}
       Setproduct={Setproduct}
       />
    </div>

  )
}

export default App



