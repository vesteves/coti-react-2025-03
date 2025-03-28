import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Head from './components/Head'
import Content from './components/Content'
import Footer from './components/Footer'
import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div style={{
      color: '#666666',
      background: '#efefef',
      height: '100vh',
    }}>
      <Head />
      <Content />
      <Footer />
    </div>
  </StrictMode >,
)
