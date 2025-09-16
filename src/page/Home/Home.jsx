import './Home.css'
import NavBar from '../../components/Navbar/NavBar'
import Hero from '../../components/HeroSection/Hero'
import WhyUseAthlistar from '../../components/WhyUseAthlistar/WhyUseAthlistar'
import ShoeFinderAndCoaching from '../../components/ShoeFinderAndCoaching/ShoeFinderAndCoaching';
import AthleteSponsorship from '../../components/AtheliteSponsorship/AtheliteSponsorship';
import ShopSection from '../../components/ShopSection/ShopSection';
import CommunityAccess from '../../components/CommunityAccess/CommunityAccess';
import HearFromAtheletes from '../../components/HearFromAtheletes/HearFromAtheletes';

function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <WhyUseAthlistar/>
      <ShoeFinderAndCoaching/>
      <AthleteSponsorship/>
      <ShopSection/>
      <br/>
      <br/>
      <CommunityAccess/>
      <HearFromAtheletes/>
    </>
  )
}

export default Home;
