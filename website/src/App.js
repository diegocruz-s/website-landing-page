import { GlobalStyle } from "./globalStyles";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Hero Feature Content Carousel

// pages
import Home from "./pages/Home";
import SignUp from './pages/SignupPage'
import Pricing from './pages/PrincingPage'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
