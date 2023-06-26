import React, { useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import AOS from 'aos';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
const SingleCard = ({ alldata }) => {
    const { addItem } = useCart();
    const notify = () => toast.success('🦄 Product added', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });;
    useEffect(() => {
        AOS.init();
    }, [])
  
    return (
      
        <Col sm={12} md={4} >
            <Card data-aos="flip-up">
                <Card.Img height={400} variant="top" src={alldata.images[0]} />
                <Card.Body>
                    <Card.Title>{alldata.title.substring(0, 20)}...</Card.Title>
                    <Card.Title>{alldata.price}$</Card.Title>
                    <LinkContainer to={`/product/${alldata.id}`}><Button variant="success">Read more</Button></LinkContainer>
                    <Button onClick={() => { notify(addItem(alldata)) }} variant='warning ms-3'>Add to cart</Button>
           
                </Card.Body>
            </Card>
            <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
        </Col>
     
      
    )
}

export default SingleCard