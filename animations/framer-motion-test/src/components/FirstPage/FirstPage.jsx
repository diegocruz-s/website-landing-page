import React from 'react'
import styles from './FirstPage.module.css'
import { Button } from '../Button.jsx/Button'
import { BsArrowDownCircle } from 'react-icons/bs'
import { motion } from 'framer-motion'

const FirstPage = () => {
  return (
    <section className={styles.container_firstpage}>
        <h1>Título exemplo</h1>
        <div className={styles.btns}>
          <Button text='TB' />
          <Button text='BT' inverse={true} />
        </div>
        <div 
          className={styles.nextPart}
        >
          <a href="#abc">
            <BsArrowDownCircle/>
          </a>
        </div>
    </section>
  )
}

export {FirstPage}