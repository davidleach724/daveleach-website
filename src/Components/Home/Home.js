import './Home.css'

import tree from '../../Images/Tree&Grass.png'
import city from '../../Images/City&Grass.png'
import moon from '../../Images/Moon2.png'

const Home = () => {

  return (
    <div className="home-container">
      <img src={tree} className='image1'/>
      <img src={city} className='image2'/>
      <img src={moon} className='image3'/>
    </div>
  )
}

export default Home