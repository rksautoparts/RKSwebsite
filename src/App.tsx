import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SumoPage from './pages/SumoPage'
import './App.css'

function App() {
  return (
    <div className="page-wrapper">
      <GoogleAnalytics />
      <TopBar />
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sumo" element={<SumoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
