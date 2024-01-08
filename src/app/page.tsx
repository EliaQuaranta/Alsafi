import Image from 'next/image';

import Navbar from './components/Navbar';
import Header from './components/Header';

export default function Home() {
  return (
      <div className='Home'>

       
            <Navbar/>
        <div className='Header'>
          
            <Header/>
        </div>

      </div>
  )
}


