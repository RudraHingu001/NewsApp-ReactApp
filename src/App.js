import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const [mode,setmode] = useState('light');
  const [progress,setProgresss] = useState(0);
 
const setProgress = (progress) =>{
    setProgresss(progress);
}
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <LoadingBar
            height={5}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress = {setProgresss} key="general" mode={mode} category="general" country="in" pageSize={9}/>}/>
            <Route exact path='/Business' element={<News setProgress = {setProgress} key="business" mode={mode} category="business" country="in" pageSize={9}/>}/>
            <Route exact path='/Entertainment' element={<News setProgress = {setProgress} key="entertainment" mode={mode} category="entertainment" country="in" pageSize={9}/>}/>
            <Route exact path='/Health' element={<News setProgress = {setProgress} key="health" mode={mode} category="health" country="in" pageSize={9}/>}/>
            <Route exact path='/Science' element={<News setProgress = {setProgress} key="science" mode={mode} category="science" country="in" pageSize={9}/>}/>
            <Route exact path='/Sports' element={<News setProgress = {setProgress} key="sports" mode={mode} category="sports" country="in" pageSize={9}/>}/>
            <Route exact path='/Technology' element={<News setProgress = {setProgress} key="technology" mode={mode} category="technology" country="in" pageSize={9}/>}/>
          </Routes>
        </Router>

    </>
  )
}
