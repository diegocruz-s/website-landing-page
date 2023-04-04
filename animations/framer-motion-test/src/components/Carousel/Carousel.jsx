import React from 'react'
import styles from './Carousel.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { DatasCarousel } from '../../data/carousel/datas'
import { CarouselAnimations } from '../../data/animations/CarouselAnimation';

const Carousel = ({ widthScreen }) => {
    const settings = {
        className: 'totalCarousel',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: (widthScreen > 1200) ? 4 : (widthScreen > 800) ? 3 : (widthScreen > 500) ? 2 : 1,
        slidesToScroll: 1
    }
  return (
    <motion.div 
        className={styles.carousel}
        initial={CarouselAnimations.initial}
        whileInView={CarouselAnimations.whileInView}
        viewport={CarouselAnimations.viewport}
    >
        <h2>Carousel</h2>
        <Slider className={styles.slider} {...settings}>
            {DatasCarousel.map(data => (
                <div className={styles.item}>
                    <div className={styles.slideCarousel}>
                        <img src={data.img} alt="" />
                        <div className={styles.text}>
                            <h3>{data.text}</h3>
                        </div>
                    </div>
                    
                </div>

            ))}
        </Slider>
        
    </motion.div>
  )
}

export {Carousel}