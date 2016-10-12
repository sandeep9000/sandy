import React from 'react';
import './App.css';

const App = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    fetch('http://api.openweathermap.org/data/2.5/find?q=London&APPID=759bff8904cab98d07e01ce1bff75319')
      .then(r => r.json())
      .then(function(data) {
        console.log("data", data);
        this.setState({data: data});
      }.bind(this))
  },

  render: function() {
    return (
      <div className="commentbox">
        <h1>Weather</h1>
        <p>{this.state.data.message}</p>
      </div>
    );
  }
});

export default App;
