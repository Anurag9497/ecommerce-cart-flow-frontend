import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';


function App() {
  const[data, setData] = useState([]);
  
  useEffect(() => {
      fetch("http://ecommerce-cart-flow-backend.herokuapp.com/products")
        .then(res => {
          if(res.status===200)
            return res.json();
          else
            throw Error('Not Found');
        })
        .then(data => setData(data))
        .catch(err => console.log(err));
        console.log(data);
  },[]);


  return (
    <div className="App">
      <Navbar />
      <Product data={data} />
    </div>
  );
}




export default App;
