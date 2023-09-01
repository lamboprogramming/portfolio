import React from 'react';
import Image from 'next/image';
import tech from  '../../public/tech2.jpg'

const PriceCard = () => {
  return (
    <div className="p-8 ">
        <header className="text-center mx-auto mb-4 ">
            <h2 className="text-2xl md:text-3xl lg:text4xl leading-normal mb-2 font-bold text-black">What We Do</h2>
           
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2 md:text-3xl">Find the bridge between abstract ideas and tangible innovation</p>
        </header>
        <div className='grid grid-cols-2'>
         <div className='grid col-start-1 col-span-2'>
         <ol className="relative border-l border-gray-200 dark:border-gray-700"> 

            {/*List 1  */}
            <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-500"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">7 day delivery </time>
            <h3 className="text-xl font-semibold text-blue-500 ">Basic package:</h3>
            <ul className="mb-4 text-base font-normal text-gray-900 leading-9 ">
              <li className='mt-2'> <span className='font-semibold'>Personal Blogging Platform:</span> A simple website for individuals to create and share their personal blogs and stories.</li>
              <li className='mt-2'> <span className='font-semibold'>Event Landing Page:</span> A single-page website designed to promote and provide information about an upcoming event.</li>
              <li className='mt-2'> <span className='font-semibold'>Online Portfolio:</span> A website to showcase an individual&apos;s work or achievements, often used by freelancers and job seekers.</li>
              <li className='mt-2'> <span className='font-semibold'>Local Business Directory:</span> A directory listing local businesses, providing information like contact details, reviews, and location.</li>
              <li className='mt-2'> <span className='font-semibold'>Resume/CV Builder:</span> An online tool that helps users create professional resumes and CVs.</li>
              <li> <span className='font-semibold'>Educational Resource Hub:</span> A platform for organizing and sharing educational resources such as articles, videos, and courses.</li>
            </ul>
            </li>

            {/*List 2  */}
            <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-500"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">14 day delivery </time>
            <h3 className="text-xl font-semibold text-blue-500 ">Standard package:</h3>
            <ul className="mb-4 text-base font-normal text-gray-900 leading-9 ">
              <li className='mt-2'> <span className='font-semibold'>Small Business Website:</span> A website designed to represent and promote small businesses online, including information about services and products.</li>
              <li className='mt-2'> <span className='font-semibold'>Online Product Showcase:</span> An e-commerce website to display and sell products or services with an interactive catalog.</li>
              <li className='mt-2'> <span className='font-semibold'>Fitness and Wellness Blog:</span> A blog dedicated to fitness, wellness, and healthy lifestyle topics.</li>
              <li className='mt-2'> <span className='font-semibold'>Real Estate Listings:</span> A website for listing and searching properties available for rent or sale.</li>
              <li className='mt-2'> <span className='font-semibold'>Community Forum:</span> An online discussion platform for people with common interests or concerns to engage in conversations.</li>
              <li> <span className='font-semibold'>Event Ticketing Platform:</span> A platform for creating and selling tickets for events like concerts, conferences, or sports games.</li>
            </ul>
            </li>
            {/*List 3  */}
            <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-500"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 day delivery </time>
            <h3 className="text-xl font-semibold text-blue-500 ">Premium package:</h3>
            <ul className="mb-4 text-base font-normal text-gray-900 leading-9 ">
              <li className='mt-2'> <span className='font-semibold'>Online Learning Management System (LMS):</span> A comprehensive platform for creating, delivering, and managing online courses and educational content.</li>
              <li className='mt-2'> <span className='font-semibold'>E-commerce Marketplace:</span> A sophisticated online marketplace where multiple vendors can list and sell their products, often with advanced features like ratings, reviews, and payment processing.</li>
              <li className='mt-2'> <span className='font-semibold'>Travel Booking Portal:</span> An online platform for booking flights, hotels, tours, and other travel-related services.</li>
              <li className='mt-2'> <span className='font-semibold'>Real Estate Listings:</span> A website for listing and searching properties available for rent or sale.</li>
              <li className='mt-2'> <span className='font-semibold'>Financial Portfolio Tracker:</span> A tool for tracking and managing investment portfolios, including stocks, bonds, and other assets.</li>
              <li> <span className='font-semibold'>Custom Tailoring Platform:</span> An e-commerce platform for custom-made clothing, where customers can design and order personalized garments.</li>
            </ul>
            </li>

         
        </ol>
         </div>
        
         </div>

    </div>
  );
}

export default PriceCard;
  