import React from 'react'
import {Fade} from 'react-reveal'
import {Row, Col,Card, Space, Divider, Button} from 'antd'

import './contactComponent.scss'


function Contact({id}){
    return (
        <Row id={id} type="flex" className='full-height-row' justify='center' gutter={24}>
            <Col md={20} lg={20} sm={20} xs={20} className='full-height-column'>
                <Space direction='vertical' style={{width: '100%'}}>
                    <Divider orientation='left'>
                            <h1 className="darkTheme">Get In Touch</h1>
                    </Divider>
                    <Row gutter={24} justify="center">
                        <Col md={8} lg={8} sm={20} xs={20}>
                        <Fade down duration={1500}>
                            <Card className='contact-card darkTheme' cover={<i className="fas fa-2x fa-map-marker-alt contact-icon"></i>}>
                                <h2 className="darkTheme"><strong>Address</strong></h2>
                                <p className="darkTheme">Kalnki, Kathmandu, Nepal
                                </p>
                            </Card>
                            </Fade>
                        </Col>
                        <Col md={8} lg={8} sm={20} xs={20}>
                        <Fade down duration={1500} delay={200}>
                            <Card className='contact-card darkTheme' cover={<i className="far fa-2x fa-envelope contact-icon"></i>}>
                                <h2 className="darkTheme"><strong>Email</strong></h2>
                                <p className="darkTheme">
                                    sujeetkc45@gmail.com
                                </p>
                            </Card>
                            </Fade>
                        </Col>
                        <Col md={8} lg={8} sm={20} xs={20}>
                        <Fade down duration={1500} delay={400}>
                            <Card className='contact-card darkTheme' cover={<i className="fas fa-2x fa-phone contact-icon"></i>}>
                                <h2 className="darkTheme"><strong>Phone</strong></h2>
                                <p className="darkTheme">+977-9803593100
                                </p>
                            </Card>
                            </Fade>
                        </Col>
                    </Row>
                        <Row type="flex" justify="center" style={{marginTop: '1rem'}}>
                            <Col md={3} lg={3} sm={10} xs={10} className='contact-icon-col'>
                            <Fade down duration={1500} delay={600}>
                                <Button className="social-icon darkTheme" type='link' target='_blank' href="https://www.facebook.com/sujeet.kc.1"><i className='fab fa-2x fa-facebook-square'></i></Button>
                            </Fade>
                            </Col>
                            <Col md={3} lg={3} sm={10} xs={10}  className='contact-icon-col'>
                                <Fade down duration={1500} delay={600}>
                                <Button className="social-icon darkTheme" type='link' target='_blank' href="https://github.com/kcsujeet"><i className='fab fa-2x fa-github'></i></Button>
                            </Fade>
                            </Col>
                            <Col md={3} lg={3} sm={10} xs={10}  className='contact-icon-col'>
                                <Fade down duration={1500} delay={600}>
                                <Button className="social-icon darkTheme" type='link' target='_blank' href="https://www.linkedin.com/in/sujeet-kc-994984154/"><i className="fab fa-2x fa-linkedin"></i></Button>
                            </Fade>
                            </Col>
                            <Col md={3} lg={3} sm={10} xs={10}  className='contact-icon-col'>
                                <Fade down duration={1500} delay={600}>
                                <Button className="social-icon darkTheme" type='link' target='_blank' href="https://www.instagram.com/kcsujeet/"><i className="fab fa-2x fa-instagram"></i></Button>
                            </Fade>
                            </Col>
                        </Row>
                </Space>
            </Col>
        </Row>
    )
}

export default Contact