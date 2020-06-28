import React, {createRef, useEffect} from 'react';
import {Carousel} from 'antd'
import Home from '../home/homeComponent'
import About from '../about /aboutComponent'
import Experience from '../experience/experienceComponent'
import Contact from '../contact/contactComponent'

import './App.scss';

function App() {
  const carousel = createRef()
  useEffect(()=>{
    document.addEventListener('keydown', (e)=>{
      if(e.keyCode === 38){
        carousel.current.prev()
      }else if(e.keyCode === 40){
        carousel.current.next()
      }
    })
  })
  return (
    <Carousel className="main-carousel" draggable dotPosition={'right'} vertical verticalSwiping ref={carousel}>
      <div>
      <Home/>
    </div>
    <div>
      <About/>
    </div>
    <div>
      <Experience/>
    </div>
    <div>
      <Contact/>
    </div>
    </Carousel>
  );
}

export default App;
