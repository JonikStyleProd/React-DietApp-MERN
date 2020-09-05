import React from "react";
import "antd/dist/antd.css";
import "./Carousel.css";
import { Carousel } from "antd";
import c1 from "../../../../Images/Carousel-Images/c1.jpg";
import c2 from "../../../../Images/Carousel-Images/c2.jpg";
import c3 from "../../../../Images/Carousel-Images/c3.jpg";
import c4 from "../../../../Images/Carousel-Images/c4.jpg";
import c5 from "../../../../Images/Carousel-Images/c5.jpg";
import c6 from "../../../../Images/Carousel-Images/c6.jpg";



function CarouselMine() {
  return (
    <div className='slider'>
      <Carousel autoplay>
        <div>
          <img src={c1} />
        </div>
        <div>
          <img src={c2} />
        </div>
        <div>
          <img src={c3} />
        </div>
        <div>
          <img src={c4} />
        </div>
        <div>
          <img src={c5} />
        </div>
        <div>
          <img src={c6} />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselMine;
