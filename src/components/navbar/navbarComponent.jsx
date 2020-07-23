import React, {useState, useEffect} from 'react'
import {Button, Switch} from 'antd'

import './navbarComponent.scss'

function Navbar(){
    const [activeLink, setActiveLink] = useState('about')
    const [blockPosition, setBlockPosition] = useState('center')
    const [homeElement, setHomeElement] = useState('')
    const [skillsElement, setSkillsElement] = useState('')
    const [experienceElement, setExperienceElement] = useState('')
    const [contactElement, setContactElement] = useState('')

    const handleClick = (event)=>{
        if(window.innerWidth <= 760){
            handleHamburgerClick()
            setTimeout((target) => {
                const anchor = document.getElementById(`${target.name}`)
                anchor.scrollIntoView({ behavior: 'smooth', block: blockPosition})
            }, 1000, event.target);
        }else{
            const anchor = document.getElementById(`${event.target.name}`)
            anchor.scrollIntoView({ behavior: 'smooth', block: blockPosition})
        }
        
    }
    

    useEffect(()=>{
        var saved_theme = localStorage.getItem('kcsujeet_theme')
        saved_theme === 'lightTheme' ? switchTheme(false) : switchTheme(true)
        setPosition()
        window.addEventListener('resize', setPosition)
        setHomeElement(document.getElementById('home'))
        setSkillsElement(document.getElementById('skills'))
        setExperienceElement(document.getElementById('experience'))
        setContactElement(document.getElementById('contact'))
        return () => window.removeEventListener('resize', setPosition);
    },[])

    const setPosition = ()=>{
        if(window.innerWidth <= 760){
            setBlockPosition('start')
        }else{
            setBlockPosition('center')
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleSroll, false)
        return () => window.removeEventListener('scroll', handleSroll);
    })

    const handleSroll = ()=>{
        if(isScrolledIntoView(homeElement)){
            setActiveLink('about')
        }else if(isScrolledIntoView(skillsElement)){
            setActiveLink('skills')
        }else if(isScrolledIntoView(experienceElement)){
            setActiveLink('experience')
        }else if(isScrolledIntoView(contactElement)){
            setActiveLink('contact')
        }
    }

    const isScrolledIntoView = (el, percentVisible = 15)=>{
        let
        rect = el.getBoundingClientRect(),
        windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    
      return !(
        Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
      )
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
        document.getElementById('theme-dropdown-toggle').blur()
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
        <nav className="navbar">
            <div className="hamburger" onClick={handleHamburgerClick}>
                <div className="hamburger-line"></div>
            </div>

            <ul className="navbar-nav">
                <li className={`nav-item`}>
                    <a name="home" onClick={handleClick} className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}>About</a>
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
                <li name="theme" className={"nav-item has-dropdown"}>
                    <Button id="theme-dropdown-toggle" type="text" className="nav-link">Theme</Button>
                    <ul className="theme-dropdown">
                        <li className="theme-option">
                            <Button type="text" onClick={()=>handleSwitchTheme(false)} id="lightTheme">
                                <i className="fa fa-circle light-circle" ></i>
                                Light</Button>
                        </li>
                        <li className="theme-option">
                            <Button type="text"  onClick={()=>handleSwitchTheme(true)} id="DarkTheme">
                            <i className="fa fa-circle dark-circle" ></i>
                                Dark</Button>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar