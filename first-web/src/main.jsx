import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Newsletter from './components/Newsletter.jsx'
import Analyitcs from './components/Analyitcs.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Analyitcs />
    <Newsletter />
    <Card />
    <Footer />
  </StrictMode>,
)
