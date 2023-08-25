import React from 'react';

const Pricing = () => {
  return (
    <div className='flex flex-wrap  p-4 space-x- space-y-4 justify-evenly'>
      
    <div className="flex  flex-col w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <h5 className="mb-4 text-xl font-medium text-gray-500 ">Standard Package</h5>
        <div className="flex items-baseline text-gray-900 ">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">250</span>
            <span className="ml-1 text-xl font-normal text-gray-500 ">00</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3 items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Responsive Design: Create a website that looks great and functions seamlessly on all devices, from desktop to mobile.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Custom Design: Tailor the visual elements of your website to match your brand identity, using carefully chosen color schemes, fonts, and layouts.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Content Integration: Incorporate your provided content, including text, images, and videos, in a structured and visually appealing manner.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">User-Friendly Navigation: Design intuitive navigation menus and user interfaces that guide visitors through your website&apos;s pages effortlessly.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Social Media Integration: Integrate social media buttons or feeds to connect your website with your social profiles, increasing your online presence.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Basic SEO Setup: Optimize your website for search engines by implementing essential on-page SEO practices, including meta tags and keyword integration.</span>
            </li>
            
 
        </ul>
        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>

    <div className="flex  flex-col w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <h5 className="mb-4 text-xl font-medium text-gray-500 ">Premium Package</h5>
        <div className="flex items-baseline text-gray-900 ">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">500</span>
            <span className="ml-1 text-xl font-normal text-gray-500 ">00</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3 items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">All Standard Service Features: You&apos;ll receive all the benefits of our standard service, ensuring a strong foundation for your website.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Custom Backend Development: Develop advanced backend systems tailored to your specific requirements, enabling dynamic content management and user interactions.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">E-commerce Solutions: If you&apos;re selling products or services, we&apos;ll integrate a comprehensive e-commerce platform with features like shopping carts, secure checkout, and inventory management.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Membership Functionality: Create a membership or subscription-based website with restricted access areas and personalized user experiences.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Database Management: Set up and manage databases to handle large volumes of content, user data, and transactions securely.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Third-Party Integrations: Integrate external services, APIs, and tools to expand the capabilities of your website, whether it&apos;s for payment gateways, analytics, or CRM systems.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Performance Optimization: Fine-tune your website&apos;s performance to ensure fast loading times and smooth interactions, even with complex functionalities.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Security Enhancements: Implement advanced security measures such as SSL certificates, firewall setups, and regular security audits to protect your website from threats.</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Ongoing Support: Enjoy extended support for maintenance, updates, and troubleshooting, ensuring your website remains operational and up-to-date.</span>
            </li>
            
 
        </ul>
        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>

   

    </div>
  );
}

export default Pricing;
