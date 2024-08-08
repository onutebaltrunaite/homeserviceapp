import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import CategoryCard from './components/CategoryCard/CategoryCard.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import MyAccount from './components/MyAccount/MyAccount.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Booking from './components/Booking'; 
import SpecificBusiness from './home/SpecificBusiness.jsx';

function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <Router>
      <div>
        <NavBar />

        <Routes>

          <Route path="/" element={<Home handleSearch={handleSearch} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/business/:id" element={<SpecificBusiness />} />

          <Route path="/my-account" element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
            } />
          

          <Route path="/my-bookings" element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
            } />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
