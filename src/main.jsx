import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/header.jsx'
import App from './components/Main/app.jsx'
import Footer from './components/Footer/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
