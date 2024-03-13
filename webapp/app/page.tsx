import Navbar from '@/components/UI/Navbar';
import Footer from '@/components/UI/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import AboutUs from '@/components/home/AboutUs';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <div className='grow bg-my-khaki-light'>
        <div>
          <Hero />
          <Features />
          <AboutUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
