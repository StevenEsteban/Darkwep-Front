import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from '../category';
export default class Bannerslider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 8000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <Category />
                <Slider {...settings}>
                    <div className="owl-item">
                        <img src="img/banners/offer-1.jpg" alt="DarkwepBanner1" />
                    </div>
                    <div className="owl-item">
                        <img src="img/banners/offer-3.jpg" alt="DarkwepBanner3" />
                    </div>
                    <div className="owl-item">
                        <img src="img/banners/offer-2.jpg" alt="DarkwepBanner2" />
                    </div>
                    
                </Slider>
            </div>
        )
    }
}
