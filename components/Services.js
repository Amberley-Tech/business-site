import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';

const SERVICE_DATA = [
  {
    serviceIcon: '/assets/images/icon/s-icon-1.png',
    serviceTitle: 'UI/UX Design',
    serviceDesc:
      'Design experts at Amberley will help you to ideate, strategize and formulate the best possible design for your business goals.',
    serviceLink: '/contact',
  },
  {
    serviceIcon: '/assets/images/icon/s-icon-2.png',
    serviceTitle: 'Web Development',
    serviceDesc:
      'Scale up your business with Amberley`s cost-effective, robust, and secure custom web app development services.',
    serviceLink: '/contact',
  },
  {
    serviceIcon: '/assets/images/icon/s-icon-3.png',
    serviceTitle: 'App Development',
    serviceDesc:
      'Scale up your business with Amberley`s cost-effective, robust, and secure custom mobile app development services.',
    serviceLink: '/contact',
  },
  {
    serviceIcon: '/assets/images/icon/s-icon-4.png',
    serviceTitle: 'Digital Marketing',
    serviceDesc:
      'With Amberley`s comprehensive digital marketing strategy, establish an impactful digital presence and drive more conversions.',
    serviceLink: '/contact',
  },
  {
    serviceIcon: '/assets/images/icon/s-icon-5.png',
    serviceTitle: 'Content Writing',
    serviceDesc:
      'Make your website more engaging and inspire your customers with Amberley`s Content Writing service and generate more leads.',
    serviceLink: '/contact',
  },
  {
    serviceIcon: '/assets/images/icon/s-icon-6.png',
    serviceTitle: 'E-commerce',
    serviceDesc:
      'Amberley`s cost-effective, robust, and secure E-commerce solutions can help you launch your web-shop that will scale your business and boost your sales.',
    serviceLink: '/contact',
  },
];

const Services = ({ extraClass }) => {
  return (
    <section
      className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}
    >
      <div className='services__shape'>
        <img
          className='services-s-1'
          src='/assets/images/shape/services/services-s-1.png'
          alt=''
        />
        <img
          className='services-s-2'
          src='/assets/images/shape/services/services-s-2.png'
          alt=''
        />
        <img
          className='services-s-3'
          src='/assets/images/shape/services/services-s-3.png'
          alt=''
        />
      </div>
      <Container>
        <Row className='mb-55'>
          <Col xl={6}>
            <div className='services__title'>
              <SectionTitle subTitle='Services' titleFirst='What we do' />
            </div>
          </Col>
        </Row>
        <Row>
          {SERVICE_DATA.map(
            (
              { serviceIcon, serviceTitle, serviceDesc, serviceLink },
              index
            ) => (
              <ServiceItem
                key={index}
                serviceIcon={serviceIcon}
                serviceTitle={serviceTitle}
                serviceDesc={serviceDesc}
                serviceLink={serviceLink}
              />
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
