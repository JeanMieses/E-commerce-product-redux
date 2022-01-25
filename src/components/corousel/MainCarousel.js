import React, { useEffect, useRef } from 'react';
import classes from './Carousel.module.css';
import Carousel from './Carousel';

const MainCarousel = () => {
    const main = useRef();
    const thumbnail = useRef();
    const mainCorouselOptions = { height: '620px', autoplay: true, arrow: 'slider', rewind: true, width: 500, gap: '1rem', breakpoints: { 425: { height: '330px', width: '100%' }, 1582: {height: '480px',  width: '83%'} } };
    const thumbnailOptions = { rewind: false, arrows: false, fixedWidth: 70, fixedHeight: 90, gap: 30, rewind: true, pagination: false, cover: true, isNavigation: true, breakpoints: {1416: {fixedWidth: 45}} };

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