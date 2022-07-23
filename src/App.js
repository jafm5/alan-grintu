import './App.css';
import React, {useState, useEffect} from 'react';
import { Cover } from './Components/Cover/Cover';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import  Slider  from './Components/Slider/Slider';
import Info from './Components/Info/Info'
import  Footer  from './Components/Footer/Footer';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

  },[scrollHeight])

  return (
    <div className="App">
    <Navbar isScrolling={scrollHeight}/>
      <Cover/>
      <About/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
