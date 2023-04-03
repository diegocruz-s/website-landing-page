import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import { motion } from 'framer-motion'
import { CardAnimations } from '../../data/animations/CardAnimations'

const Card = ({ card }) => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidthScreen = () => {
      setWidthScreen(window.innerWidth);
      console.log(widthScreen)
    };
    window.addEventListener("resize", updateWidthScreen);
    return () => window.removeEventListener("resize", updateWidthScreen);
  }, []);

  return (
      <motion.div 
        className={styles.testElement}
        initial={ card.direction === 'left' ? 
          CardAnimations.moveCard.offScreenLeft 
          : CardAnimations.moveCard.offScreenRight
        }
        whileInView={CardAnimations.moveCard.onScreen}
        viewport={CardAnimations.moveCard.viewport}

      >
          {widthScreen > 800 ? (
            <>
              { card.direction === 'left' && (
                <img src={card.img} alt="" />
              )}
              <div className={styles.contentElement}>
                <div className={styles.contentText}>
                  <h2>{card.title}</h2>
                  <p>{card.direction}</p>
                  <p>{card.text}</p>
                </div>
                <button>{card.textButton}</button>
              </div>

              { card.direction === 'right' && (
                <img src={card.img} alt="" />
              )}
            </>
          ) : (
            <>
              <img src={card.img} alt="" />
              <div className={styles.contentElement}>
                  <div className={styles.contentText}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>{card.direction}</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, laudantium reprehenderit ipsa dolor consequatur ipsum obcaecati illum sed ea quam neque eveniet blanditiis omnis, eius tenetur nostrum expedita facilis.
                    </p>
                  </div>
                  <button>Text button </button>
              </div>
            </>
          )}
          

      </motion.div>
    
  )
}

export {Card}