import React from 'react';
import { Splide, SplideSlide, } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import imageproduct1 from './../../assets/image-product-1.jpg';
import imageproduct2 from './../../assets/image-product-2.jpg';
import imageproduct3 from './../../assets/image-product-3.jpg';
import imageproduct4 from './../../assets/image-product-4.jpg';

const Carousel = React.forwardRef((props, ref) => {
    return (
        <Splide ref={ref} options={props.configurations}>
            <SplideSlide>
                <img src={imageproduct1} alt="Product-1" />
            </SplideSlide>
            <SplideSlide>
                <img src={imageproduct2} alt="Product-2" />
            </SplideSlide>
            <SplideSlide>
                <img src={imageproduct3} alt="Product-3" />
            </SplideSlide>
            <SplideSlide>
                <img src={imageproduct4} alt="Product-4" />
            </SplideSlide>
        </Splide>)
})

export default Carousel;