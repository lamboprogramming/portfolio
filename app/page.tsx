import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PicGrid from './components/PicGrid'
import Jumbotron from './components/Jumbotron'
import Pricing from './components/Pricing'


import Projects from './components/Projects'
import PriceCard from './components/PriceCard'


export default function Home() {
  return (
    <>
    <Navbar />
    <Jumbotron />
    <Projects />
    <PicGrid /> 
    <PriceCard />
    <Pricing />
    <Footer />
    </>
  )
}
