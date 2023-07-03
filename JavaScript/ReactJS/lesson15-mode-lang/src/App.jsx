import React, { useContext } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Container } from 'react-bootstrap'
import { ProductProvider } from './context/productContext'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from 'react-use-cart'
import Basket from './pages/Basket'
import Footer from './components/Footer'
import { ModeContext, ModeProvider } from './context/modeContext'
import { LangProvider } from './context/langContext'

const Main = () => {
  const [mode] = useContext(ModeContext);

  return (
    <div className={mode}>
      <CartProvider>
        <ProductProvider>
          <Header />
          <Container>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/product' element={<Product />}></Route>
              <Route path='/basket' element={<Basket />}></Route>
              <Route path='/product/:url' element={<ProductDetails />}></Route>
              <Route path='*' element={<Home />}></Route>
            </Routes>
          </Container>
          <Footer />
        </ProductProvider>
      </CartProvider>
    </div>
  )
}


const App = () => {
  return (
    <BrowserRouter>
    <LangProvider>
      <ModeProvider>
        <Main />
      </ModeProvider>
      </LangProvider>
    </BrowserRouter>
  )
}

export default App