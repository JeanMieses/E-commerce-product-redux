import React from 'react';
import { Splide, SplideSlide, } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Carousel = React.forwardRef((props, ref) => {
    return (
        <Splide ref={ref} options={props.configurations}>
            <SplideSlide>
                <img src="https://femina.wwmindia.com/thumb/content/2021/apr/nature-thumb1619426250.jpg?width=1200&height=900" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://thumbor.thedailymeal.com/qIHZKzSilpO8HDBpAy6oz93QpnU=//https://www.theactivetimes.com/sites/default/files/2019/07/10/places_to_visit_lifetime_hero.jpg" alt="Image 2" />
            </SplideSlide>
        </Splide>)

})

export default Carousel;