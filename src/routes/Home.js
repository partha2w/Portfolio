
import React from 'react'
import Footer from '../components/Footer';
import Heroimg from '../components/Heroimg';
import Navbar from '../components/Navbar';
import AboutContent from '../components/AboutContent';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default Home;
