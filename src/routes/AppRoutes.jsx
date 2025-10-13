import { Routes, Route } from "react-router-dom";
import Home from "../page/Home/Home";
import About from "../page/AboutAthelistar/AboutAthelistar";
// import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/AboutAthelistar" element={<About />} />
      {/*<Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;