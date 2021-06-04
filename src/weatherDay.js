import React from 'react';
// import axios from 'axios';
import { Col,
 Row,
 Card } from 'react-bootstrap';

class WeatherDay extends React.Component  {
    render (){
    console.log(this.props);
    
   
             return (
                <Row key={this.props.key}>
                    <Col>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{this.props.weatherRes.city_name.toUpperCase()}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{this.props.weatherRes.date}</Card.Subtitle>
                                <Card.Text>
                                    {this.props.weatherRes.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
             );
   
    }
}
export default WeatherDay;