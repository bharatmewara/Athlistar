import './Home.css'
import NavBar from '../../components/Navbar/NavBar'
import Hero from '../../components/Home/HeroSection/Hero'
import WhyUseAthlistar from '../../components/Home/WhyUseAthlistar/WhyUseAthlistar'
import ShoeFinderAndCoaching from '../../components/Home/ShoeFinderAndCoaching/ShoeFinderAndCoaching';
import AthleteSponsorship from '../../components/Home/AtheliteSponsorship/AtheliteSponsorship';
import ShopSection from '../../components/Home/ShopSection/ShopSection';
import CommunityAccess from '../../components/Home/CommunityAccess/CommunityAccess';
import HearFromAtheletes from '../../components/Home/HearFromAtheletes/HearFromAtheletes';
import Footer from '../../components/Footer/Footer';

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
      <Footer/>
    </>
  )
}

export default Home;
