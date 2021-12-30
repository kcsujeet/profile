import React, {useState, useEffect} from 'react'
import {Switch} from 'antd'
import{FaMoon, FaSun} from 'react-icons/fa'

import './navbarComponent.scss'

function Navbar(){
    const [activeLink, setActiveLink] = useState('home')
    const [homeElement, setHomeElement] = useState('')
    const [skillsElement, setSkillsElement] = useState('')
    const [experienceElement, setExperienceElement] = useState('')
    const [contactElement, setContactElement] = useState('')

    const handleClick = (event)=>{
        if(window.innerWidth <= 760){
            handleHamburgerClick()
            setTimeout((target) => {
                scrollTo('#'+target.name)
            }, 1000, event.target);
        }else{
            scrollTo('#'+event.target.name)
        }
        
    }

    const scrollTo = (selector, yOffset = -65)=>{
        const el = document.querySelector(selector);
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    useEffect(()=>{
        var saved_theme = localStorage.getItem('kcsujeet_theme')
        saved_theme === 'lightTheme' ? switchTheme(false) : switchTheme(true)
        setHomeElement(document.getElementById('home'))
        setSkillsElement(document.getElementById('skills'))
        setExperienceElement(document.getElementById('experience'))
        setContactElement(document.getElementById('contact'))
    },[])
    
    useEffect(()=>{
        window.addEventListener('scroll', handleSroll, false)
        return () => window.removeEventListener('scroll', handleSroll);
    })

    const handleSroll = ()=>{
        if(isScrolledIntoView(skillsElement)){
            setActiveLink('skills')
        }else if(isScrolledIntoView(experienceElement)){
            setActiveLink('experience')
        }else if(isScrolledIntoView(contactElement)){
            setActiveLink('contact')
        }else if(isScrolledIntoView(homeElement)){
            setActiveLink('home')
        }
    }

    const isScrolledIntoView = (el, percentVisible = 15)=>{
        if(el){

            let
            rect = el.getBoundingClientRect(),
            windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    
            return !(
                Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
                Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
                )
        }
    }

    const switchTheme= (checked)=>{
        if(!checked){
            document.getElementsByTagName('body')[0].classList.replace('darkTheme', 'lightTheme')
            localStorage.setItem('kcsujeet_theme', 'lightTheme')
            
        }else{
            document.getElementsByTagName('body')[0].classList.replace('lightTheme', 'darkTheme')
            localStorage.setItem('kcsujeet_theme', 'darkTheme')
        }
    }

    const handleSwitchTheme =(checked)=>{
        if(window.innerWidth <= 760){
            handleHamburgerClick() 
        } 
       switchTheme(checked)
    }

    const handleHamburgerClick = ()=>{
        var nav = document.querySelector('.navbar-nav')
        var hamburger = document.querySelector('.hamburger')
        nav.classList.toggle('open')
        hamburger.classList.toggle('open')
    }

    return(
        <nav className="navbar" id="navbar">
            <div className="hamburger" onClick={handleHamburgerClick}>
                <div className="hamburger-line"></div>
            </div>

            <ul className="navbar-nav">
                <li className={`nav-item`}>
                    <a name="home" onClick={handleClick} className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}>Home</a>
                </li>
                <li className={`nav-item`}>
                    <a name="skills" onClick={handleClick} className={`nav-link  ${activeLink === 'skills' ? 'active' : ''}`}>Skills</a>
                </li>
                <li className={`nav-item `}>
                    <a name="experience" onClick={handleClick} className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`}>Experience</a>
                </li>
                <li className={`nav-item `}>
                    <a name="contact" onClick={handleClick} className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}>Contact</a>
                </li>
                <li name="theme" className={"nav-item"}>
                    <Switch defaultChecked={localStorage.getItem('kcsujeet_theme') === 'darkTheme'} 
                            checkedChildren={<FaMoon/>}
                            unCheckedChildren={<FaSun/>}
                            onChange={(checked)=>{handleSwitchTheme(checked)}}>
                    </Switch>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar