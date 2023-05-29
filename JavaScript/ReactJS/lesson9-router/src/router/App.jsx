import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Header from '../components/Header';
import NotFoundPage from '../pages/NotFoundPage'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
           <div className="container">
           <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
           </div>
      </BrowserRouter>
    )
  }
}

export default App