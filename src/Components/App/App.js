import React from 'react'
import Home from '../Home/Home'
import Skills from '../Skills/Skills';
import Bio from '../Bio/Bio';
import './App.css'
import Projects from '../Projects/Projects';

const App = () => {

  return (
    <main>
      <Home />
      <Bio />
      <Skills />
      <Projects />
    </main>
  )
}

export default App