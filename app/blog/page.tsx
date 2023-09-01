import React from 'react';
import Article from '../components/Article' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <div className='bg-slate-50'>
    
    
    <Article/>
    </div>
    <Footer />
    </>
  );
}

export default page;
