import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Head from './components/Head'
import Content from './components/Content'
import Footer from './components/Footer'
import './index.css'
import style from './main.module.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div className={style.container}>
      <Head titulo="Eu sou Head e vim pela PROPS" background="https://reacttodo-coti.vercel.app/assets/banner-DVDpP2rH.jpg" />
      <Content />
      <Footer />
    </div>
  </StrictMode >,
)
