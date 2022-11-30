import React from 'react'
import {Fade} from 'react-reveal'
import {onload} from '../../utils/textAnimation'
import myResume from "../../files/Sujeet_Kc_Resume.pdf";
import { DownloadOutlined } from "@ant-design/icons";
import LazyLoad from 'react-lazyload';

import './homeComponent.scss'
import myImage from "../../images/sujeet.png";
import {Row, Col, Space, Typography, Button} from 'antd'
const {Title} = Typography

function Home({id}){
    window.onload = onload
    return(
        <Row id={id} type="flex" className='full-height-row' justify="center" gutter={24}>
            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <Space direction='vertical' className='text-align-center fadeInRight'>
                    {/* <Fade left duration={1500}> */}
                            <p className="big-heading">Hello  <span
                                className="txt-rotate"
                                data-period="1000"
                                data-rotate='[ "World !" ]'></span>
                            </p>
                    {/* </Fade> */}

                    <Fade duration={1500} delay={1000}>
                        <Title>I am Sujeet.</Title>
                        <p>
                        A software engineer specializing in full-stack web development and cloud computing. Originally from Nepal and currenlty based in 
                        Halifax, Canada.
                        </p>
                    </Fade>

                    <Fade duration={1500} delay={1800}>
                    <Button
                        href={myResume}
                        target="_blank"
                        type="primary"
                        shape="round"
                        icon={<DownloadOutlined />}
                        style={{ marginTop: "2.5rem"}}>
                            Resume
                        </Button>
                    </Fade>
                </Space>
            </Col>
            <Col md={10} lg={10} sm={20} xs={20} className="full-height-column">

                <Fade right duration={1500} className="h-100">
                <Space direction="vertical" className="text-align-center fadeInLeft h-100">
                    <LazyLoad>
                        <img alt="Sujeet Kc" className="img-fluid" src={myImage}/>
                    </LazyLoad>
                </Space>
                </Fade>
            </Col>
        </Row>
    )
}


export default Home
