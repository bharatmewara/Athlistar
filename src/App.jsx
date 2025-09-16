import './App.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/HeroSection/Hero'
import WhyUseAthlistar from './components/WhyUseAthlistar/WhyUseAthlistar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoeFinderAndCoaching from './components/ShoeFinderAndCoaching/ShoeFinderAndCoaching';
import AthleteSponsorship from './components/AtheliteSponsorship/AtheliteSponsorship';
import ShopSection from './components/ShopSection/ShopSection';
import CommunityAccess from './components/CommunityAccess/CommunityAccess';
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes/>
    </>
  )
}

export default App
