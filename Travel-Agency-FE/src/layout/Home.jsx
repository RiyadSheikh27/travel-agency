import Heros from '../pages/Heros'
import Neog from '../pages/Neog'
import AmaderSomporke from '../pages/AmaderSomporke'
import Contact from '../pages/contact'
import RLSection from '../pages/RLSection'

const Home = () => {
  return (
   <>
   <div>
    <section id='hero' className='scroll-mt-20'><Heros/></section>
    <section id='neog' className='scroll-mt-10'><Neog/></section>
    <section id='RLSection' className='scroll-mt-10'><RLSection/></section>
    <section id='amadersomporke'><AmaderSomporke /></section>
    <section id='contact'><Contact /></section>
    <section></section>
    <section></section>
   </div>
   </>
  )
}

export default Home