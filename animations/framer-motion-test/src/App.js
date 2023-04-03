// styles
import './App.css'

// components
import { Navbar } from './components/Navbar/Navbar'
import { FirstPage } from './components/FirstPage/FirstPage'
import { Features } from './components/Features/Features'
import { Card } from './components/Card/Card'
import { Carousel } from './components/Carousel/Carousel'
import { Footer } from './components/Footer/Footer'

// datas
import { datasCards } from './data/card/datas'

function App() {

  return (
    <div className="container">
      <Navbar />
      <FirstPage />
      <Features />
      {datasCards.map(data => <Card card={data} />)}
      <Carousel />
      <Footer />
    </div>
    
  );
}

export default App


