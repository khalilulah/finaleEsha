import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App.css'
import HomePage from '../pages/HomePage'
import Shop from '../pages/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
