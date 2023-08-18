import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<div>Home Page</div>} />
   </Routes>
   
   
   </BrowserRouter>
  )
}

export default App
