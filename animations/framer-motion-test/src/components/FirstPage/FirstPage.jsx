import React from 'react'
import styles from './FirstPage.module.css'
import { Button } from '../Button.jsx/Button'
import { BsArrowDownCircle } from 'react-icons/bs'
import { motion } from 'framer-motion'

const FirstPage = () => {
  const animateLink = {
    start: { bottom: "2em" },
    mid: { bottom: "4em" },
    end: { bottom: "2em" },
  }
  return (
    <section className={styles.container_firstpage}>
        <h1>Título exemplo</h1>
        <div className={styles.btns}>
          <Button text='TB' />
          <Button text='BT' />
        </div>
        <div 
          className={styles.nextPart}
        >
          <a href="#">
            <BsArrowDownCircle/>
          </a>
        </div>
    </section>
  )
}

export {FirstPage}