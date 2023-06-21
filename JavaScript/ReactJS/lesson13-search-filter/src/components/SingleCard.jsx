import React, { useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import AOS from 'aos';
import { LinkContainer } from 'react-router-bootstrap';
const SingleCard = ({alldata}) => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <Col sm={12} md={4}  data-aos="flip-up">
            <Card >
                <Card.Img  height={400} variant="top" src={alldata.images[0]} />
                <Card.Body>
                    <Card.Title>{alldata.title.substring(0,20)}...</Card.Title>
                    <Card.Title>{alldata.price}$</Card.Title>
                    <LinkContainer to={`/product/${alldata.id}`}><Button variant="success">Read more</Button></LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard