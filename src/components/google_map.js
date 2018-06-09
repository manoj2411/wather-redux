import React from 'react';

export default class GoogleMap extends React.Component {

  componentDidMount() {
    const {lat, lon} = this.props.coord;
    new google.maps.Map(this.refs.map, {zoom: 12, center: {lat: lat,lng: lon}})
  }

  render() {
    return <div ref="map" />;
  }

}

// export default GoogleMap;
