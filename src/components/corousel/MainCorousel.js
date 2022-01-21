import { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide, } from '@splidejs/react-splide';
import classes from './Corousel.module.css';
import '@splidejs/splide/dist/css/splide.min.css';

const MainCorousel = () => {
    const main = useRef();
    const thumbnail = useRef();
    const mainCorouselOptions = { height: '100', autoplay: true, arrow: 'slider', rewind: true, width: 500, gap: '1rem'};
    const thumbnailOptions = { arrows: false, fixedWidth: 100, fixedHeight: 60, gap: 10, rewind: true, pagination: false, cover: true, isNavigation: true };

    useEffect(() => {
        main.current.sync(thumbnail.current.splide);
    }, [main, thumbnail])


  
    return (<div className={classes.corousel}>
        <Splide ref={(slider) => (main.current = slider)} options={mainCorouselOptions}>
            <SplideSlide>
                <img src="https://femina.wwmindia.com/thumb/content/2021/apr/nature-thumb1619426250.jpg?width=1200&height=900" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://thumbor.thedailymeal.com/qIHZKzSilpO8HDBpAy6oz93QpnU=//https://www.theactivetimes.com/sites/default/files/2019/07/10/places_to_visit_lifetime_hero.jpg" alt="Image 2" />
            </SplideSlide>
        </Splide>


        <Splide ref={(slider) => (thumbnail.current = slider)} options={thumbnailOptions}>
            <SplideSlide>
                <img src="https://femina.wwmindia.com/thumb/content/2021/apr/nature-thumb1619426250.jpg?width=1200&height=900" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://thumbor.thedailymeal.com/qIHZKzSilpO8HDBpAy6oz93QpnU=//https://www.theactivetimes.com/sites/default/files/2019/07/10/places_to_visit_lifetime_hero.jpg" alt="Image 2" />
            </SplideSlide>
        </Splide>
    </div>
    )
}


export default MainCorousel;





