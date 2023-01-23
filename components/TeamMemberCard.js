import React from 'react';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import { BsLinkedin, BsGithub, BsGlobe2 } from 'react-icons/bs';

const TeamMemberCard = ({
  memberImg,
  memberLink,
  memberName,
  memberPosition,
  links,
}) => {
  return (
    <Col xl={3} lg={3} md={6} className='mb-40'>
      <div className='team__thumb'>
        <img src={memberImg} alt='member' />
      </div>
      <div className='team__content text-center'>
        <Link href={memberLink}>
          <a>
            <h3 className='team__title'>{memberName}</h3>
          </a>
        </Link>
        <span className='team__position'>{memberPosition}</span>
        <div className='team__links'>
          <a href={links.linkedIn} target={'_blank'}>
            <BsLinkedin />
          </a>
          <a href={links.github} target={'_blank'}>
            <BsGithub />
          </a>
          <a href={links.portfolio} target={'_blank'}>
            <BsGlobe2 />
          </a>
        </div>
      </div>
    </Col>
  );
};

export default TeamMemberCard;
