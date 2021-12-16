import React from 'react';
import s from './App.module.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';


const App = () => {
  return (
    <div className={s.appWrapper} >
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;