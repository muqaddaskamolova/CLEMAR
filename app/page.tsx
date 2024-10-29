// pages/index.tsx
import Image from "next/image";
import Navbar from '../components/Navbar';
import NavLinks from '../components/Navlinks';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import BestProducts from "../components/BestProducts";
import Contact from "../components/ContactUs";
import Partners from "../components/Partners";
import Advantages from "../components/Advantages";
import AboutUs from "../components/About";
import FAQ from "../components/FAQ";
//import Link from 'next/link';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-10">
        <NavLinks />
        <Hero />
        <Categories />
        <BestProducts />
        <Advantages />
        <Partners />
        {/* Use Link for navigation */}
        <AboutUs/>
        <FAQ/>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
