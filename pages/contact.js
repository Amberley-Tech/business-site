import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import LetsWork from '../components/LetsWork';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <Layout pageTitle='Amberley Tech | Business & Digital Agency'>
      <PageHeader title='Contact us' crumbTitle='Contact us' />
      <Header
        heroLogo='/assets/images/logo/Amberley-Logo2.svg'
        headerClass='header__white'
        menuClass='main-menu-3'
        darkLogo
      />
      <main>
        <Contact />
        <ContactForm />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default ContactPage;
