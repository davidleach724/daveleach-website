import './Home.css'

import tree from '../../Images/Tree&Grass.png'
import city from '../../Images/City&Grass.png'
import moon from '../../Images/Moon2.png'
import daveleach from '../../Images/daveleach.png'
import softwareengineer from '../../Images/softwareengineer.png'

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
      <img className="name bounce-in-top" src={ daveleach } alt="dave leach name"/>
      <img className="occupation text-focus-in" src={ softwareengineer } alt="occupation software engineer"/>
      <img src={ tree } className='image1' alt='tree'/>
      <img src={ city } className='image2' alt='city'/>
      <img src={ moon } className='image3' alt='moon'/>
    </div>
  )
}

export default Home