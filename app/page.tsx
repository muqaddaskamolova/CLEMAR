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
// import SearchProducts from '../components/SearchProducts';

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
        {/* <SearchProducts /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
