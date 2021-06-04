import React from 'react';
import {
    Col,
    Row,
    Card,ListGroup,ListGroupItem
} from 'react-bootstrap';

class Movie extends React.Component {

    render() {
        return (
            this.props.movieData.map((item, index) => {

                return (
                    <Row key={index}>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.imade_url} alt='Image of movie' />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.overview}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{item.average_votes}</ListGroupItem>
                                    <ListGroupItem>{item.total_votes}</ListGroupItem>
                                    <ListGroupItem>{item.popularity}</ListGroupItem>
                                    <ListGroupItem>{item.released_on}</ListGroupItem>
                                </ListGroup>
                                
                            </Card>

                        </Col>
                    </Row>

                )
            })

        )
    }

}

export default Movie;