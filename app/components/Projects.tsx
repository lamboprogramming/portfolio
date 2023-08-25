'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Champion from '../../public/homeclean.jpg'
import Dj from '../../public/luchainz.png'
import Savor from '../../public/savor.jpg'


const Projects = () => {
  return (
    <div className='p-2'>
      {/* <!-- Container for demo purpose --> */}
<div className=" my-2 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section className="mb-8 text-center lg:text-left">
    <h2 className="mb-12 text-center text-3xl font-bold">
      Projects we are proud of
    </h2>

    <div className="grid gap-x-6 lg:grid-cols-3">
      {/* LuChainz */}
      <div className="mb-12 lg:mb-0">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          
          <Image src={Dj} alt="#" className="w-full" />
         
         
        </div>
        <h5 className="mb-4 text-lg font-bold">Dj LuChainz </h5>
        <div className="mb-4 flex items-center justify-center text-sm font-medium  lg:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          Entertainment
        </div>
        {/*  Buttons */}
        <div className='flex mb-4 mt-8 space-x-4 justify-center lg:justify-start '>
        <a href="https://djluchainz.com/" className='cursor-pointer'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">Visit Site</button>
        </a> 

        <a href="https://github.com/lamboprogramming/vercel-launch/tree/master/djluchainz" className='cursor-pointer'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Source Code</button>
        </a>
        </div>
       
   
        <p className="text-neutral-500 leading-7  ">
          If you have an upcoming event check out <span className="font-bold">LuChainz</span> for your music needs. One of the hottest DJ&apos;s out of New York City, not only is he affordable and reliable, but guaranteed to make any event one to remember. His musical selection caters to every crowd!
        </p>
      </div>

      {/* Champion */}
      <div className="mb-12 lg:mb-0">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <Image src={Champion} className="w-full " alt="#"  />
        </div>

        <h5 className="mb-4 text-lg font-bold">Champion Cleaning</h5>
        <div className="mb-4 flex items-center justify-center text-sm font-medium text-primary  lg:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          Hospitality
        </div>
                {/*  Buttons */}
            <div className='flex mb-4 mt-8 space-x-4 justify-center lg:justify-start '>
              <a href="https://cleaning-service-git-master-lamboprogramming.vercel.app/" className='cursor-pointer'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">Visit Site</button>
              </a> 

        <a href="https://github.com/lamboprogramming/cleaning-service" className='cursor-pointer'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Source Code</button>
        </a>
        </div>
        <p className="text-neutral-500 leading-7  ">
          Reside in theSan Diego, California area and in need of a cleaning for your space? Contact <span className="font-bold">Champion Cleaning</span>. They provide top of the line services for just about any occasion and are known their professionalism, work ethic, integrity, and passion for hospitality.
        </p>
      </div>

    {/* Savor */}
      <div className="mb-0">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          
          <Image src={Savor} className="w-full" alt="#"  />
      
        </div>
        <h5 className="mb-4 text-lg font-bold">Savor Fruit Juices</h5>
        <div className="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          Nutrition
        </div>
             {/*  Buttons */}
             <div className='flex mb-4 mt-8 space-x-4 justify-center lg:justify-start '>
        <a href="#!" className='cursor-pointer'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">Visit Site</button>
        </a> 

        <a href="#!" className='cursor-pointer'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Source Code</button>
        </a>
        </div>
        <p className="text-neutral-500 leading-7 ">
         <span className="font-bold">Savor</span> is a nutrition based website responsible for sharing insightful information on diet, lifestyle, disease, and health. Check out their site for fruit and vegetable juice recipe&apos;s and blog for insightful information and findings in the world regarding health.
        </p>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
{/* <!-- Container for demo purpose --> */}
    </div>
  );
}

export default Projects;
