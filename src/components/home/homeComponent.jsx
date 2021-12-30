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
                        A software engineer based in Halifax, Canada specializing in web development and cloud computing. 
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
                <svg style={{width: 0, height: 0}}>
                <filter id="duotone_seafoam">
                    <feColorMatrix type="matrix" result="gray"
                        values="1 0 0 0 0
                                1 0 0 0 0
                                1 0 0 0 0
                                0 0 0 1 0" >
                    </feColorMatrix>

                    <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
                        <feFuncR type="table" tableValues="0 0.1647058824"></feFuncR>
                        <feFuncG type="table" tableValues="0.1411764706 0.6588235294"></feFuncG>
                        <feFuncB type="table" tableValues="0.2117647059 0.5490196078"></feFuncB>
                        <feFuncA type="table" tableValues="0 1"></feFuncA>
                    </feComponentTransfer>
                </filter>
                </svg>
            
                <Fade right duration={1500} className="h-100">
                <Space direction="vertical" className="text-align-center fadeInLeft h-100">
                    <LazyLoad>
                        <img className="img-fluid" src={myImage}/>
                    </LazyLoad>
                </Space>
                </Fade>
            </Col>
        </Row>
    )
}


export default Home