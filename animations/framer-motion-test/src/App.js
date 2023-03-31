import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FirstPage from './components/FirstPage/FirstPage'
import Tests from './components/testsPage/Tests';

function App() {

  return (
    <div className="container">
      <Navbar />
      <FirstPage />
      <Tests />
    </div>
    
  );
}

export default App;


