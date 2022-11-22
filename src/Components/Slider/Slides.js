import React from "react";
import img from "../../media/img-slide/Captura de pantalla 2022-10-12 191834.png"
import './Slider.css';

const slidesInfo =[
    {
        src:
          img,
        alt: "Project 1",
        desc: "Project 1",
        url: "https://charming-puffpuff-5debb1.netlify.app/"
      },
      {
        src:
          "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: "Project 2",
        desc: "Project 2",
        url: "https://charming-cobbler-6ab4a4.netlify.app/"
      },
      {
        src:
          "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "Project 3",
        desc: "Project 3",
        url: "https://charming-cobbler-6ab4a4.netlify.app/"
      },
]

const slides =slidesInfo.map(slide=>(
    <div className="slide-container">
       <a href={slide.url} target="_blank"rel="noreferrer">        
       <img src={slide.src} alt={slide.alt}></img>
       </a>

    
        <div className="slide-desc">
   <a href={slide.url}target="_blank"rel="noreferrer" >
            <span>{slide.desc}</span>
            </a>
        </div>
    </div>
))

export default slides;