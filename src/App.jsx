import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SigninPage from './pages/SigninPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import DataContextProvider from './contexts/Usercontext'

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const contextValue = { token, setToken }

  return (
    <DataContextProvider.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SigninPage />} />
          <Route path='/cadastro' element={<SignUpPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/produto/:id' element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </DataContextProvider.Provider>
  )
}

export default App
