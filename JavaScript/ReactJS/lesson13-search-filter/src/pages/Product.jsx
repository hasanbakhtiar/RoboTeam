import React, { Fragment, useContext, useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'
import { Col, Row } from 'react-bootstrap'

import { ProductContext } from '../context/productContext';

const Product = () => {
  const [productdata] = useContext(ProductContext);
  const [catData,setCatData] = useState(productdata);
  const filterResult=(catItem)=>{
        const result = productdata.filter(cd=>(
          cd.category === catItem
        ))
        setCatData(result);
  }
  useEffect(()=>{
    filterResult('smartphones');
  },[])
  return (
    <Fragment>
      <h1 className='text-center my-5'>Product List</h1>

      <Row>
        <Col sm={12} md={3}><ul className="list-group">
          <li className="list-group-item" onClick={()=>{filterResult('smartphones')}}>Smartphones</li>
          <li className="list-group-item" onClick={()=>{filterResult('laptops')}}>Laptops</li>
          <li className="list-group-item" onClick={()=>{filterResult('fragrances')}}>Fragrances</li>
          <li className="list-group-item" onClick={()=>{filterResult('skincare')}}>Skincare</li>
          <li className="list-group-item" onClick={()=>{filterResult('groceries')}}>Groceries</li>
        </ul></Col>
        <Col sm={12} md={9}>
          <Row className='g-5'>
            {productdata.length === 0 ? <img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif' alt='err' /> : catData.length === 0 ?  productdata.map(item => (
              <SingleCard key={item.id} alldata={item} />

            )): catData.map(item => (
              <SingleCard key={item.id} alldata={item} />

            ))}
          </Row></Col>
      </Row>

    </Fragment>
  )
}

export default Product