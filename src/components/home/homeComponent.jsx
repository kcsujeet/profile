import React from 'react'
import {Fade} from 'react-reveal'
import {onload} from '../../utils/textAnimation'
import myResume from "../../files/Sujeet_KC_Resume.pdf";
import { DownloadOutlined } from "@ant-design/icons";

import './homeComponent.scss'
import {Row, Col, Space, Typography, Button} from 'antd'
const {Title} = Typography

function Home({id}){
    window.onload = onload
    return(
        <Row id={id} type="flex" className='full-height-row' justify="center" gutter={24}>
            <Col md={120} lg={20} sm={20} xs={20} className='full-height-column'>
                <Space direction='vertical' className='text-align-center fadeInRight'>
                    {/* <Fade left duration={1500}> */}
                            <Title className="big-heading">Hello  <span
                                className="txt-rotate"
                                data-period="1000"
                                data-rotate='[ "World !" ]'></span></Title>
                    {/* </Fade> */}

                    <Fade duration={1500} delay={1000}>
                            <Title>I am Sujeet.</Title>
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
        </Row>
    )
}


export default Home