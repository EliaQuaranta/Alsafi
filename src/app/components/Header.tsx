import React, { Component } from 'react';


function Header() {
  return(

    <div className="hero pt-20 bg-[#4366C9] ">
    <div className="hero-content flex-col lg:flex-row">
      <div className='text-center'>
        <h1 className="text-5xl font-bold text-center font-link ">Alsafi </h1>
        <h5 className="text-5xl font-bold text-center font-link " >srls</h5>
        
  


        <h3 className="text-3xl font-bold text-center font-link pt-10" >
          Il team
        </h3>

       


<div className="carousel carousel-center max-w-md p-2 space-x-4 bg-transparent rounded-box h-96">
  <div className="carousel-item">
    <img src="\team 1.jpg" className="rounded-box " />
  </div> 
  <div className="carousel-item">
    <img src="\team 2.jpg" className="rounded-box  " />
  </div> 
  <div className="carousel-item">
    <img src="\team 3.jpg" className="rounded-box" />
  </div> 
  
</div>
<br />



<button className="text-5xl font-bold text-center font-link h-20 pb-2"   >
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-6">
      
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
       
        </button>




        <p className="py-6 pt-3 mt-72 font-link text-xl bg-[#2a4796] rounded-3xl ">Alsafi srls è un'agenzia di marketing e comunicazione altamente specializzata
nell'optimizzazione SEO e nella gestione di campagne pubblicitarie avanzate, finalizzate alla
massimizzazione delle conversioni, sia che si tratti di lead, vendite o qualsiasi altro
touchpoint significativo. La nostra missione è quella di collaborare strettamente con i nostri
clienti per identificare e superare gli ostacoli che limitano la crescita aziendale, garantendo al
contempo una comprensione approfondita delle esigenze di business e degli obiettivi di
mercato</p>
        
      </div>
    </div>
  </div>

)
}
export default Header;