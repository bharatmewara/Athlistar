import './App.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/HeroSection/Hero'
import WhyUseAthlistar from './components/WhyUseAthlistar/WhyUseAthlistar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoeFinderAndCoaching from './components/ShoeFinderAndCoaching/ShoeFinderAndCoaching';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <WhyUseAthlistar/>
      <ShoeFinderAndCoaching/>
    </>
  )
}

export default App
