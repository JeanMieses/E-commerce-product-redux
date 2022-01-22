import React, { useEffect, useRef, useState } from 'react';
import classes from './Carousel.module.css';
import Carousel from './Carousel';

const MainCarousel = () => {
    const [showThumbnail, setShowThumbnail] = useState(true);
    const main = useRef();
    const thumbnail = useRef();
    const mainCorouselOptions = { height: '620px', autoplay: true, arrow: 'slider', rewind: true, width: 700, gap: '1rem', breakpoints: {425: {height: '330px',  width: '100%'}}};
    const thumbnailOptions = { arrows: false, fixedWidth: 80, fixedHeight: 100, gap: 30, rewind: true, pagination: false, cover: true, isNavigation: true };
    
     window.addEventListener('resize', () => {
        if(window.innerWidth < 1024) {
            setShowThumbnail(false);

        } else if (window.innerWidth > 1024) {
            setShowThumbnail(true);
            main.current.sync(thumbnail.current.splide);
        }
     })

    useEffect(() => {
        main.current.sync(thumbnail.current.splide);
    }, [main, thumbnail])

    return (<div className={classes.carousel}>
        <Carousel ref={(slider) => (main.current = slider)} configurations={mainCorouselOptions} />
        <br/>
        {showThumbnail && <Carousel ref={(slider) => (thumbnail.current = slider)} configurations={thumbnailOptions} />}
    </div>
    )
}


export default MainCarousel;