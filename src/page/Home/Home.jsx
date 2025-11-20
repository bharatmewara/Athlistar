import './Home.css'
import Hero from '../../components/Home/HeroSection/Hero'
import WhyUseAthlistar from '../../components/Home/WhyUseAthlistar/WhyUseAthlistar'
import ShoeFinderAndCoaching from '../../components/Home/ShoeFinderAndCoaching/ShoeFinderAndCoaching';
import AthleteSponsorship from '../../components/Home/AtheliteSponsorship/AtheliteSponsorship';
import ShopSection from '../../components/Home/ShopSection/ShopSection';
import CommunityAccess from '../../components/Home/CommunityAccess/CommunityAccess';
import HearFromAtheletes from '../../components/Home/HearFromAtheletes/HearFromAtheletes';

function Home() {
  return (
    <>
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
