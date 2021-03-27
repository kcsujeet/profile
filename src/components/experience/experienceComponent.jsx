import React, {useEffect, useState} from 'react'
import {Row, Col, Divider, Space, Tabs} from 'antd'
import {Fade} from 'react-reveal'
import LazyLoad from 'react-lazyload';


import './experienceComponent.scss'
import teamImage from '../../images/team.png'
const {TabPane} = Tabs

function Experience({id}){
    const [tabsPosition, setTabPosition] = useState('left');
    useEffect(()=>{
        setPosition()
        window.addEventListener('resize', setPosition)
        return () => window.removeEventListener('resize', setPosition);
    })

    const setPosition = ()=>{
        if(window.innerWidth <= 760){
            setTabPosition('top')
        }else{
            setTabPosition('left')
        }
    }

    return (
        <Row id={id} type="flex" className='full-height-row' justify='center' gutter={24}>
            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <Space direction='vertical' className='text-align-left' style={{width: '100%'}}>
            <Fade right duration={1500}>
                    <Divider orientation='left'>
                        <h1 id="experienceHeader" >Where I've Worked</h1>
                    </Divider>
                    <Tabs defaultActiveKey="1" tabPosition={tabsPosition}>
                        <TabPane tab={<p >Tekvortex</p>} key={1}>
                            <h2>Software Engineer <span className='company-name'>@ Tekvortex</span></h2>
                            <h4>February 2020 - Present</h4>
                            <ul className='work-list'>
                                <li>Write modern, performant, maintainable code</li>
                                <li>
                                Communicate with multi-disciplinary teams of engineers, designers and producers on a daily basis
                                </li>
                                <li>Mentor new recruits and help them understand the work environment</li>
                            </ul>
                        </TabPane>
                        <TabPane tab={<p >Tekvortex</p>} key={2}>
                            <h2>Assocaite Software Engineer <span className='company-name'>@ Tekvortex</span></h2>
                            <h4>February 2019 - February 2020</h4>
                            <ul className='work-list'>
                                <li>Work in agile approach with a team of engineers</li>
                                <li>Write highly performant and maintainable code</li>
                                <li>Ensure deliverables adhere to in-house processes and regulatory requirements</li>
                            </ul>
                        </TabPane>
                        <TabPane tab={<p >Qubit</p>} key={3}>
                            <h2>Python Developer <span className='company-name'>@ Qubit</span></h2>
                            <h4>September 2018 - February 2019</h4>
                            <ul className='work-list'>
                                <li>Develop modern web applications for clients</li>
                                <li>Present end-to-end demonstrations of the products to clients </li>
                                <li>Investigated best practices on in the software development scenario</li>
                            </ul>
                        </TabPane>
                    </Tabs>
                 </Fade>
                 </Space>
            </Col>

            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
            <Fade left duration={1500}>

                <div className="image-container" style={{padding: '30px'}}>
                    <LazyLoad>
                        <img className='coder-image' src={teamImage} alt=""/>
                    </LazyLoad>
                </div>
                </Fade>
            </Col>
        </Row>
    )
}

export default Experience