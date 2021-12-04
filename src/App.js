import React from 'react'; 
import './App.css';
import Content from './Content';
import Header from './Header';
import NavBar from './Navbar';



const App = () => {
  return (
    <div className="app-wrapper" >
      <Header/>
      <NavBar />
      <Content />
    </div>
  )
}



export default App;