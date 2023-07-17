import { Button, Card, Col } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import slugify from "slugify"

// eslint-disable-next-line react/prop-types
const SingleCard = ({title,desc,image}) => {
    return (
        <Col sm={12} md={4}>
            <Card >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <LinkContainer to={`/${slugify(title)}`}><Button variant="primary">Read more</Button></LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard