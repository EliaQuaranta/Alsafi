import Image from 'next/image';

import Navbar from './Navbar';


export default function Home() {
  return (
      <div className='Home'>

        <Navbar/>

        <div className='content'>
          <h1>components</h1>
        </div>

      </div>
  )
}


