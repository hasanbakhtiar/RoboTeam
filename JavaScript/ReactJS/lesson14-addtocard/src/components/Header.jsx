import React, { useContext, useState } from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ProductContext } from '../context/productContext'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'


const Header = () => {
  const [productdata] = useContext(ProductContext);
  const [query,setQuery] = useState(null);
  const [searchvalue,setSearchvalue] = useState(null);
  
  const {totalItems} = useCart();

const searchSubmited=(e)=>{
        e.preventDefault();
        setSearchvalue(query);
}
  
  return (
    <div>
      <Navbar bg="dark" className='navbar-dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">Best-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link >About</Nav.Link>
              </LinkContainer >
              <LinkContainer to="/product">
                <Nav.Link >Product</Nav.Link>
              </LinkContainer>
            </Nav>
            <Link to="/basket"  class="btn btn-info me-3 position-relative">
            <i className="fa-solid fa-cart-shopping"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {totalItems}
   
  </span>
</Link>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>


            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Search products</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                   <form onSubmit={searchSubmited}>
                   <div className="input-group mb-3">
                      <input onChange={e=>setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button className="btn btn-outline-success" type="submit" id="button-addon2">Search</button>
                    </div>
                   </form>
                    <ul className="list-group">
                      {query === null ?null:productdata.filter(value=>value.title.toLocaleLowerCase().includes(searchvalue)).map(i=>(
                        <Link  to={`/product/${i.id}`} key={i.id}  className="list-group-item">{i.title}</Link>

                      ))}
      
                    </ul>


                  </div>

                </div>
              </div>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header