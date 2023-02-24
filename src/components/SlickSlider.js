
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import "../SlickSlider.css"
import Imgtree from '../images/tree.jpg'
import Imgcastl from '../images/castle.jpg'
import Imgriver from '../images/river.jpg'


export default function SlickSlider (){

  const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} autoplay={true} />
      }
    };

    return (
      
    <Slider {...settings} style={{height:'50px'}}>
      <div>
      <img className='Slideimg' src={Imgtree} alt="slide-1" />
      </div>
      <div>
      <img className='Slideimg' src={Imgcastl} alt="slide-1" />
      </div>
      <div>
      <img className='Slideimg' src={Imgriver} alt="slide-1" />
      </div>
      
    </Slider>
  
    )
  }
