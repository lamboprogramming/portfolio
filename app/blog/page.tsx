import React from 'react';
import Article from '../components/Article' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <Article/>
    <Footer />
    </>
  );
}

export default page;
