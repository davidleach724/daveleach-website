import Particles from 'react-tsparticles';
import tsParticleConfig from '../config/tsParticleConfig';
import { useEffect, useState } from 'react';
import city from '../../Images/smallcity.png';
import moon from '../../Images/smallmoon.png';
import tree from '../../Images/smalltree.png';
import './Home.css';

const Home = () => {
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0);
  const opacity = Math.min(100 / currentScrollHeight, 1);

  useEffect(() => {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 25) * 25;
      if (currentScrollHeight !== newScrollHeight) {
        setCurrentScrollHeight(newScrollHeight);
      }
    };
  });

  return (
    <div style={{ opacity }} className="home-container">
      <Particles id="tsparticles" options={tsParticleConfig} />
      <div className="name-container">
        <h1 className="name bounce-in-top">DAVE LEACH</h1>
        <h2 className="occupation text-focus-in">Software Developer</h2>
      </div>
      <img src={moon} className="moon" alt="moon sketch" />
      <img src={city} className="city" alt="city sketch" />
      <div className="background-bottom">
        <img src={tree} className="tree" alt="tree sketch" />
      </div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
    </div>
  );
};

export default Home;
