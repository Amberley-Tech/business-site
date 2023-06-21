import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import TeamMemberCard from './TeamMemberCard';

const MEMBER_DATA = [
  // {
  //   memberImg: '/assets/images/team/member-5.png',
  //   memberLink: '/single-team',
  //   memberName: 'Sai Kranthi',
  //   memberPosition: 'Fullstack Developer',
  //   links: {
  //     linkedIn: 'https://www.linkedin.com/in/iamsaikranthi/',
  //     github: 'https://github.com/kranthicodes',
  //     portfolio: 'https://kranthicodes.com',
  //   },
  // },
  {
    memberImg: '/assets/images/team/member-6.png',
    memberLink: '/single-team',
    memberName: 'Sai Kiran',
    memberPosition: 'Fullstack Developer',
    links: {
      linkedIn: 'https://www.linkedin.com/in/skiran017/',
      github: 'https://github.com/skiran017',
      portfolio: 'https://skiran017.github.io/portfolio/#/',
    },
  },
];

const TeamMember = ({ subTitle }) => {
  return (
    <section className='team__area pt-115 pb-80 mb-150 fix p-relative'>
      <div className='team__shape'>
        <img
          className='t-shape-1'
          src='/assets/images/shape/testimonials/t-shape-1.png'
          alt=''
        />
        <img
          className='t-shape-2'
          src='/assets/images/shape/testimonials/t-shape-2.png'
          alt=''
        />
        <img
          className='t-shape-3'
          src='/assets/images/shape/testimonials/t-shape-3.png'
          alt=''
        />
        <img
          className='t-shape-4'
          src='/assets/images/shape/testimonials/t-shape-4.png'
          alt=''
        />
      </div>
      <Container>
        <Row className='mb-65'>
          <Col xl={12}>
            <div className='team__heading text-center'>
              <SectionTitle
                subTitle={subTitle}
                titleFirst='Our beloved founding team'
              />
              {/* <p>Alone we can do so little; together we can do so much.</p>  */}
            </div>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          {MEMBER_DATA.map(
            (
              { memberImg, memberLink, memberName, memberPosition, links },
              index
            ) => (
              <TeamMemberCard
                key={index}
                memberImg={memberImg}
                memberLink={memberLink}
                memberName={memberName}
                memberPosition={memberPosition}
                links={links}
              />
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default TeamMember;
