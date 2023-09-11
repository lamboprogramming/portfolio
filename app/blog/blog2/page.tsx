import React from 'react';
import Image from 'next/image';
import roadmap from '../../../public/roadmap.jpg'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <div className=''>
      <Navbar />
        <div className="flex  justify-center ">
          <Image src={roadmap} priority className="max-w-2xl " alt='#'/>
        </div>
        <div className='flex justify-center font-semibold lg:text-4xl text-3xl  p-6 items-center'>
          <div>
            <h1>Self-taught web development roadmap</h1>
          </div>
        </div>
        <div className='flex  justify-center  p-6 flex-col'>
          
        <p className="text-lg mb-4 leading-8 md:leading-10 ">
        Embarking on the journey of becoming software developer can feel both exciting and overwhelming. The internet provides a treasure trove of resources, but the challenge lies in navigating through the myriad of information. To begin, focus on trusted learning platforms, community-driven forums, and online tutorials from reputable sources.
        </p>
        <p className="text-lg mb-4 leading-8 md:leading-10 ">
        As you continue to delve into the world of web development, remember that your journey is not solely about lines of code, but about problem-solving, creativity, and collaboration. Effective communication, adaptability, and the ability to work well in a team are invaluable assets in this industry. 
        </p>
        <p className="text-lg mb-4 leading-8 md:leading-10 ">
          Software development is an evolving landscape, and maintaining an open attitude towards continuous learning will help you not only adapt to new technologies but thrive in an ever-changing environment. Embrace a growth mindset and have the belief that your abilities can be developed through dedication and hard work.
        </p>

        <h2 className='text-3xl  mb-8 mt-4 '>The roadmap to success 📄</h2>
      {/* List 1 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10 list-disc p-2">
          <h1 className='font-bold text-blue-500'>Phase 1: Fundamentals and Basics</h1>
          <li><span className='font-semibold'>Introduction to Programming:</span> Begin with a beginner-friendly language like Python or JavaScript. Understand variables, data types, loops, and conditional statements.</li>
          <li> <span className='font-semibold'>HTML & CSS:</span> Dive into web development with HTML for structuring content and CSS for styling. Create simple web pages to grasp the basics.</li>
        </ul>

        {/* List 2 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10 list-disc p-2">
        <h1 className='font-bold text-blue-500'>Phase 2: Core Web Development</h1>
          <li> <span className='font-semibold'>JavaScript:</span> Deepen your understanding of JavaScript. Learn about functions, objects, arrays, and DOM manipulation for dynamic web interactions.</li>
          <li> <span className='font-semibold'>Version Control:</span> Familiarize yourself with Git and platforms like GitHub. Learn how to track changes and collaborate with others using version control.</li>
          <li> <span className='font-semibold'>Responsive Design:</span> Study CSS frameworks like Bootstrap and understand media queries to create websites that adapt to various screen sizes.</li>
        </ul>

        {/* List 3 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10 list-disc p-2">
        <h1 className='font-bold text-blue-500'>Phase 3: Back-End Development</h1>
          <li> <span className='font-semibold'>Introduction to Back-End:</span> Learn about back-end technologies like Node.js and Express.js. Build a basic server and understand routing.</li>
          <li> <span className='font-semibold'>Databases:</span> Explore databases such as MySQL or MongoDB. Learn how to create, read, update, and delete data.</li>
          <li> <span className='font-semibold'>APIs:</span> Understand how to consume and create APIs. Experiment with sending and receiving data from external sources.</li>
        </ul>

        {/* List 4 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10 list-disc p-2">
        <h1 className='font-bold text-blue-500'>Phase 4: Full-Stack Development</h1>
          <li> <span className='font-semibold'>MERN/MEAN Stack:</span> Deepen your full-stack skills with popular stacks like MERN (MongoDB, Express.js, React, Node.js) or MEAN (MongoDB, Express.js, Angular, Node.js).</li>
          <li> <span className='font-semibold'>Authentication & Security:</span> Learn about user authentication, encryption, and secure coding practices to protect your applications.</li>
          <li> <span className='font-semibold'>Deployment:</span> Explore how to deploy your web applications to platforms like Heroku, Netlify, or AWS.</li>
        </ul>
        {/* List 5 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10 list-disc p-2">
        <h1 className='font-bold text-blue-500'>Phase 5: Intermediate Concepts</h1>
          <li> <span className='font-semibold'>Advanced Front-End Techniques:</span> Delve into advanced CSS concepts, front-end frameworks (React, Angular, or Vue.js), and state management.</li>
          <li> <span className='font-semibold'>Testing:</span> Learn about testing frameworks (Jest, Mocha, etc.) and write unit and integration tests for your code.</li>
          <li> <span className='font-semibold'>Performance Optimization:</span> Study techniques to optimize your code, minimize loading times, and improve user experience.</li>
        </ul>
        {/* List 6 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10 list-disc p-2">
        <h1 className='font-bold text-blue-500'>Phase 6: Building Projects</h1>
          <li> <span className='font-semibold'>Personal Projects: </span>Start building larger and more complex projects. Apply what you&apos;ve learned to solve real-world problems and showcase your skills.</li>
          <li> <span className='font-semibold'>Collaboration:</span> Collaborate on open-source projects or work with others to simulate a team environment and learn to manage codebases collectively.</li>
        </ul>
        {/* List 7 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10 list-disc p-2">
        <h1 className='font-bold text-blue-500'>Phase 7: Continuous Learning</h1>
          <li> <span className='font-semibold'>New Technologies:</span> Stay up-to-date with the latest technologies and trends in the web development field.</li>
          <li> <span className='font-semibold'>Networking:</span> Attend meetups, conferences, and online forums to connect with other developers and learn from their experiences.</li>
        </ul>


        <p className="text-lg mb-4 leading-8 md:leading-10 ">
        Remember, consistency and practice are key. It&apos;s okay to face challenges and setbacks – they&apos;re part of the learning process. Break down your goals into smaller tasks and celebrate your progress along the way. Keep your growth mindset intact and enjoy the rewarding journey of becoming an intermediate-level coder in the exciting world of web development!
        </p>

        </div>
        
      <Footer />
    </div>
  );
}

export default page;
