import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import fruit from '../../public/fruit.jpg'
import roadmap from '../../public/roadmap.jpg'

import money from '../../public/money.jpg'

const Blog = () => {
  return (
    <div className='bg-slate-50 '>
          <header className="text-center mx-auto  lg:px-20 pt-4 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-normal mb-2 font-bold text-black">Welcome to my thoughts</h2>
           
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto md:text-2xl">&quot;The ability to read awoke inside of me some long dormant craving to be mentally alive.&quot; </p>
        </header>
      <section className=" ">
    <div className=" p-4 mx-auto max-w-screen-xl lg:px-6 ">

     
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Article 1 */}
          <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md ">
             <div className="mb-4">
             <Image src={fruit} className="w-full rounded-xl" alt='#'/>
             </div>
              <div className="flex justify-between items-center mb-5 text-gray-500">
            
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                    
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                      Nutrition
                  </span>
                  <span className="text-sm">2 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "><a href="#">Antioxidants: natural healers of the body</a></h2>
              <p className="mb-5 font-light text-gray-500 ">Say hello to antioxidants – the unsung heroes of wellness! we&apos;re delving into the world of these supercharged compounds and why they&apos;re essential for our vitality. </p>
              <div className="flex justify-between items-center">
                 
                  <a href="/blog/blog1" className="inline-flex items-center font-medium text-primary-600  hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article> 

      {/* Article 2 */}
          <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md ">
            <div className="mb-4">
            <Image src={roadmap} className="w-full rounded-xl" alt='#'/>
            </div>
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  ">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Technology
                  </span>
                  <span className="text-sm">4 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Self-taught web development roadmap<a href="#"></a></h2>
              <p className="mb-5 font-light text-gray-500 "> Ready to embark on an exciting coding adventure? 🚀 Our self-taught web development roadmap is your trusty guide to conquering the world of coding by having relevant information at your fingertips. </p>
              <div className="flex justify-between items-center">
         
                  <a href="/blog/blog2" className="inline-flex items-center font-medium text-primary-600  hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article> 
                           

          
      {/* Article 3 */}
          <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md ">
            <div className="mb-4">
            <Image src={money} className="w-full rounded-xl" alt='#'/>
            </div>
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  ">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Finance
                  </span>
                  <span className="text-sm">9 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Finance tips I wish they taught in school<a href="#"></a></h2>
              <p className="mb-5 font-light text-gray-500 "> Let&apos;s face it, not all of us got the ultimate crash course in finances from our folks. But not to worry! In this blog, we&apos;re spilling the beans on 10 super useful finance tips to start taking control of your finances and future. </p>
              <div className="flex justify-between items-center">
             
                  <a href="/blog/blog4" className="inline-flex items-center font-medium text-primary-600  hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article> 

      </div>  
  </div>
</section>
    </div>
  );
}

export default Blog;
