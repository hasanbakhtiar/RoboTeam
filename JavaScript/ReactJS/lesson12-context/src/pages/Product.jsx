import React, { Fragment, useContext } from 'react'
import SingleCard from '../components/SingleCard'
import { Col, Row } from 'react-bootstrap'

import { ProductContext } from '../context/productContext';

const Product = () => {
  const [productdata] = useContext(ProductContext);
  return (
    <Fragment>
      <h1 className='text-center my-5'>Product List</h1>

      <Row>
        <Col sm={12} md={3}><ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul></Col>
        <Col sm={12} md={9}>
          <Row className='g-5'>
            {productdata.length === 0 ? <img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif' alt='err' /> : productdata.map(item => (
              <SingleCard alldata={item} />

            ))}
          </Row></Col>
      </Row>

    </Fragment>
  )
}

export default Product