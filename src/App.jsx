import React from 'react'
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Service from './components/Sevices/Service';
import Portfolio from './components/Portfolio/Portfolio';
function App(){
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
