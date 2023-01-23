import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiWoodFrame } from 'react-icons/gi';
import { FaFigma } from 'react-icons/fa';
import { BiCodeCurly } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import { MdVerifiedUser } from 'react-icons/md';
import { TfiLineDotted } from 'react-icons/tfi';

import SectionTitle from './SectionTitle';

export default function DevelopmentProcess() {
  return (
    <section className='development-process__area pt-115'>
      <Container>
        <Row>
          <Col xl={12}>
            <div className='portfolio__title-2 text-center'>
              <SectionTitle
                subTitle='Engineering process'
                titleFirst='Our 5 steps process'
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className='development-process_wrapper'>
              <div className='development-process_circle'>
                <GiWoodFrame size={'48px'} />
                Wireframe
              </div>
              <TfiLineDotted size={'48px'} />
              <div className='development-process_circle'>
                <FaFigma size={'48px'} />
                UI/UX Design
              </div>
              <TfiLineDotted size={'48px'} />
              <div className='development-process_circle'>
                <BiCodeCurly size={'48px'} />
                Development
              </div>
              <TfiLineDotted size={'48px'} />
              <div className='development-process_circle'>
                <MdVerifiedUser size={'48px'} />
                QA & Testing
              </div>
              <TfiLineDotted size={'48px'} />
              <div className='development-process_circle'>
                <SiMinutemailer size={'48px'} />
                Deliver
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
