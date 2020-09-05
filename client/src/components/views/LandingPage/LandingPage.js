import React from "react";
import "./LandingPage.css";
//import Carousel from './Carousel/Carousel';
import CardsApp from './Cards/CardsApp';

function LandingPage() {
  return (
    <div className='app'>
      {/*<Carousel />*/}
      <CardsApp />
    </div>
  );
}

export default LandingPage;
