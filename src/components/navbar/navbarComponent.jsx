import React, {useState, useEffect} from 'react'
import {Menu, Switch} from 'antd'

import './navbarComponent.scss'

function Navbar(){
    const [headerTheme, setHeaderTheme] = useState('dark')
    const [selectedKey, setSelectedKey] = useState('home')
    const [blockPosition, setBlockPosition] = useState('center')
    const [homeElement, setHomeElement] = useState('')
    const [skillsElement, setSkillsElement] = useState('')
    const [experienceElement, setExperienceElement] = useState('')
    const [contactElement, setContactElement] = useState('')

    const handleClick = (e)=>{
        const anchor = document.getElementById(`${e.key}`)
        anchor.scrollIntoView({ behavior: 'smooth', block: blockPosition})
        setSelectedKey(`${e.key}`)
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
            setSelectedKey('home')
        }else if(isScrolledIntoView(skillsElement)){
            setSelectedKey('skills')
        }else if(isScrolledIntoView(experienceElement)){
            setSelectedKey('experience')
        }else if(isScrolledIntoView(contactElement)){
            setSelectedKey('contact')
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

    const switchTheme= (checked, event)=>{
        if(!checked){
            setHeaderTheme('light')
            document.querySelector('g').setAttribute('fill','rgba(0, 0, 0, 0.65)') // fill graphql logo
            var elems = [...document.getElementsByClassName('darkTheme')]
            elems.forEach(element => {
                element.classList.remove('darkTheme')
                element.classList.add('lightTheme')
                localStorage.setItem('kcsujeet_theme', 'lightTheme')
            });
            
        }else{
            setHeaderTheme('dark')
            document.querySelector('g').setAttribute('fill','#fff') // fill graphql logo
            var elements = [...document.getElementsByClassName('lightTheme')]
            elements.forEach(element => {
                element.classList.remove('lightTheme')
                element.classList.add('darkTheme')
                localStorage.setItem('kcsujeet_theme', 'darkTheme')
            });
        }
    }

    return(
        <Menu theme={headerTheme} mode="horizontal" selectedKeys={[selectedKey]} className='navbar'>
            <Menu.Item onClick={handleClick} key="home">
                About
            </Menu.Item>
            <Menu.Item onClick={handleClick} key="skills">
                Skills
            </Menu.Item>
            <Menu.Item onClick={handleClick} key="experience">
                Experience
            </Menu.Item>
            <Menu.Item onClick={handleClick} key="contact">
                Contact
            </Menu.Item>
            <Menu.Item>
                Theme 
                <Switch onChange={switchTheme} defaultChecked={localStorage.getItem('kcsujeet_theme') === 'darkTheme'} style={{"marginLeft": ".5rem"}}/>
            </Menu.Item>
      </Menu>
    )
}

export default Navbar