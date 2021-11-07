import './Home.css'

import tree from '../../Images/Tree&Grass.png'
import city from '../../Images/City&Grass.png'
import moon from '../../Images/Moon2.png'

import Particles from 'react-tsparticles';
import tsParticleConfig from '../config/tsParticleConfig';
import { useEffect, useState } from 'react'

const Home = () => {
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0)

  useEffect(() => {
    window.onscroll =()=>{
      const newScrollHeight = Math.ceil(window.scrollY / 25) *25;
      if (currentScrollHeight !== newScrollHeight){
          setCurrentScrollHeight(newScrollHeight)
      }
    }
  })

  const opacity = Math.min(100 / currentScrollHeight  , 1)

  return (
    <div style={{opacity}} className="home-container">
       <Particles
        id="tsparticles"
        options={tsParticleConfig}
      />
      <div class="firefly"></div><div class="firefly"></div><div class="firefly"></div><div class="firefly"></div><div class="firefly"></div><div class="firefly"></div><div class="firefly"></div><div class="firefly"></div><div class="firefly"></div><div class="firefly"></div><div class="firefly"></div><div class="firefly"></div>
      <div className="name-container">
        <h1 className="name bounce-in-top">DAVE LEACH</h1>
        <h2 className="occupation text-focus-in">Software Engineer</h2>
      </div>
      <img src={ tree } className='image1' alt='tree'/>
      <img src={ city } className='image2' alt='city'/>
      <img src={ moon } className='image3' alt='moon'/>
    </div>
  )
}

export default Home