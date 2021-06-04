import React from 'react';
import {
    Col,
    Row,
    Card,ListGroup,ListGroupItem
} from 'react-bootstrap';

class Movie extends React.Component {

    render() {
      

                return (
                    <Row key={this.props.key}>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.props.movieRes.imade_url} alt='Image of movie' />
                                <Card.Body>
                                    <Card.Title>{this.props.movieRes.title}</Card.Title>
                                    <Card.Text>
                                        {this.props.movieRes.overview}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{this.props.movieRes.average_votes}</ListGroupItem>
                                    <ListGroupItem>{this.props.movieRes.total_votes}</ListGroupItem>
                                    <ListGroupItem>{this.props.movieRes.popularity}</ListGroupItem>
                                    <ListGroupItem>{this.props.movieRes.released_on}</ListGroupItem>
                                </ListGroup>
                                
                            </Card>

                        </Col>
                    </Row>

                )
            }

        
    

}

export default Movie;