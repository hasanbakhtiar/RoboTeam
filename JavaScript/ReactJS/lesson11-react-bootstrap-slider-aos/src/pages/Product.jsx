import React, { Fragment, useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'
import { Row } from 'react-bootstrap'
import axios from 'axios';

const Product = () => {
  const [productdata,setProductdata] = useState([]);
  useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then(res=>setProductdata(res.data))
  },[])
  return (
    <Fragment>
      <h1 className='text-center my-5'>Product List</h1>
      <Row className='g-5'>
       {productdata.length === 0 ? <img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif' alt='err'/>: productdata.map(item=>(
          <SingleCard alldata={item}/>

        ))}
      </Row>
    </Fragment>
  )
}

export default Product