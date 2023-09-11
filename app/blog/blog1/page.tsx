import React from 'react';
import Image from 'next/image';
import fruit from '../../../public/fruit.jpg'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <div className=''>
      <Navbar />
        <div className="flex  justify-center ">
          <Image src={fruit} priority className="max-w-2xl " alt='#'/>
        </div>
        <div className='flex justify-center font-semibold lg:text-4xl text-3xl  p-6 items-center'>
          <div>
            <h1>Antioxidants: natural healers of the body</h1>
          </div>
        </div>
        <div className='flex  justify-center  p-6 flex-col'>
          
        <p className="text-lg mb-4 leading-8 md:leading-10 ">
        You might have heard the term <span className='font-semibold'>antioxidant</span>, but do you know what they do? Think of them as your body&apos;s tiny superheroes, working tirelessly to protect your cells from damage, heart disease, cancer, and other diseases. 
        </p>
        <p className="text-lg mb-4 leading-8 md:leading-10 ">
        In simple terms, antioxidants are like shields that defend your body against harmful molecules called free radicals. These free radicals can wreak havoc inside you, potentially leading to various health issues. Antioxidants step in to neutralize these troublemakers, helping to maintain your well-being. By incorporating these antioxidant-rich foods into your diet, you&apos;re giving your body an extra dose of protection and support!
        </p>

        <h2 className='text-3xl  mb-8 mt-4'>Where can you find antioxidants? </h2>
        <h2 className='text-3xl animate-bounce mb-8'>🍇 🍈 🍉 🍊 🍋 🍌 🍍 🥭 🍎 🍏 </h2>
        <p className="text-lg mb-4 leading-8 md:leading-10 ">
          The best sources of antioxidants are plant-based foods, especially fruits and vegetables. Fruits offer a diverse spectrum of nutrients tailored specifically to your body&apos;s needs. Some of the top providers, blueberries and strawberries, are bursting with antioxidants that support your immune system. Along with these we&apos;ve found that mangoes and pineapples are rich in vitamins and enzymes that aid digestion.
        </p>
        <p className="text-lg mb-4 leading-8 md:leading-10 ">
            In need of some vitamin C? Citrus fruits like oranges and grapefruits can assist you with that, boosting collagen production for healthy skin.  Let&apos;s not forget the hydration powerhouses watermelons and cucumbers, which contribute to your daily water intake <span className="font-bold">(H302)</span>. Whether you&apos;re munching on apples for fiber or relishing the juicy goodness of peaches for their vitamins, each fruit variety brings its unique bouquet of benefits.
        </p>

        </div>
        
      <Footer />
    </div>
  );
}

export default page;
