import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import TopNav from './Components/TopNav';
import PopcornSection from './Components/Products/PopcornSection';
import AlmondSection from './Components/Products/AlmondSection';
import ChipsSection from './Components/Products/ChipsSection';
import AllProducts from './Components/AllProducts';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <TopNav/>
      <PopcornSection/>
      <AlmondSection/>
      <ChipsSection/>
      <AllProducts/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
