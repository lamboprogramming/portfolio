'use client'
import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef(null);

    

    const sendEmail = (e: any) => {
        e.preventDefault();
      if (form.current) {
        emailjs.sendForm('service_ol21stm', 'template_ogbwug8',  form.current, '3R0bhVy61UmW0fUQL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

      }
      };

  return (
    <>
    <Navbar/>
      <header className="text-center mx-auto mb-4 lg:px-20 ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-normal mb-2 font-bold text-black pt-4">Contact us
            </h2>
           
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2 md:text-2xl px-4">Let&apos;s work together and bring your idea to life
            </p>
        </header>

      {/* form */}
      <div className='p-8' >

      <form ref={form} onSubmit={sendEmail}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label   className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Name</label>
            <input type="text" name="from_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="Jane Doe" required/>
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Email address</label>
            <input type="email" id="email" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="j.doe@gmail.com" required/>
        </div>

        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Company/Organization</label>
            <input type="text" id="company" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="Company (optional)" />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Phone number</label>
            <input type="tel"name="message" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="123-456-6789"/>
        </div>
    

    </div>
    
    <div className="mb-6">
        <label htmlFor="cleaning_service" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Pricing package</label>
        <select   id="cleaning_service" name="message" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" required>
            <option value="" disabled>Select option</option>
            <option value="basic package">Basic package </option>
            <option value="standard package">Standard package</option>
            <option value="premium package">Premium package</option>
        </select>
    </div>

   
    <div className="mb-6">
    <label htmlFor="comments" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Additional Comments or Requests</label>
    <textarea  name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" rows={4} placeholder="Feel free to share any specific requirements or preferences here."></textarea>
</div>


    <button type="submit" value="Send" className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-200  font-semibold rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center ">Submit</button>
      </form>

      </div>
    <Footer />
    
    </>
  );
}

export default Contact;