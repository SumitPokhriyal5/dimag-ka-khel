import React from 'react';
import './style.scss'
import Particle from './particle';

export default function Home() {
  let ten = [1,2,3,4,5,6,7,,8,9,10]
  return (
    <div>
      {
      <Particle />
       }
        <div className='home'>
           <div className='home__firstChild'> 
              {
                ten.map((el,i)=>(
                  <div key={i} className={`home__firstChild__${el}`}>

                  </div>
                ))
              }
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
           <div className='home__lastChild'> 
           {
                ten.map((el,i)=>(
                  <div key={i} className={`home__lastChild__${el}`}>

                  </div>
                ))
              }
           </div>
        </div>
    </div>
  )
}
