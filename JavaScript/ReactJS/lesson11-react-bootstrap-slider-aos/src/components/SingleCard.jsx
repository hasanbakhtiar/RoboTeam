import React, { useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import AOS from 'aos';
const SingleCard = ({alldata}) => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <Col sm={12} md={4}  data-aos="flip-up">
            <Card >
                <Card.Img  height={400} variant="top" src={alldata.image} />
                <Card.Body>
                    <Card.Title>{alldata.title.substring(0,20)}...</Card.Title>
                    <Button variant="success">Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard