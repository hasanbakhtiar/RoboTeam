import React, { useContext, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ProductContext } from '../context/productContext'

const Header = () => {
  const [productdata] = useContext(ProductContext);
  const [query,setQuery] = useState("");

  
  
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
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>


            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Search products</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input onChange={e=>setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                    </div>
                    <ul className="list-group">
                      {productdata.filter(value=>value.title.toLocaleLowerCase().includes(query)).map(i=>(
                        <li key={i.id} className="list-group-item">{i.title}</li>

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