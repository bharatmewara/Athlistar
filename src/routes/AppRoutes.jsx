// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import Auth Context

// --- Layout Components ---
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// --- Public Pages ---
import Home from "../page/Home/Home";
import About from "../page/AboutAthlistar/AboutAthlistar";
import ContactUs from "../page/ContactUs/ContactUs";
import ShoeMatchingTool from "../page/ShoeMatchingTool/ShoeMatchingTool";
import Login from "../page/Login/Login";
import CommunityAccess from "../page/CommunityAccess/CommunityAccess";
import AthleteSponsorship from "../page/Sponsorship/AthleteSponsorship";
import Shop from "../page/Shop/Shop";
import ProductDetails from "../page/ProductDetails/ProductsDetails";

// --- Authenticated User Pages ---
import Profile from "../page/Profile/Profile";
import Onboarding from "../page/Onboarding/Onboarding";
import AdminDashboard from "../page/Admin/AdminDashboard"; // Uncomment when Admin page is created

// --- Protected Route Component ---
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div style={{padding: 50, textAlign: "center"}}>Loading...</div>; 
  }
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/AboutAthlistar" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ShoeMatchingTool" element={<ShoeMatchingTool />} />
        <Route path="/CommunityAccess" element={<CommunityAccess />} />
        <Route path="/Sponsorship" element={<AthleteSponsorship />} />
        <Route path="/login" element={<Login />} />
        
        {/* Shop Routes */}
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* ================= PROTECTED ROUTES ================= */}
        {/* These pages require the user to be logged in */}
        
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/onboarding" 
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          } 
        />

        {/* Placeholder for Admin Route - Uncomment when ready */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        /> 
       

        {/* Fallback */}
        <Route path="*" element={<div style={{padding: 50, textAlign: "center"}}>404 - Page Not Found</div>} />

      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;