import React from 'react'
import {Row, Col, Divider, Space, Tabs} from 'antd'

import './experienceComponent.scss'
import teamImage from '../../images/team.png'
const {TabPane} = Tabs

function Experience(){
    return (
        <Row type="flex" style={{height: '100%'}} justify='center' gutter={24}>
            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <Space direction='vertical' className='text-align-left'>
                    <Divider orientation='left'>
                        <h1>Where I've Worked</h1>
                    </Divider>
                    <Tabs defaultActiveKey="1" tabPosition={'left'} style={{ height: 220 }}>
                        <TabPane tab={'Tekvortex'} key={1}>
                            <h2>Software Engineer <strong className='company-name'>@ Tekvortex</strong></h2>
                            <h4>February 2020 - Present</h4>
                            <ul className='work-list'>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                                <li>
                                Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                                </li>
                            </ul>
                        </TabPane>
                        <TabPane tab={'Tekvortex'} key={2}>
                            <h2>Assocaite Software Engineer <strong className='company-name'>@ Tekvortex</strong></h2>
                            <h4>February 2019 - February 2020</h4>
                            <ul className='work-list'>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                                <li>
                                Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                                </li>
                            </ul>
                        </TabPane>
                        <TabPane tab={'Qubit'} key={3}>
                            <h2>Python Developer <strong className='company-name'>@ Qubit</strong></h2>
                            <h4>September 2018 - February 2019</h4>
                            <ul className='work-list'>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                                <li>
                                Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                                </li>
                            </ul>
                        </TabPane>
                    </Tabs>
                 </Space>
            </Col>

            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <div className="image-container" style={{padding: '30px'}}>
                    <img className='coder-image' src={teamImage} alt=""/>
                </div>
            </Col>
        </Row>
    )
}

export default Experience