import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Container } from 'react-bootstrap'
import { ProductProvider } from './context/productContext'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
    <ProductProvider>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:url' element={<ProductDetails />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
      </Container>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App