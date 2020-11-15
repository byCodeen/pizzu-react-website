import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './component/Hero';
import Product from './component/Product';
import { productData, productDataTwo } from './component/Product/data';
import Featured from './component/Featured';
import Footer from './component/Footer';


function App() {
  return (
    <Router>
      <Hero />
      <Product heading='Choose your favorite' data={productData}/>
      <Featured />
      <Product heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
