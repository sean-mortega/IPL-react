import { Router } from 'react-router-dom';
import { Component } from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import HowToPlay from './components/HowToPlay';
import Leaderboards from './components/Leaderboards';

import './App.css';

function App() {
  return (
    <>
      <Banner/>
      <Nav/>
    </>
    
  );
}

export default App;
