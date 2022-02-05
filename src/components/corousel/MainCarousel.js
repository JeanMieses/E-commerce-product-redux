import React, { useEffect, useRef } from 'react';
import classes from './Carousel.module.css';
import Carousel from './Carousel';

const MainCarousel = () => {
    const main = useRef();
    const thumbnail = useRef();

    const mainCorouselOptions = {
        height: '620px',
        width: 600, 
        autoplay: true,
        arrow: 'slider',
        rewind: true,
        gap: '1rem',
        breakpoints: {
            425: { height: '330px', width: '100%' },
            1582: { height: '550px', width: '550px' }
        }
    };

    const thumbnailOptions = {
        arrows: false,
        fixedWidth: 70,
        fixedHeight: 90,
        gap: 30,
        rewind: true,
        pagination: false,
        cover: true,
        isNavigation: true,
        breakpoints: {
            1416: { fixedWidth: 60 },
            1184: { fixedWidth: 55 }
        }
    };

    useEffect(() => {
        main.current.sync(thumbnail.current.splide);
    }, [main, thumbnail])

    return (
        <div className={classes.carousel}>
            <Carousel ref={(slider) => (main.current = slider)} configurations={mainCorouselOptions} />
            <div className={classes.hide}>
                <Carousel ref={(slider) => (thumbnail.current = slider)} configurations={thumbnailOptions} />
            </div>
        </div>
    )
}

export default MainCarousel;