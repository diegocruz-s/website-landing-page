// styles
import './App.css'

// components
import { Navbar } from './components/Navbar/Navbar'
import { FirstPage } from './components/FirstPage/FirstPage'
import { Features } from './components/Features/Features'
import { Card } from './components/Card/Card'
import { Carousel } from './components/Carousel/Carousel'
import { Footer } from './components/Footer/Footer'

// motion
import { motion } from 'framer-motion'

// datas
import { datasCards } from './data/card/datas'
import { useEffect, useState } from 'react'

const App = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidthScreen = () => {
      setWidthScreen(window.innerWidth);
      console.log(widthScreen)
    };
    window.addEventListener("resize", updateWidthScreen);
    return () => window.removeEventListener("resize", updateWidthScreen);
  }, [widthScreen]);

  return (
    <div className="container">
      <Navbar />
      <FirstPage />
      <Features />
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >Cards</motion.h2>
      {datasCards.map(data => <Card card={data} widthScreen={widthScreen} setWidthScreen={setWidthScreen} />)}
      <Carousel widthScreen={widthScreen} />
      <Footer />
    </div>
    
  )
}

export {App}


