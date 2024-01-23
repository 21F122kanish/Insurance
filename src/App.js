
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background/Background';
import Hero from './components/Hero/Hero';


function App() {

  let heroData = [
    {text1:"Happiness is",text2:"found within"},
    {text1:"The past cannot",text2:"be changed"},
    {text1:"Everyone's journey",text2:"is different"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);
  const current_theme = localStorage.getItem('current_theme'); 
  const [theme,setTheme] = useState(current_theme ? current_theme : 'light');
 
  useEffect(()=>{
   localStorage.setItem('current_theme',theme)
  },[theme])

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{
        return count === 2? 0 : count+1})
    },3000);
  },[])

  return (
    <div className={` ${theme}`}>
   <Navbar theme={theme} setTheme={setTheme}/>
   <Background playStatus={playStatus} heroCount={heroCount}/>
    <Hero
   setPlayStatus={setPlayStatus}
   heroData={heroData[heroCount]}
   heroCount={heroCount}
   setHeroCount={setHeroCount}
   playStatus={playStatus}
   /> 
    </div> 
  );
}

export default App;
