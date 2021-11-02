import './Home.css'

import tree from '../../Images/Tree&Grass.png'
import city from '../../Images/City&Grass.png'
import moon from '../../Images/Moon2.png'
import daveleach from '../../Images/daveleach.png'
import softwareengineer from '../../Images/softwareengineer.png'

const Home = () => {

  return (
    <div className="home-container">
      <img className="name bounce-in-top" src={ daveleach }/>
      <img className="occupation text-focus-in" src={ softwareengineer }/>
      <img src={ tree } className='image1' alt='tree'/>
      <img src={ city } className='image2' alt='city'/>
      <img src={ moon } className='image3' alt='moon'/>
    </div>
  )
}

export default Home