import React, { Fragment, useContext, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import { ProductContext } from '../context/productContext';
import { LangContext } from '../context/langContext';
const Home = () => {
const [lang] = useContext(LangContext)
useEffect(()=>{
  AOS.init();
},[])

  const [product] = useContext(ProductContext);
  
  
  return (
    <Fragment>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">{lang === 'en'?"Best-Shop":"Ela ticaret sayti"}</h1>
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
          {product.slice(0, 6).map(item => (
            <SwiperSlide>
              <LinkContainer style={{"width":"100%"}} to={`/product/${item.id}`}>
              <Col sm={12} md={4}  data-aos="flip-up">
              <Card
               >
                <Card.Img height={400} variant="top" src={item.images[0]} />
                <Card.Body>
                  <Card.Title>{item.title.substring(0, 20)}...</Card.Title>
                 
                </Card.Body>
              </Card>
            </Col>
              </LinkContainer>
              
            </SwiperSlide>

          ))}
        </Swiper>

      </section>


    </Fragment>

  )
}

export default Home