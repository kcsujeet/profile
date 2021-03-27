import React from "react";
import { Fade } from "react-reveal";
import LazyLoad from 'react-lazyload';


import "./aboutComponent.scss";
import myImage from "../../images/sujeet.png";
import { Row, Col, Space, Divider, Button } from "antd";

function About({ id }) {
  return (
    <Row id={id} type="flex" className="full-height-row" justify="center" gutter={24}>
      <Col md={10} lg={10} sm={20} xs={20} className="full-height-column">
        <Fade left duration={1500}>
          <Space direction="vertical" className="text-align-left fadeInRight">
            <Divider orientation="left">
              <h1>About Me</h1>
            </Divider>
            <p>
              Hello! I'm Sujeet, a software engineer based in Kathmandu, Nepal. <br />
              <br />
              I graduated from Tribhuvan University, IOE, Pulchowk Campus in 2018. My interests lie at web development and deep learning. I enjoy
              creating things that live on the internet, whether that be websites, applications, or anything in between. <br />
              <br />
              As an individual, I'm a very happy-go-lucky kind of person. I like to meet new people and make new friends. I've keen interest in
              photography as well. In my spare time, I enjoy riding motorbike and traveling to new places and capturing the moments. <br />
              <br />
              My goal in life is to continue learning new things and grow as an individual every day. Being a huge fan of Elon Musk, whom I consider
              my role model, I've a dream that one day I'll be able to work for him.
            </p>
          </Space>
        </Fade>
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
  );
}

export default About;
