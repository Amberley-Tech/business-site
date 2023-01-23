import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import SectionTitle from './SectionTitle';

const About = ({ subTitle, titleFirst, titleSecond }) => {
  return (
    <section className='about__area fix p-relative pt-120 pb-120 about__pb'>
      <Container>
        <Row>
          <Col xxl={7} xl={8} lg={10} md={10}>
            <div className='about__title mb-80'>
              <SectionTitle
                subTitle={subTitle}
                titleFirst={titleFirst}
                titleSecond={titleSecond}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className='about__thumb'>
              <div className='about__thumb-shape'>
                <img
                  className='about-s-1 d-none d-lg-block'
                  src='/assets/images/shape/about/about-s-1.png'
                  alt=''
                />
                <img
                  className='about-s-2 d-none d-md-block'
                  src='/assets/images/shape/about/about-s-2.png'
                  alt=''
                />
              </div>
              <div className='about__thumb-image'>
                <img src='/assets/images/about/about-img1.png' alt='' />
              </div>
            </div>
          </Col>
          <Col xl={{ span: 5, offset: 1 }} lg={6}>
            <div className='about__content'>
              <p>
                Being a motivated Software Development company, we aim to come
                up with innovative cost-effective solutions that will help your
                business outshine in the Market. In addition to developing
                scalable and robust software, we also help organizations with
                migrations, integrations, and upgrades with support and
                maintenance services.
              </p>
              <ul>
                <li>
                  Dedicated project manager to ensure smooth services and
                  on-time delivery.
                </li>
                <li>
                  Agile development methodology for constant improvement and
                  innovation.
                </li>
                <li>
                  We provide post-development support and security assessment
                  and work towards the application scalability.
                </li>
                <li>
                  Our team will help you with research-oriented professional
                  guidance and consulting services for your business idea.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
