import styles from './Navbar.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavbarAnimations } from '../../data/animations/NavbarAnimations'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hoverBurguer, setHoverBurguer] = useState(false)

    const [datasMenu, setDatasMenu] = useState([
        { dataAnimate: 'itemOne', text: 'Home', to: 'firstPage' }, 
        { dataAnimate: 'itemTwo', text: 'Features', to: 'features' }, 
        { dataAnimate: 'itemThree', text: 'Cards', to: 'cards' }, 
        { dataAnimate: 'itemFour', text: 'Carousel', to: 'carousel' }
    ])

  return (
    <nav className={styles.navbar}>
        <div className={styles.header}>
            <div className={styles.logo}>
                <p>Logo</p>
            </div>
            <motion.div 
                className={styles.openMenu} 
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                <motion.button 
                    initial={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    animate={isOpen ? { opacity: 0 } : { opacity: 1, transition: { duration: 1.5 } }}
                    onMouseEnter={() => setHoverBurguer(true)}
                    onMouseLeave={() => setHoverBurguer(false)}
                >
                    { !isOpen && (
                        <>
                            <div 
                                className={styles.burguer}
                            ></div>
                            <div 
                                style={ hoverBurguer ? { width: "2em" } : { width: "1.5em" }}
                                className={styles.burguer}
                            ></div>
                        </>
                    ) }
                    
                </motion.button>
                
            </motion.div>
        </div>

        

        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className={styles.menu_container}
                    initial={NavbarAnimations.menuContainer.initial}
                    animate={NavbarAnimations.menuContainer.animate}
                    transition={NavbarAnimations.menuContainer.transition}
                    variants={NavbarAnimations.menuContainer.exit}
                    exit={NavbarAnimations.menuContainer.exit}
                >
                <motion.button 
                    className={styles.closeMenu}
                    onClick={() => {
                        setIsOpen(false)
                        setHoverBurguer(false)
                    }}
                    initial={NavbarAnimations.buttonCloseMenu.initial}
                    animate={NavbarAnimations.buttonCloseMenu.animate}
                    whileHover={NavbarAnimations.buttonCloseMenu.whileHover}
                    exit={NavbarAnimations.buttonCloseMenu.exit}
                >
                    X
                </motion.button>

                <div className={styles.itemsMenu}>
                    {datasMenu.map((data, i) => (
                        <motion.a 
                            key={i}
                            className={styles.itemMenu}
                            initial={NavbarAnimations.itemsMenu[`${data.dataAnimate}`].initial}
                            animate={NavbarAnimations.itemsMenu[`${data.dataAnimate}`].animate}
                            transition={NavbarAnimations.itemsMenu[`${data.dataAnimate}`].transition}
                            exit={NavbarAnimations.itemsMenu[`${data.dataAnimate}`].exit}
                        >
                            <motion.a
                                onClick={() => setIsOpen(false)}
                                href={`#${data.to}`}
                                initial={NavbarAnimations.textHover.initial}
                                whileHover={NavbarAnimations.textHover.whileInHover}
                            >
                                {data.text}
                            </motion.a>
                        </motion.a>
                    ))}
                </div>
                </motion.div>
            )}
        </AnimatePresence>
      </nav>
  )
}

export {Navbar}