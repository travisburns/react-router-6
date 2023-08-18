import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'

const App = () => {
  return (
   <BrowserRouter>
   <nav>THe Navigation</nav>
   <Routes>
    <Route path="/" element={<Home />}>
    <Route path="about" element={<About />} />
    <Route path="products" element={<Products />} />
    <Route path="*" element={<Error />} />
    </Route>
    <Route path="dashboard" element={<div>dashBoard</div>}>
      <Route path='stats' element={<div>Stats</div>} />
    </Route>
   </Routes>
   <footer>Our Footer</footer>
   
   </BrowserRouter>
  )
}

export default App
