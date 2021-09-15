import { Component } from 'react';
import { fetchWeather } from '../api/weatherAPI';
import Weather from '../components/Weather';

class WeatherPage extends Component {
  state = {
    weather: null
  }

  async componentDidMount() {
    try {
      const weatherJson = await fetchWeather(this.props.match.params.zipcode)
      console.log('weather:', weatherJson)
      this.setState({ weather: weatherJson })
    } catch (e) {
      console.error('Error Fetching Weather: ', e)
    }
  }

  render() {
    return (
      <div>
        {this.state.weather ? <span>
          <Weather {...this.state.weather} />
        </span> :
        <span>404: Weather Not Found!</span>
        }
      </div>
    )
  }
}

export default WeatherPage;