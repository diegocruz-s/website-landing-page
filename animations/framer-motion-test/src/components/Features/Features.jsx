import React, { useState } from 'react'
import styles from './Features.module.css'
import { datasFeatures } from '../../data/features/datas'
import { motion } from 'framer-motion'

const Features = () => {
  const [activeText, setActiveText] = useState({ id: datasFeatures[0].id, title: datasFeatures[0].title, text: datasFeatures[0].text })
  console.log(activeText)
  return (
    <div id="features" className={styles.features}>
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
        viewport={{ once: true }}
      >Features</motion.h2>
      <motion.div className={styles.contentFeatures}>
        <div className={styles.allFeatures}>
            {datasFeatures.map(data => (
              <motion.div 
                className={styles.feature}
                onClick={() => setActiveText({ id: data.id, title: data.title, text: data.text })}  
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                viewport={{ once: true }}
              >
                <div 
                  className={styles.border}
                  style={activeText.id === data.id ? { opacity: 1, transform: "rotate(90deg)" } : {}}
                />
                {data.icon}
              </motion.div>
            ))}
        </div>
        <div className={styles.text}
          // initial={{ opacity: 0, y: 300 }}
          // animate={{ y: 0, opacity: 1, transition: { duration: .8 } }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: .8 } }}
            viewport={{ once: true }}
          >
            {activeText.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: .3, duration: .8 } }}
            viewport={{ once: true }}
          >
              {activeText.text}
          </motion.p>
        </div>
      </motion.div>
      
      
    </div>
  )
}

export {
    Features
}