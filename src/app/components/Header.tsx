import React, { Component } from 'react';

function Header() {
  return(

    <div className="hero pt-20 bg-[#4366C9] ">
    <div className="hero-content flex-col lg:flex-row">
      <div className='text-center'>
        <h1 className="text-5xl font-bold text-center font-link ">Titolo</h1>
        <p className="py-6 pt-20 font-link text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur, maiores error earum quo minima doloribus atque explicabo, blanditiis rem quas corrupti, accusamus aliquam excepturi veniam nesciunt. Facere, dignissimos officia!</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>

)
}
export default Header;