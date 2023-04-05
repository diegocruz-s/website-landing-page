import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import { motion } from 'framer-motion'
import { CardAnimations } from '../../data/animations/CardAnimations'
import { Button } from '../Button.jsx/Button'

const Card = ({ card, widthScreen, setWidthScreen }) => {
  
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
                <h2>{card.title}</h2>
                <div className={styles.contentText}>

                  <p>{card.text}</p>
                </div>
                <Button text={card.textButton} inverse={card.inverse} />
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
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, laudantium reprehenderit ipsa dolor consequatur ipsum obcaecati illum sed ea quam neque eveniet blanditiis omnis, eius tenetur nostrum expedita facilis.
                    </p>
                  </div>
                  <Button text={card.textButton} inverse={card.inverse} />
              </div>

            </>
          )}
          


      </motion.div>
      
    
  )
}

export {Card}