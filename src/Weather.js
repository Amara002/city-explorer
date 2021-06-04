import React from 'react';
// import axios from 'axios';
import { Col,
 Row,
 Card } from 'react-bootstrap';

class Weather extends React.Component  {
    render (){
    console.log(this.props);
    
   return(
        this.props.weatherData.map((item, index)=>{
             return (
                <Row key={index}>
                    <Col>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{item.city_name.toUpperCase()}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
             );
        })
   );
    }
}
export default Weather;