import React from 'react'
import {Row, Col, Space, Card, Divider} from 'antd'
import {Fade} from 'react-reveal'
import LazyLoad from 'react-lazyload';


import coderImage from '../../images/coder.png'
import './skillsComponent.scss'

const {Meta} = Card

function Skills({id}){
    return(
        <Row id={id} type="flex" className='full-height-row' justify='center' gutter={24}>
            <Col md={10} lg={10} sm={24} xs={24} className='full-height-column'>
                <Fade down duration={1500}>
                    <div className="image-container" style={{padding: '30px'}}>
                        <LazyLoad>
                            <img className='coder-image' src={coderImage} alt=""/>
                        </LazyLoad>
                    </div>
                </Fade>
            </Col>

            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <Fade up duration={1500}>
                <Space direction='vertical' className='text-align-left'>
                    <Divider orientation='left'>
                        <h1 id="skills_section_title" >What I Do</h1>
                    </Divider>
                    <p >
                        I'm proficient in the following technologies.
                    </p>
                    <Row gutter={16}>
                        <Col className='icon-col' md={8} lg={8} sm={12} xs={12}>
                            <Card className='icon-card  text-align-center' hoverable cover={<i className='fab fa-3x fa-js icon-margin-top'></i>}>
                                <Meta description={<p >Javascript</p>}></Meta>
                            </Card>
                        </Col>
                        <Col className='icon-col' md={8} lg={8} sm={12} xs={12}>
                            <Card className='icon-card text-align-center' hoverable cover={<i className='fab fa-3x fa-html5 icon-margin-top'></i>}>
                                <Meta description={<p >HTML</p>}></Meta>
                            </Card>
                        </Col>
                        <Col className='icon-col' md={8} lg={8} sm={12} xs={12}>
                            <Card className='icon-card text-align-center' hoverable cover={<i className='fab fa-3x fa-css3-alt icon-margin-top'></i>}>
                                <Meta description={<p >CSS</p>}></Meta>
                            </Card>
                        </Col>
                        <Col className='icon-col' md={8} lg={8} sm={12} xs={12}>
                            <Card className='icon-card  text-align-center' hoverable cover={<i className='fab fa-3x fa-angular icon-margin-top'></i>}>
                                <Meta description={<p >Angular</p>}></Meta>
                            </Card>
                        </Col>
                        <Col className='icon-col' md={8} lg={8} sm={12} xs={12}>
                            <Card className='icon-card  text-align-center' hoverable cover={<i className='fab fa-3x fa-vuejs icon-margin-top'></i>}>
                                <Meta description={<p >Vue</p>}></Meta>
                            </Card>
                        </Col>
                        <Col className='icon-col' md={8} lg={8} sm={12} xs={12}>
                            <Card className='icon-card  text-align-center' hoverable cover={<i className='fab fa-3x fa-react icon-margin-top'></i>}>
                                <Meta description={<p >React</p>}></Meta>
                            </Card>
                        </Col>
                        <Col className='icon-col' md={8} lg={8} sm={12} xs={12}>
                            <Card className='icon-card  text-align-center' hoverable cover={<i className='fas fa-3x fa-gem icon-margin-top'></i>}>
                                <Meta description={<p >ROR</p>}></Meta>
                            </Card>
                        </Col>
                        <Col className='icon-col' md={8} lg={8} sm={12} xs={12}>
                            <Card className='icon-card  text-align-center' hoverable cover={<i className='fab fa-3x fa-node-js icon-margin-top'></i>}>
                                <Meta description={<p >Node</p>}></Meta>
                            </Card>
                        </Col>
                        <Col className='icon-col' md={8} lg={8} sm={12} xs={12}>
                            <Card className='icon-card  text-align-center' hoverable cover={<i className='fab fa-3x fa-python icon-margin-top'></i>}>
                                <Meta description={<p >Python</p>}></Meta>
                            </Card>
                        </Col>
                    </Row>
                </Space>
                </Fade>
            </Col>
        </Row>
    )
}

export default Skills
