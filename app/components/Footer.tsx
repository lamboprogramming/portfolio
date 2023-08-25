import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg'

const Footer = () => {
  return (
    <div>
      
<footer className="bg-white rounded-lg shadow  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <Image src={logo} className="h-8 mr-3 w-44" alt=" Logo" />
                
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Gillespie Holding Group</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  );
}

export default Footer;
