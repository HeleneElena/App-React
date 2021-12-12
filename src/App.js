import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <div className="app-wrapper" >
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;