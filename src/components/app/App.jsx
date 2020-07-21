import React from 'react';
import {Layout} from 'antd'

import Home from '../home/homeComponent'
import Skills from '../skills/skillsComponent'
import Experience from '../experience/experienceComponent'
import Contact from '../contact/contactComponent'
import Navbar from '../navbar/navbarComponent'

import './App.scss';
const {Header, Content, Footer} = Layout

function App() {
  return (
    <Layout>
      <Header className='app-header'>
        <Navbar/>
      </Header>
      <Content style={{marginTop: '64px'}} className="darkTheme">
        <Home id="home"/>
        <Skills id="skills"/>
        <Experience id="experience"/>
        <Contact id="contact"/>
      </Content>
      <Footer className="text-align-center darkTheme">
        © Copyright 2020 Sujeet Kc
      </Footer>
    </Layout>
  );
}

export default App;
