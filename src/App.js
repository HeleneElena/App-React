import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';


const App = () => {
  return (
    <div className="appWrapper" >
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;