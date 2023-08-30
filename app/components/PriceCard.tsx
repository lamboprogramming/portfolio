import React from 'react';

const PriceCard = () => {
  return (
    <div className="p-8">
        <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Do</h2>
           
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Help bring your company&apos;s visions to life.</p>
        </header>
<ol className="relative border-l border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-500"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">7 day delivery </time>
        <h3 className="text-lg font-semibold text-gray-900 ">Basic services:</h3>
        <p className="mb-4 text-base font-normal text-gray-500 leading-7 ">Personal Blogging Platform, Event Landing and Informational Site, Online Portfolio, Local Business Directory, Resume/CV Builder, Educational Resource Hub.</p>

    </li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-500"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">14 day delivery </time>
        <h3 className="text-lg font-semibold text-gray-900 ">Standard services:</h3>
        <p className="text-base font-normal text-gray-500 leading-7 ">Small Business Website, Online Product Showcase, Fitness and Wellness Blog, Real Estate Listings, Community Forum, Event Ticketing Platform.</p>
    </li>
    <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-500"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 day delivery </time>
        <h3 className="text-lg font-semibold text-gray-900 ">Premium services:</h3>
        <p className="text-base font-normal text-gray-500 leading-7 ">Online Learning Management System (LMS), E-commerce Marketplace, Healthcare Appointment Booking, Travel Booking Portal, Custom Tailoring Platform, Financial Portfolio Tracker.</p>
    </li>
</ol>

    </div>
  );
}

export default PriceCard;
