import React, { Fragment, useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import { Button, Card, Col } from 'react-bootstrap';
import AOS from 'aos';
const Home = () => {
  const [productdata, setProductdata] = useState([]);
  useEffect(() => {
    AOS.init();
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProductdata(res.data))
  }, [])
  return (
    <Fragment>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Best-Shop</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">You can find any type of products.According to this advantage we are the best shop </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <LinkContainer to='/product'>
              <button type="button" className="btn btn-warning btn-lg px-4 gap-3">Shop Now</button>
            </LinkContainer>
          </div>
        </div>
      </div>
      <section>
        <h1 className='text-center'>Lastest Products</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {productdata.slice(0, 6).map(item => (
            <SwiperSlide> <Col sm={12} md={4} style={{"width":"100%"}} data-aos="flip-up">
              <Card
               >
                <Card.Img height={400} variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title.substring(0, 20)}...</Card.Title>
                  <Button variant="success">Read more</Button>
                </Card.Body>
              </Card>
            </Col></SwiperSlide>

          ))}
        </Swiper>

      </section>


    </Fragment>

  )
}

export default Home