'use client'
import { useState } from 'react'
import Link from 'next/link';
import { LiaAngleDoubleRightSolid } from 'react-icons/lia'
import { GrAlarm } from 'react-icons/gr'


const Pricing = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showStandardDropdown, setShowStandardDropdown] = useState(false);
    const [showPremiumDropdown, setShowPremiumDropdown] = useState(false);
  return (
    <>
      <header className="text-center mx-auto mb-4 pt-4 lg:px-20 bg-slate-50 px-8 md:pt-8">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black md:text-3xl lg:text-4xl md:mb-4">Choose the best plan for your needs</h2>
           
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2 md:text-2xl">Everything you need to capture leads and turn them into customers</p>
      </header>
    <div className='m-4 grid xl:grid-cols-3 gap-4  '>
   
   {/* Basic */}
   <div className="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
       <h5 className="mb-8 text-xl font-medium text-gray-500 ">Basic package</h5>

       <h5 className="mb-2 text-sm font-medium text-gray-900 ">Starting at </h5>
        
    
       {/* Services */}
 
       
       <div className="flex items-baseline text-gray-900 ">
           <span className="text-3xl font-semibold">$</span>
           <span className="text-5xl font-extrabold tracking-tight">250</span>
           <span className="ml-1 text-xl font-normal text-gray-500 ">.00</span>
       </div>
       <ul role="list" className="space-y-6 my-7">
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className="font-bold">3 Page</span> responsive web application for desktop and mobile devices.</span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className="font-bold">Social Media Integration:</span> media buttons, sharing content, and embedding content. </span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>Content Integration:</span> brand consistency, visually appealling, CTA elements, visual story telling.
               </span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>Speed Optimization:</span> page loading speed, user experience, mobile performance.
               </span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className="font-bold">Search Engine Optimization:</span> setup with meta tags and keyword integration.</span>
      
           </li>
         
       </ul>

       {/* Read more */}
      <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-gray-900 font-medium focus:outline-none flex items-center space-x-1 cursor-pointer"
        >
          <span>View Related Projects</span>
          <LiaAngleDoubleRightSolid/>
        </button>
        {showDropdown && (
          <ul role="list" className="mt-2 space-y-2">
        
            <li className="mb-8 ml-4">
            <h3 className="text-base font-semibold text-gray-900 mb-4 animate-bounce  ">
                7 day delivery 
            </h3>
                
   
            
            <ul className="mb-4 text-base font-normal text-gray-900 leading-7 ">
              <li className='mt-2'> <span className='font-semibold text-blue-500'>Personal Blogging Platform:</span> A simple website for individuals to create and share their personal blogs and stories.</li>
              <li className='mt-4'> <span className='font-semibold text-blue-500'>Event Landing Page:</span> A single-page website designed to promote and provide information about an upcoming event.</li>
              <li className='mt-4'> <span className='font-semibold text-blue-500'>Online Portfolio:</span> A website to showcase an individual&apos;s work or achievements, often used by freelancers and job seekers.</li>
              <li className='mt-4'> <span className='font-semibold text-blue-500'>Local Business Directory:</span> A directory listing local businesses, providing information like contact details, reviews, and location.</li>
              <li className='mt-4'> <span className='font-semibold text-blue-500'>Resume/CV Builder:</span> An online tool that helps users create professional resumes and CVs.</li>
              <li className="mt-4"> <span className='font-semibold text-blue-500 '>Educational Resource Hub:</span> A platform for organizing and sharing educational resources such as articles, videos, and courses.</li>
            </ul>
            </li>
          </ul>
        )}
      </div>

       <Link href="/contact">
       <button type="button" className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-200  font-semibold rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose Basic</button>
       </Link>   
      

          
   </div>

   {/* Standard */}
   <div className="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
       <h5 className="mb-8 text-xl font-medium text-gray-500 ">Standard package</h5>
       <h5 className="mb-2 text-sm font-medium text-gray-900 ">Starting at </h5>
       <div className="flex items-baseline text-gray-900 ">
           <span className="text-3xl font-semibold">$</span>
           <span className="text-5xl font-extrabold tracking-tight">400</span>
           <span className="ml-1 text-xl font-normal text-gray-500 ">.00</span>
       </div>
       <ul role="list" className="space-y-5 my-7">
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>5 Page</span> responsive modern business web application for desktop and mobile devices.</span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>Social Media Integration:</span>  media buttons, sharing content, and embedding content. </span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>Content Integration:</span> brand consistency, visually appealling, CTA elements, visual story telling.
               </span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>Speed Optimization:</span> page loading speed, user experience, mobile performance.
               </span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className="font-bold">Search Engine Optimization:</span> setup with meta tags and keyword integration.</span>
           </li>
       </ul>

       {/* Read more */}
       <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={() => setShowStandardDropdown(!showStandardDropdown)}
          className="text-gray-900 font-medium focus:outline-none flex items-center space-x-1 cursor-pointer"
        >
          <span>View Related Projects</span>
          <LiaAngleDoubleRightSolid/>
        </button>
        {showStandardDropdown && (
          <ul role="list" className="mt-2 space-y-2">
        
            <li className="mb-8 ml-4">
            
            <h3 className="text-base font-semibold text-gray-900 mb-4 animate-bounce  ">
                14 day delivery 
            </h3>
            <ul className="mb-4 text-base font-normal text-gray-900 leading-7 ">
            <li className='mt-2'> <span className='font-semibold text-blue-500'>Small Business Website:</span> A website designed to represent and promote small businesses online, including information about services and products.</li>
              <li className='mt-4'> <span className='font-semibold text-blue-500'>Online Product Showcase:</span> An e-commerce website to display and sell products or services with an interactive catalog.</li>
              <li className='mt-4'> <span className='font-semibold text-blue-500'>Fitness and Wellness Blog:</span> A blog dedicated to fitness, wellness, and healthy lifestyle topics.</li>
              <li className='mt-4'><span className='font-semibold text-blue-500'>Real Estate Listings:</span> A website for listing and searching properties available for rent or sale.</li>
              <li className='mt-4'> <span className='font-semibold text-blue-500'>Community Forum:</span> An online discussion platform for people with common interests or concerns to engage in conversations.</li>
              <li className='mt-4'> <span className='font-semibold text-blue-500'>Event Ticketing Platform:</span> A platform for creating and selling tickets for events like concerts, conferences, or sports games.</li>
            </ul>
            </li>
          </ul>
        )}
      </div>

       <Link href="/contact">
       <button type="button" className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-200  font-semibold rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose Standard</button>
       </Link>
   </div>

   {/* Premium */}
   <div className="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
       <h5 className="mb-8 text-xl font-medium text-gray-500 ">Premium package</h5>
       <h5 className="mb-2 text-sm font-medium text-gray-900 ">Starting at </h5>
       <div className="flex items-baseline text-gray-900 ">
           <span className="text-3xl font-semibold">$</span>
           <span className="text-5xl font-extrabold tracking-tight">600</span>
           <span className="ml-1 text-xl font-normal text-gray-500 ">.00</span>
       </div>
       <ul role="list" className="space-y-5 my-7">
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>10 Page</span> responsive full stack web application for desktop and mobile devices.</span>
           
           </li>
         
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>E-commerce solutions:</span> customers can explore, select, and purchase products.</span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>Database Setup:</span> storage, retrieval and management of data and information.
               </span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>Data Validation:</span> Ensure that data submitted by users is accurate and secure.
               </span>
           
           </li>


           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-900 "><span className='font-bold'>Payment Methods:</span> payment methods for customers to securely complete purchases.</span>
           </li>
       </ul>

              {/* Read more */}
        <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={() => setShowPremiumDropdown(!showPremiumDropdown)}
          className="text-gray-900 font-medium focus:outline-none flex items-center space-x-1 cursor-pointer"
        >
          <span>View Related Projects</span>
          <LiaAngleDoubleRightSolid/>
        </button>
        {showPremiumDropdown && (
          <ul role="list" className="mt-2 space-y-2">
        
            <li className="mb-8 ml-4">
            
            <h3 className="text-base font-semibold text-gray-900 mb-4 animate-bounce  ">
                21 day delivery 
            </h3>
            <ul className="mb-4 text-base font-normal text-gray-900 leading-7 ">
            <li className='mt-2'> <span className='font-semibold text-blue-500'>Online Learning Management System (LMS):</span> A comprehensive platform for creating, delivering, and managing online courses and educational content.</li>
            <li className='mt-4'> <span className='font-semibold text-blue-500'>E-commerce Marketplace:</span> A sophisticated online marketplace where multiple vendors can list and sell their products, often with advanced features like ratings, reviews, and payment processing.</li>
            <li className='mt-4'> <span className='font-semibold text-blue-500'>Travel Booking Portal:</span> An online platform for booking flights, hotels, tours, and other travel-related services.</li>
            <li className='mt-4'> <span className='font-semibold text-blue-500'>Real Estate Listings:</span> A website for listing and searching properties available for rent or sale.</li>
            <li className='mt-4'> <span className='font-semibold text-blue-500'>Financial Portfolio Tracker:</span> A tool for tracking and managing investment portfolios, including stocks, bonds, and other assets.</li>
            <li className='mt-4'> <span className='font-semibold text-blue-500'>Custom Tailoring Platform:</span> An e-commerce platform for custom-made clothing, where customers can design and order personalized garments.</li>
            </ul>
            </li>
          </ul>
        )}
        </div>

       <Link href="/contact">
       <button type="button" className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-200  font-semibold rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose Premium</button>
       </Link>
   </div>



   </div>
   </>
   
  );
}

export default Pricing;
