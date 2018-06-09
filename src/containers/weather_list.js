import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends React.Component {

  renderCityWeather(cityData) {
    const city = cityData.city
    const temps = cityData.list.map(data => data.main.temp)
    const pressures = cityData.list.map(data => data.main.pressure)
    const humidities = cityData.list.map(data => data.main.humidity)
    console.log(pressures);

    return (
      <tr key={city.id}>
        <td className="map"><GoogleMap coord={city.coord} /> </td>
        <td><Chart data={temps} color="red" /></td>
        <td><Chart data={pressures} color="black" /></td>
        <td><Chart data={humidities} color="green" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderCityWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {weather: state.weather}
}

export default connect(mapStateToProps, null)(WeatherList);
