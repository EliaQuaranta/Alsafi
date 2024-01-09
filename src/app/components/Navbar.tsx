import React, { Component } from 'react';

function Navbar() {
  return(

<div className="navbar bg-[#4366C9] ">
  <div className="flex-1">
    <a className="btn btn-ghost rounded-full pl-0.5 pr-0.5 pt-0 pb-0"><img src="\favicon-alsafi.png" className='w-12' alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-link text-lg">
      <li><a>Lavora con noi</a></li>
      <li>
        <details>
          <summary>
            Menu
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  
</div>
  
)
}
export default Navbar;