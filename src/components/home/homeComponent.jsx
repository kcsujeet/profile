import React from 'react'

import './homeComponent.scss'
import myImage from '../../images/sujeet.jpg'

import {Row, Col, Space, Divider} from 'antd'

function Home(){
    return(
        <Row type="flex" style={{height: '100%'}} justify="center" gutter={24}>
            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <Space direction='vertical' className='text-align-left'>
                    <Divider orientation='left'>
                        <h1>About Me</h1>
                    </Divider>
                    <p>Hello! I'm Sujeet, a software engineer based in Kathmandu, Nepal. <br/><br/>
                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.<br/><br/>
                        I graduated from Tribhuvan University, IOE, Pulchowk Campus in 2018.  My interests are in experimenting with different software design patterns, cryptography, data security, and software performance. If there’s any spare time, I enjoy riding motorbike, music, movies and non-fictional books. <br/><br/>
                        Beside programming, I like to explore the ideas and fields of Space Science, Physics, Rocket Science and tech gadgets. Being a huge fan of SpaceX and Tesla, my inspiration and role model is Elon Musk.
                     </p>
                </Space>
            </Col>

            <Col md={10} lg={10} sm={20} xs={20} className='full-height-column'>
                <div className="img-outer-border">
                <div className="img-inner-border">
                    <img className="img-fluid" src={myImage} alt=""/>
                </div>
                </div>
            </Col>
        </Row>
    )
}


export default Home