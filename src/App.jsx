import React from 'react'
import NavBar from './compnents/NavBar/NavBar'
import "./App.css";
import Banner from './compnents/Banner/Banner';
import Rowpost from './compnents/Rowpost/Rowpost';
import ColumnPost from './ColumnPost/ColumnPost';

function App() {

  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <ColumnPost/>
    </div>
    
  )
}

export default App
