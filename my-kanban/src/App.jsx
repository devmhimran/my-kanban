import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Component/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NavMenu from './Component/NavMenu/NavMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
