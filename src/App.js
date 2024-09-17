import React from 'react';
import './input.css';
import {Brand,CTA,Navbar} from './components';
import {Footer,Blog,Possibility,Header,WhatGPT4,Features} from './containers'
const App = () => {
  return (
    <div className='bg-custom-radial p-0 m-0 scroll-smooth bg-cover bg-center min-h-screen'>
        <div className="">
          <div className="">
            <Navbar />
            <Header />

          </div>
          <Brand  />
          <WhatGPT4 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />

        </div>
    </div>
  )
}

export default App;