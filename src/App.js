import React from 'react';
import axios from 'axios';
import Weather from './Weather.js';
import Movie from './movie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locData: '',
      displayLocation: false,
      errorMassage: false,
      weatherArr: [],
      displayWeather: false,
      weatherErrorMassage: false,
      errorText: '',
      movieArr: [],
      movieErrorMassage: false,
      displayMovie : false
    }
  }




  getWeather = async (weatherUrl) => {
    try {
      let weatherResult = await axios({
        method: 'get',
        url: weatherUrl,
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json'
        }
      })
      console.log(weatherResult);
      this.setState({
        weatherArr: weatherResult.data,
        weatherErrorMassage: false,
        displayWeather: true
      })
      console.log(this.state.displayWeather);
    }
    catch (error) {
      console.log('error');
      this.setState
        ({
          weatherErrorMassage: true,
          errorText: error,
          displayWeather: false
        })
    }
  }

  getMovie = async (movieUrl) => {
    try {
      let movieResult = await axios({
        method: 'get',
        url: movieUrl,
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json'
        }
      })
      console.log(movieResult);
      this.setState({
        movieArr: movieResult.data,
        movieErrorMassage: false,
        displayMovie : true
      })
      
    }
    catch(error) {
      this.setState({
        movieErrorMassage:true,
        displayMovie : false

      })
    }
  }



  getLocation = async (event) => {
    event.preventDefault();
    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.b95b5d027bac6b00166fd9e61661c8cd&q=${this.state.searchQuery}&format=json`;
    try {
      console.log('searchQuery>>>>>>>>>>>>>', this.state.searchQuery);
      let locResult = await axios.get(locUrl);
      console.log(locResult.data[0]);
      this.setState({
        locData: locResult.data[0],
        displayLocation: true,


      })
      let weatherUrl = `https://city-explorer-amara.herokuapp.com/weather?searchQuery=${this.state.searchQuery}`;
      this.getWeather(weatherUrl);
      let movieUrl = `http://city-explorer-amara.herokuapp.com/movies?searchQuery=${this.state.searchQuery}`;
      this.getMovie(movieUrl);
    }

    catch {
      this.setState({
        displayLocation: false,
        errorMassage: true,
      })

    }
  }



  updateSearchQuery = (event) => {
    this.setState({

      searchQuery: event.target.value

    });
    console.log('searchQuery>>>>>>>>>>>>>', this.state.searchQuery);

  }




  render() {

    return (
      <>
        <h1>city Explorer</h1>
        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='enter city' onChange={this.updateSearchQuery} />
          <input type='submit' value='display location' />
          <p>{this.state.locData.display_name}</p>





        </form>
        {this.state.displayLocation &&

          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.b95b5d027bac6b00166fd9e61661c8cd&center=${this.state.locData.lat},${this.state.locData.lon}`}
            alt={`Beautiful ${this.state.searchQuery}`}
          />
        }
        {this.state.errorMassage &&
          <p>error in getting the data</p>
        }

        <div>
          {
            this.state.displayWeather &&
            <Weather weatherData={this.state.weatherArr} />
          }
          {
            this.state.weatherErrorMassage &&
            <p>This city weather is not found or beacuse of {this.state.errorText}</p>
          }
        </div>

        <div>
          {
            this.state.displayMovie &&
            <Movie movieData={this.state.movieArr} />
          }
          {
            this.state.movieErrorMassage &&
            <p>This city movie is not found</p>
          }
        </div>
      </>
    )


  }







}
export default App;
