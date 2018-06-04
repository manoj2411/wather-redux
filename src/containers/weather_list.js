import React from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends React.Component {

  renderCityWeather(cityData) {
    const city = cityData.city
    const temps = cityData.list.map(data => data.main.temp)
    console.log(temps);

    return (
      <tr key={city.id}>
        <td>{city.name}</td>
        <td>
          <Sparklines data={temps} height={100} width={140}>
           <SparklinesLine color="red" />
          </Sparklines>
        </td>
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
