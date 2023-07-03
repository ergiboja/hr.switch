
import { useEffect, useState } from "react";
import {useNavigate, Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import SignInSide from './pages/SignInSide';
import Dashboard from './pages/Dashboard';



function App() {
  const navigate = useNavigate();

  // Function to check if the user is authenticated (token exists)
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  };

  // Component for rendering the Dashboard if authenticated or redirecting to login if not
  const RenderDashboardOrRedirect = () => {
    if (isAuthenticated()) {
      return <Dashboard />;
    } else {
      navigate('/login'); // Redirect to login if not authenticated
      return null; // Render nothing in this case (it will be replaced by the redirect)
    }
  };


  return (
    <Routes>
    <Route path="/" element={ <SignInSide/>} />
    {/* <Route
      path="/dashboard"
      element={isAuthenticated() ? <Dashboard /> : navigate('/login')}
    /> */}
 <Route path="/dashboard" element={<RenderDashboardOrRedirect />} />
 {/* <Route path="/dashboard" element={<Dashboard/>} /> */}

  

  </Routes>

  );
}

export default App;
