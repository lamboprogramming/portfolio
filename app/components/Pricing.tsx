import Link from 'next/link';
import React from 'react';
import { FcCancel } from 'react-icons/fc'

const Pricing = () => {
  return (
    <>
    
    <div className='m-4 grid lg:grid-cols-3 gap-4  '>
   
   {/* Basic */}
   <div className="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
       <h5 className="mb-8 text-xl font-medium text-gray-500 ">Basic </h5>
       <h5 className="mb-2 text-sm font-medium text-gray-900 ">Starting at </h5>
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
               <span className="text-base font-normal leading-tight text-gray-500 ">Single page, user-friendly, responsive website for desktop and mobile devices.</span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">Social media integration with links to profiles. </span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">Incorporate content, text, images, and videos, in a visually appealing manner.</span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">Basic search engine optimization setup with meta tags and keyword integration.</span>
           
           </li>

  


   
       </ul>
       <Link href="/contact">
       <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
       </Link>
       
   </div>

   {/* Standard */}
   <div className="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
       <h5 className="mb-8 text-xl font-medium text-gray-500 ">Standard</h5>
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
               <span className="text-base font-normal leading-tight text-gray-500 ">Custom, user-friendly, responsive website for desktop and mobile devices. (5 page limit)</span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">All basic package services are included </span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">Database setup ensuring smooth retrieval and storage of information.</span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">Integrate third party systems, APIs, CRM systems, and inventory management software.</span>
           
           </li>

      


     

   
       </ul>
       <Link href="/contact">
       <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
       </Link>
   </div>

   {/* Premium */}
   <div className="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
       <h5 className="mb-8 text-xl font-medium text-gray-500 ">Premium</h5>
       <h5 className="mb-2 text-sm font-medium text-gray-900 ">Starting at </h5>
       <div className="flex items-baseline text-gray-900 ">
           <span className="text-3xl font-semibold">$</span>
           <span className="text-5xl font-extrabold tracking-tight">500</span>
           <span className="ml-1 text-xl font-normal text-gray-500 ">.00</span>
       </div>
       <ul role="list" className="space-y-5 my-7">
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">Custom, user-friendly, responsive website for desktop and mobile devices. (10 page limit)</span>
           
           </li>
         
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">E-commerce solutions: shopping carts, secure checkout, and inventory management.</span>
           
           </li>

           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">User account dashboard for profile management, orders, and preferences</span>
           
           </li>
           <li className="flex space-x-3 items-center">
               <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
               </svg>
               <span className="text-base font-normal leading-tight text-gray-500 ">Security enhancements: SSL certificates, firewall setups, and regular security audits</span>
           
           </li>
 

   
       </ul>
       <Link href="/contact">
       <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
       </Link>
   </div>



   </div>
   </>
   
  );
}

export default Pricing;
