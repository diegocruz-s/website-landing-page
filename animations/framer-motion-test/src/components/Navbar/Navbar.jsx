import styles from './Navbar.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavbarAnimations } from '../../data/animations/NavbarAnimations'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hoverBurguer, setHoverBurguer] = useState(false)

    const [datasMenu, setDatasMenu] = useState([
        { animate: false, dataAnimate: 'itemOne', text: 'Home' }, 
        { animate: false, dataAnimate: 'itemTwo', text: 'About' }, 
        { animate: false, dataAnimate: 'itemThree', text: 'Contact' }
    ])

    console.log(isOpen)

  return (
    <div className={styles.navbar}>
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
                                href='#abc'
                                onMouseEnter={() => setDatasMenu(
                                    prev => prev.filter(e => {
                                        if(e.text === data.text) {
                                            e.animate = true
                                            return e
                                        }
                                        return e
                                    })
                                )}
                                onMouseLeave={() => setDatasMenu(
                                    prev => prev.filter(e => {
                                        if(e.text === data.text) {
                                            e.animate = false
                                            return e
                                        }
                                        return e
                                    })
                                )}
                            >
                                {data.text}
                            </motion.a>
                            <motion.div
                                initial={NavbarAnimations.textHover.initial}
                                animate={data.animate ? NavbarAnimations.textHover.animate : NavbarAnimations.textHover.exit}
                            />
                        </motion.a>
                    ))}
                </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
  )
}

export {Navbar}