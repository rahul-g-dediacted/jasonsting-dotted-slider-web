
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

export default function SlickSlider (){

  const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} autoplay={true} />
      }
    };

    return (<Slider {...settings}>
      <div>
      <img src="https://picsum.photos/800/400?random=1" alt="slide-1" />
      </div>
      <div>
      <img src="https://picsum.photos/800/400?random=2" alt="slide-1" />
      </div>
      <div>
      <img src="https://picsum.photos/800/400?random=1" alt="slide-1" />
      </div>
      
    </Slider>)
  }
