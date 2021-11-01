import React from 'react'
import Home from '../Home/Home'
import './App.css'

import Particles from 'react-tsparticles';
import tsParticleConfig from '../config/tsParticleConfig';

const App = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    <main>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={tsParticleConfig}
    />
      <Home />
    </main>
  )
}

export default App