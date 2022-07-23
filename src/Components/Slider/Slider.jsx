import React from "react";
import Carousel,{ slidesToShowPlugin, slidesToScrollPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>

      <Carousel
            plugins={[
                'arrows',
                'infinite',
                'centered',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 2,
                    },
                },   
                {
                    resolve: slidesToScrollPlugin,
                    options: {
                    numberOfSlides: 2,
                    },
                },      
            ]}
            slidesPerPage={4}
            animationSpeed={200}
            offset={50}
            itemWidth={400}
            slides={Slides}
            breakpoints={{
              960:{
                plugins: [
                  
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1
                    }
                  },
                ],
                itemWidth:250,
              }
            }}
        />
    </div>
  );
};

export default Slider
