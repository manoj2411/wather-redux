import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  formSubmit(event) {
    event.preventDefault();
    // Here we can fetch weather data;
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.formSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forecast in your favorite cities. "
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
};

function mapStateToProps(state) {
  return
}

export default connect(null, mapDispatchToProps)(SearchBar);