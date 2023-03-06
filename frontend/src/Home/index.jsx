import React from 'react';
import './style.scss'
import Particle from './Particel';

export default function Home() {
  let first = [1,2,3,4,5,6,7,,8,9,10]
  let last = [1,2,3,4,5,6,7,8,9,[10,"https://th.bing.com/th/id/R.99f817cea823bd46c49c50caaee8bd05?rik=2EUzTwrVpkaA9Q&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f7%2fI%2fm%2fy%2fo%2fp%2fstart-button-hi.png&ehk=mYneU%2f43zoO4ouvuS4CgwXsdQfa%2f9F1dUOtntr1zFc0%3d&risl=&pid=ImgRaw&r=0"]]
  return (
    <div>
      {
        <Particle />
      }
        <div className='home'>
           <div className='home__firstChild'> 
              {
                first.map((el,i)=>(
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
                last.map((el,i)=>(
                  <div key={i} className={`home__lastChild__${el[0]}`}>
                      <img src={el[1]} alt="" />
                  </div>
                ))
              }
           </div>
        </div>
    </div>
  )
}
