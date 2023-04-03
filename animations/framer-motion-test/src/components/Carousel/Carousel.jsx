import React from 'react'
import styles from './Carousel.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { DatasCarousel } from '../../data/carousel/datas'
import { CarouselAnimations } from '../../data/animations/CarouselAnimation';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <motion.div 
        className={styles.carousel}
        initial={CarouselAnimations.initial}
        whileInView={CarouselAnimations.whileInView}
        viewport={CarouselAnimations.viewport}
    >
        <Slider className={styles.slider} {...settings}>
            {DatasCarousel.map(data => (
                <div className={styles.item}>
                    <h1>{data.text}</h1>
                </div>

            ))}
        </Slider>
        
    </motion.div>
  )
}

export {Carousel}