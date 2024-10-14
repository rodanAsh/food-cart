import React from 'react'
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto py-5'>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </main>
  )
}

export default App