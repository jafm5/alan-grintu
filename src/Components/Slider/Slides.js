import React from "react";
import img1 from "../../media/img-slide/img1.jpg";
import img2 from "../../media/img-slide/img2.jpg";
import img3 from "../../media/img-slide/img3.jpg";
import img4 from "../../media/img-slide/img4.jpg";
import './Slider.css';

const slidesInfo =[
    {
        src:img1,
        alt:"proyecto principal",
        desc:"Proyecto Principal"
    },
    {
        src:img2,
        alt:"proyecto principal2",
        desc:"Proyecto Principal2"
    },
    {
        src:img3,
        alt:"proyecto principal3",
        desc:"Proyecto Principal3"
    },
    {
        src:img4,
        alt:"proyecto principal4",
        desc:"Proyecto Principal4"
    }
]

const slides =slidesInfo.map(slide=>(
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}></img>
        <div className="slide-desc">
            <span>{slide.desc}</span>

        </div>
    </div>
))

export default slides;