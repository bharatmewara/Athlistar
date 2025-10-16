import { Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import Home from "../page/Home/Home"
import About from "../page/AboutAthlistar/AboutAthlistar";
import ContactUs from "../page/ContactUs/ContactUs";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import ShoeMatchingTool from "../page/ShoeMatchingTool/ShoeMatchingTool";

const AppRoutes = () => {
  return <>
    <NavBar/>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutAthlistar" element={<About />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ShoeMatchingTool" element={<ShoeMatchingTool />} />
    </Routes>
    <Footer/>
  </>;
};

export default AppRoutes;