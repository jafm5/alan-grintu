import React from 'react';
import './Slider.css';
import Carousel,{ slidesToShowPlugin, slidesToScrollPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from "./Slides.js";


export const Slider = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-title'>
            <h2>proyectos insignia</h2>
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
        />
    </div>
  )
}
