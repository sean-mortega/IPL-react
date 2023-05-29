import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios";
import Banner from './components/Banner';
import Nav from './components/Nav';
import HowToPlay from './components/HowToPlay';
import PlayNow from './components/PlayNow';
import PointsTable from "./components/PoinstTable";
import Prizes from './components/Prizes';
import Leaderboards from './components/Leaderboards';


import './App.css';





function App() {

    
  const [ language, setLanguage]  = useState(0);



  const getLanguage = () => {
    
    let rand = Math.floor(1000000 + Math.random() * 900000);
    document.documentElement.setAttribute("lang", 'en');

    axios.get('https://res.cloudinary.com/blackbox/raw/upload/v' + rand + '/000%20IPL%20Front-end/languages/en.json')
    .then( res=> {
      setLanguage(res.data);
    });
  }

  useEffect(() => {
    getLanguage()
  }, []);

  return (
    <>

      <Banner/>
      <Nav/>

      <Routes>

        <Route path="/how-to-play" element={<HowToPlay lang={language} />} />
        <Route path="/play-now" element={<PlayNow />} />
        <Route path="/leaderboards" element={<Leaderboards/>} />
        <Route path="/points-table" element={<PointsTable />} />
        <Route path="/prizes" element={<Prizes />} />
  
      </Routes>

    </>
    
  );
}

export default App;
