import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import Experience from '../components/Experience';
import TeamHome from '../components/TeamHome';
import Project from '../components/Project';
import BlogHome from '../components/BlogHome';
import LetsWork from '../components/LetsWork';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <Layout pageTitle='Amberley Tech | Business & Digital Agency'>
      <PageHeader title='About us' crumbTitle='About us' />
      <Header
        heroLogo='/assets/images/logo/Amberley-Logo2.svg'
        headerClass='header__white'
        menuClass='main-menu-3'
        darkLogo
      />
      <main>
        <About
          subTitle='We are Amberley Tech'
          titleFirst='We are here to help you build'
          titleSecond=' your big Idea using Tech'
        />
        <Experience extraClass='mt-70' />
        <TeamHome subTitle='Team' />
        {/* <Project extraClass='project__area-pt' subTitle='Get Started' /> */}
        {/* <BlogHome extraClass='pt-110' /> */}
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default AboutPage;
