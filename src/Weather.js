import React from 'react';
import WeatherDay from './weatherDay';

class Weather extends React.Component {
    render() {
        // console.log(this.props);

        return (
            this.props.weatherData.map((item, index) => {
                return (

                    <WeatherDay  weatherRes={item} key={index}/>
                )
            })
            
        )
   }

}
export default Weather;