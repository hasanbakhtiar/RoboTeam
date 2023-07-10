import { Button, Card, Col } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const SingleCard = ({title,desc,image,id}) => {
    return (
        <Col sm={12} md={4}>
            <Card >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <LinkContainer to={`/${id}`}><Button variant="primary">Read more</Button></LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard