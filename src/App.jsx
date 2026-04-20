import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './pages/Hero'
import Menu from './pages/Menu'
import About from './pages/About'
import OrderProcess from './pages/OrderProcess'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex flex-col">
     <NavBar/>
     <section id='home' className='w-full '>
      <Hero/>
     </section>
      <section id='about' className='w-full '>
      <About/>
     </section>
     <section id='menu' className='w-full '>
      <Menu/>
     </section>
     <section id='order' className='w-full '>
      <OrderProcess/>
     </section>
     <Footer/>
    </div>
  )
}

export default App
