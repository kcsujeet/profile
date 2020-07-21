import React from 'react'
import {Fade} from 'react-reveal'

import './homeComponent.scss'
import myImage from '../../images/sujeet.jpg'
import myResume from '../../files/myResume.pdf'

import { DownloadOutlined } from '@ant-design/icons';
import {Row, Col, Space, Divider, Button} from 'antd'

function Home({id}){
    return(
        <Row id={id} type="flex" className='full-height-row' justify="center" gutter={24}>
            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <Fade left duration={1500}>
                <Space direction='vertical' className='text-align-left fadeInRight'>
                    <Divider orientation='left'>
                        <h1 className="darkTheme">About Me</h1>
                    </Divider>
                    <p className="darkTheme">Hello! I'm Sujeet, a software engineer based in Kathmandu, Nepal. <br/><br/>
                        
                        I graduated from Tribhuvan University, IOE, Pulchowk Campus in 2018. My interests lie at web development and deep learning. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. <br/><br/>As an individual, I'm a very happy-go-lucky kind of person. I like to meet new people and make new friends. I've keen interest in photography as well. In my spare time, I enjoy riding motorbike and traveling to new places and capturing the moments. <br/><br/>
                        My goal in life is to continue learning new things and grow as an individual every day. Being a huge fan of Elon Musk, whom I consider my role model, I've a dream that one day I'll be able to work for him. 
                     </p>
                </Space>
                </Fade>
            </Col>

            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
            <Fade right duration={1500}>
                <Space direction='vertical' className='text-align-center fadeInLeft'>
                    <div className="img-outer-border">
                        <div className="img-inner-border">
                            <img className="img-fluid" src={myImage} alt=""/>
                        </div>
                    </div>
                    <Button href={myResume} target="_blank" type="primary" shape="round" icon={<DownloadOutlined />} style={{marginTop: '2.5rem'}}>
                        Resume
                    </Button>
                </Space>
                </Fade>
            </Col>
        </Row>
    )
}


export default Home