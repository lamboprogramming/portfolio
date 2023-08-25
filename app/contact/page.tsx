import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const page = () => {
  return (
    <>
    <Navbar />
    <h2 className="mb-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-gray-900 py-4 ">Contact Us</h2>
    <div className=' p-8'>
     
      {/* form */}
      <form encType="multipart/form-data">
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="Jane Doe" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Email address</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="j.doe@gmail.com" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Location</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="City / State" required/>
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Company/Organization</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="Company (optional)" required/>
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="123-456-6789" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
            <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Service due date</label>
          <div className="relative ">
    
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg className="w-6 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input  type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Select date" />
    </div>
    </div>

    </div>





    
    <div className="mb-6">
        <label htmlFor="cleaning_service" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Priority/Urgency level</label>
        <select id="cleaning_service" name="cleaning_service" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" required>
            <option value="" disabled>Select option</option>
            <option value="standard">Low: General inquiries, non-urgent matters.</option>
            <option value="deep">Normal: Standard inquiries, or requests to be addressed in a reasonable time frame.</option>
            <option value="move_in_out">High: Urgent matters that require attention within the next business day.</option>
            <option value="office">Critical: Extremely urgent matters that demand immediate attention.</option>
        </select>
    </div>
    <div className="mb-6">
    <label htmlFor="attachments" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Attach File</label>
    <input type="file" id="attachments" name="attachments" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" />
</div>
   
    <div className="mb-6">
        <label htmlFor="bedrooms" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">How did you hear about us?</label>
        <select id="bedrooms" name="bedrooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" required>
            <option value="" disabled>Select option</option>
            <option value="0">Client referral</option>
            <option value="1">Social media</option>
            <option value="2">Search engine</option>
            <option value="3">Other</option>
           
        </select>
    </div>
   
    <div className="mb-6">
    <label htmlFor="comments" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Additional Comments or Requests</label>
    <textarea id="comments" name="comments"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" rows={4} placeholder="Feel free to share any specific requirements or preferences here."></textarea>
</div>

    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 d " required/>
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 sm:text-lg ">I agree with the <a href="#" className="text-gray-700 hover:underline ">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-gray-700 bg-slate-100 hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-lg  w-full sm:w-auto px-8 py-2.5 text-center ">Submit</button>
      </form>





    </div>
    
    <Footer />
    
    </>
  );
}

export default page;