import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

class Nav extends Component{
  render(){
    return(
      <ol>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/about">About Page</Link></li>
        <li><Link to="/contact">Contact Page</Link></li>
      </ol>
    )
  }
}


class Home extends Component{
  render(){
    return(
      <h1>Home page</h1>
    )
  }
}
 
class About extends Component{
  render(){
    return(
      <h1>About page</h1>
    )
  }
}

class Contact extends Component{
  render(){
    return(
      <h1>Contact page</h1>
    )
  }
}


class BasicRouter extends Component {
  render() {
    return (
      <div className='container my-5'>
        <BrowserRouter>
        <Nav />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default BasicRouter