import React from 'react';
import Image from 'next/image';
import roadmap from '../../../public/money.jpg'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const page = () => {
  return (
    <div>
    
      <Navbar />
        <div className="flex  justify-center ">
          <Image src={roadmap} priority className="max-w-2xl " alt='#'/>
        </div>
      {/* Content */}
      <div className='flex font-semibold lg:text-5xl md:text-4xl text-3xl mt-4 p-4 lg:justify-center lg:mb-8 '>
            <h1>Finance tips I wish they taught in school</h1>
        </div>

      <div className='flex flex-col '>
        {/* first col */}
        <div className='flex  p-6 flex-col max-w-full '>
          
        <p className="text-lg mb-4 leading-8 md:leading-10 ">
        Hey there, goal-getter! Ever heard the saying, &quot;Rome wasn&apos;t built in a day&quot;? Well, it holds true for achieving long-term success too.The secret lies in the magic of consistency. It&apos;s like planting seeds in a garden - you water them, nurture them, and eventually, they grow into flourishing plants. Similarly, in our pursuit of success, it&apos;s the small, consistent actions that lay the foundation for something truly extraordinary. 
        </p>
        <p className="text-lg mb-4 leading-8 md:leading-10 ">
        Ever heard of the compound effect? It&apos;s like a snowball rolling down a hill, gathering momentum and size. In the realm of success, this means that consistent actions, no matter how small, accumulate over time and lead to astounding results. Take, for example, the habit of reading a few pages of a book every day. Initially, it might not seem like much, but over months and years, the knowledge gained from those pages adds up significantly. This principle applies to various aspects of life - from personal development to career growth. 
        </p>
        <p className="text-lg leading-8 md:leading-10 ">
        Below are some helpful tips to get the wheels in your brain started. The truth is that no one is coming to do the work for us. It is important that you take steps to first educate yourself, learn to get yourself out of debt, save money, invest, and get to the point where you&apos;re finding vehicles to create passive income and improve the quality of you and your family&apos;s life. Now doesn&apos;t that sound delightful? 
        </p>


        </div>
        {/* second col */}
        <div className='flex p-6 flex-col container max-w-full'>
          

        <h2 className='text-3xl  mb-8 mt-4 '>Helpful tools and tips 📄</h2>
      {/* List 1 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Create a Budget</h1>
          <li>Allocate specific amounts for necessities like housing, groceries, transportation, and discretionary spending. This will give you a clear overview of where your money is going.</li>
        </ul>
      {/* List 2 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Set Clear Financial Goals</h1>
          <li>Define short-term and long-term financial goals. Whether it&apos;s saving for a vacation, an emergency fund, or retirement, having clear objectives will help you stay motivated.</li>
        </ul>
      {/* List 3 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Prioritize Saving</h1>
          <li>Treat savings as a non-negotiable expense. Set aside a portion of your income as soon as you receive it. You&apos;ll be less likely to spend it if it&apos;s already earmarked for savings.</li>
        </ul>
      {/* List 4 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Cut Unnecessary Expenses</h1>
          <li>Review your expenses and identify areas where you can cut back. This could mean cooking at home more often, canceling unused subscriptions, or finding cost-effective alternatives.</li>
        </ul>
      {/* List 5 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Automate Savings</h1>
          <li>Set up automatic transfers to your savings account. This ensures that a portion of your income is saved before you have the chance to spend it.</li>
        </ul>
      {/* List 6 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Shop Smart</h1>
          <li>Look for deals, consider buying generic brands for a bit. Also, consider buying in bulk for items you use frequently, as it&apos;s often more cost-effective in the long run.</li>
        </ul>
      {/* List 7 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Limit Credit Card Use</h1>
          <li> While credit cards offer convenience, they can also lead to overspending. Try to use cash or a debit card for daily expenses, and reserve credit cards for emergencies or planned, budgeted purchases.</li>
        </ul>
      {/* List 8 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Track Your Expenses</h1>
          <li> Keep a detailed record of every expense, no matter how small. This will help you identify spending patterns and areas where you can cut back.</li>
        </ul>
      {/* List 9 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Review and Adjust Your Budget Regularly</h1>
          <li> Life circumstances change, so it&apos;s important to revisit your budget periodically. Make adjustments as needed to reflect any changes in income, expenses, or financial and investing goals.</li>
        </ul>
      {/* List 10 */}
        <ul className="text-lg mb-4 leading-8 md:leading-10  p-2">
          <h1 className='font-bold text-blue-500'>Build an Emergency Fund</h1>
          <li>Aim to have three to six months worth of living expenses saved in case of unexpected financial setbacks. This fund provides a safety net and prevents you from dipping into long-term savings for emergencies.</li>
        </ul>



        <p className="text-lg mb-4 leading-8 md:leading-10 ">
        Remember, consistency and practice are key. It&apos;s okay to face challenges and setbacks – they&apos;re part of the learning process. Break down your goals into smaller tasks and celebrate your progress along the way. Keep your growth mindset intact and enjoy the rewarding journey of becoming an intermediate-level coder in the exciting world of web development!
        </p>

        </div>
      </div>
        
        
      <Footer />
    </div>
    
  );
}

export default page;
