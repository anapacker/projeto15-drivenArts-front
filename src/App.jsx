import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SigninPage from './pages/SigninPage'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SigninPage/>} />
        <Route path='/cadastro' element={<SignUpPage/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
