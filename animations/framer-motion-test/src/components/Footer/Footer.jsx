import styles from './Footer.module.css'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion'
import { FooterAnimation } from '../../data/animations/FooterAnimations';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.div 
        className={styles.iconsSocial}
      >
        <motion.a href="#" 
          initial={FooterAnimation.initial}
          whileInView={FooterAnimation.whileInView}
          transition={FooterAnimation.transitionOne}
          viewport={FooterAnimation.viewport}
        >
          <BsFacebook className={styles.icon} />
        </motion.a>

        <motion.a href="#" 
          initial={FooterAnimation.initial}
          whileInView={FooterAnimation.whileInView}
          transition={FooterAnimation.transitionTwo}
          viewport={FooterAnimation.viewport}
        >
          <BsInstagram className={styles.icon} />
        </motion.a>

        <motion.a href="#" 
          initial={FooterAnimation.initial}
          whileInView={FooterAnimation.whileInView}
          transition={FooterAnimation.transitionThree}
          viewport={FooterAnimation.viewport}
        >
          <BsWhatsapp className={styles.icon} />
        </motion.a>

        <motion.a href="#" 
          initial={FooterAnimation.initial}
          whileInView={FooterAnimation.whileInView}
          transition={FooterAnimation.transitionFour}
          viewport={FooterAnimation.viewport}
        >
          <MdEmail className={styles.icon} />
        </motion.a>

      </motion.div>
    </footer>
  )
}

export {Footer}