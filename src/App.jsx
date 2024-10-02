import { useState } from 'react'
import './App.css'
import Header from'./components/Header'
import MainScrn from'./components/MainScrn'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="App">
          <Header></Header>
          <MainScrn></MainScrn>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
