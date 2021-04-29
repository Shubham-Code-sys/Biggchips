import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import TopNav from './Components/TopNav';
import PopcornSection from './Components/Products/PopcornSection';
import AlmondSection from './Components/Products/AlmondSection';
import ChipsSection from './Components/Products/ChipsSection';

function App() {
  return (
    <>
      <TopNav/>
      <PopcornSection/>
      <AlmondSection/>
      <ChipsSection/>
    </>
  );
}

export default App;
