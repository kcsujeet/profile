import React from 'react'
import {Row, Col, Space, Card, Divider} from 'antd'

import coderImage from '../../images/coder.png'
import './aboutComponent.scss'
import {ReactComponent as GraphqlSvg} from '../../images/GraphQL.svg'

const {Meta} = Card

function About(){

    return(
        <Row type="flex" style={{height: '100%'}} justify='center' gutter={24}>
            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <div className="image-container" style={{padding: '30px'}}>
                    <img className='coder-image' src={coderImage} alt=""/>
                </div>
            </Col>

            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <Space direction='vertical' className='text-align-left'>
                    <Divider orientation='left'>
                        <h1>What I Do</h1>
                    </Divider>
                    <p>
                        CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                    </p>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card className='icon-card text-align-center' hoverable cover={<i className='fab fa-3x fa-html5 icon-margin-top'></i>}>
                                <Meta description="Html5"></Meta>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className='icon-card text-align-center' hoverable cover={<GraphqlSvg style={{height: '43px'}}/>} style={{paddingTop: '.5rem'}}>
                                <Meta description="GraphQL"></Meta>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className='icon-card text-align-center' hoverable cover={<i className='fab fa-3x fa-js icon-margin-top'></i>}>
                                <Meta description="Javascript"></Meta>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className='icon-card text-align-center' hoverable cover={<i className='fab fa-3x fa-node-js icon-margin-top'></i>}>
                                <Meta description="Nodejs"></Meta>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card className='icon-card text-align-center' hoverable cover={<i className='fab fa-3x fa-react icon-margin-top'></i>}>
                                <Meta description="React"></Meta>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className='icon-card text-align-center' hoverable cover={<i className='fab fa-3x fa-angular icon-margin-top'></i>}>
                                <Meta description="Angular"></Meta>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className='icon-card text-align-center' hoverable cover={<i className='fab fa-3x fa-vuejs icon-margin-top'></i>}>
                                <Meta description="Vue"></Meta>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className='icon-card text-align-center' hoverable cover={<i className='fab fa-3x fa-python icon-margin-top'></i>}>
                                <Meta description="Python"></Meta>
                            </Card>
                        </Col>
                    </Row>
                </Space>
                </Col>
            
        </Row>
    )   
}

export default About