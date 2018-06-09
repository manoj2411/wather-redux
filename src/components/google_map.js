import React from 'react';

export default class GoogleMap extends React.Component {

  componentDidMount() {
    console.log('did mount!');
    console.log(this.refs.map);
    const {lat, lon} = this.props.coord;
    new google.maps.Map(this.refs.map, {zoom: 12, center: {lat: lat,lng: lon}})
  }

  render() {
    return <div ref="map" />;
  }

}

// export default GoogleMap;
