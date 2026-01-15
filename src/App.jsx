import React from 'react'
import NavBar from './compnents/NavBar/NavBar'
import "./App.css";
import Banner from './compnents/Banner/Banner';
import Rowpost from './compnents/Rowpost/Rowpost';

function App() {

  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Rowpost/>
      <Rowpost/>
    </div>
    
  )
}

export default App
