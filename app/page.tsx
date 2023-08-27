import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PicGrid from './components/PicGrid'
import Jumbotron from './components/Jumbotron'
import Pricing from './components/Pricing'

import Projects from './components/Projects'


export default function Home() {
  return (
    <>
    <Navbar />
    <Jumbotron />
    <Projects />
    <PicGrid /> 
    <h1 className="flex mb-8 justify-center text-3xl sm:text-4xl font-extrabold ">Services that we offer</h1>
    <Pricing />
    
    <Footer />
    </>
  )
}
