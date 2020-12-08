import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
const HeaderSlider = () => {
    return (
        <div className="slider">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={img1} className="slide-img" />
                <img src={img2} className="slide-img" />
            </AliceCarousel>
        </div>
    )
}

export default HeaderSlider
