import React from 'react'
import {Row, Col,Card, Space, Divider} from 'antd'

import './contactComponent.scss'


function Contact(){
    return (
        <Row type="flex" style={{height: '100%'}} justify='center' gutter={24}>
            <Col md={16} lg={16} sm={20} xs={20} className='full-height-column'>
                <Space direction='vertical' style={{width: '100%'}}>
                    <Divider orientation='left'>
                            <h1>Get In Touch</h1>
                    </Divider>
                    <Row gutter={24}>
                        <Col md={8} lg={8} sm={8} xs={8}>
                            <Card className='contact-card' cover={<i className="fas fa-2x fa-map-marker-alt contact-icon"></i>}>
                                <h2><strong>Address</strong></h2>
                                <p>Kalanki, Kathmandu, Nepal
                                </p>
                            </Card>
                        </Col>
                        <Col md={8} lg={8} sm={8} xs={8}>
                            <Card className='contact-card' cover={<i className="far fa-2x fa-envelope contact-icon"></i>}>
                                <h2><strong>Email</strong></h2>
                                <a href="mailto: sujeetkc45@gmail.com">sujeetkc45@gmail.com</a>
                            </Card>
                        </Col>
                        <Col md={8} lg={8} sm={8} xs={8}>
                            <Card className='contact-card' cover={<i className="fas fa-2x fa-phone contact-icon"></i>}>
                                <h2><strong>Phone</strong></h2>
                                <p>+977-9803593100
                                </p>
                            </Card>
                        </Col>
                    </Row>
                        <Row type="flex" justify="center">
                            <a href="linkedin"><i className='fab fa-facebook-square' style={{margin: '0 10px 0 0'}}></i></a>
                            <a href="linkedin"><i className='fab fa-github' style={{margin: '0 10px 0 10px'}}></i></a>
                            <a href="linkedin"><i className="fab fa-linkedin" style={{margin: '0 10px 0 10px'}}></i></a>
                            <a href="linkedin"><i className="fab fa-google" style={{margin: '0 0 0 10px'}}></i></a>
                        </Row>
                </Space>
            </Col>
        </Row>
    )
}

export default Contact