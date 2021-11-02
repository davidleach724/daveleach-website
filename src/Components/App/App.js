import React from 'react'
import Home from '../Home/Home'
import './App.css'

// import Particles from 'react-tsparticles';
// import tsParticleConfig from '../config/tsParticleConfig';
import Skills from '../Skills/Skills';
import Bio from '../Bio/Bio';

const App = () => {

  return (
    <main>
      {/* <Particles
        id="tsparticles"
        options={tsParticleConfig}
      /> */}
      <Home />
      <Bio />
      <Skills />
    </main>
  )
}

export default App