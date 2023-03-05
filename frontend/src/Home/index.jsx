import React from 'react';
import './style.scss'
import Particle from './particle';

export default function Home() {
  return (
    <div>
      {/* {
      <Particle />
       } */}
        <div className='home'>
           <div className='home__firstChild'> 
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
           </div>
           <div className='home__midChild'>
            <div className='home__midChild__left'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='home__midChild__mid'>

            </div>
            <div className='home__midChild__left'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
           </div>
           <div className='home__firstChild'> 
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
           </div>
        </div>
    </div>
  )
}
