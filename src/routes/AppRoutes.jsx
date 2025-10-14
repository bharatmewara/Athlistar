import { Routes, Route } from "react-router-dom";
import Home from "../page/Home/Home"
import About from "../page/AboutAthlistar/AboutAthlistar";
import ContactUs from "../page/ContactUs/ContactUs";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const AppRoutes = () => {
  return <>
    <NavBar/>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/AboutAthlistar" element={<About />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
    <Footer/>
  </>;
};

export default AppRoutes;