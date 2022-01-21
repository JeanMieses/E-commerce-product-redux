import React, { useEffect, useRef, useState } from 'react';
import classes from './Carousel.module.css';
import Carousel from './Carousel';

const MainCarousel = () => {
    const [showThumbnail, setShowThumbnail] = useState(true);
    const main = useRef();
    const thumbnail = useRef();
    const mainCorouselOptions = { height: '100', autoplay: true, arrow: 'slider', rewind: true, width: 500, gap: '1rem' };
    const thumbnailOptions = { arrows: false, fixedWidth: 100, fixedHeight: 60, gap: 10, rewind: true, pagination: false, cover: true, isNavigation: true };
    
     window.addEventListener('resize', () => {
        if(window.innerWidth < 600) {
            setShowThumbnail(false);

        } else if (window.innerWidth > 600) {
            setShowThumbnail(true);
            main.current.sync(thumbnail.current.splide);
        }
     })

    useEffect(() => {
        main.current.sync(thumbnail.current.splide);
    }, [main, thumbnail])

    return (<div className={classes.carousel}>
        <Carousel ref={(slider) => (main.current = slider)} configurations={mainCorouselOptions} />
        {showThumbnail && <Carousel ref={(slider) => (thumbnail.current = slider)} configurations={thumbnailOptions} />}
    </div>
    )
}


export default MainCarousel;