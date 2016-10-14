import React from 'react';
import './App.css';

const App = React.createClass({
  getInitialState: function() {
    return {data: {
      list: []
    }};
  },

  componentDidMount: function() {
    fetch('http://api.openweathermap.org/data/2.5/find?q=London&APPID=759bff8904cab98d07e01ce1bff75319')
      .then(r => r.json())
      .then(function(data) {
        console.log("data", data.list);
        this.setState({data: data});
      }.bind(this))
  },

  render: function() {
    var data = this.state.data;
    var a = data.list[3];
    if(a)
      {var k = a.main.temp;
      var p = a.main.temp_max;
      var m =a.main.temp_min;
      var w=a.wind.speed;
      var y=a.wind.deg;
    }
      return (
      <div className="commentbox">
        <h1>London Weather</h1>
        <p><i>{this.state.data.message}</i></p>
         <ul>ID:{this.state.data.list.map(x =>
          <li key={x.id}>{x.id}</li>
         )}</ul>
         <p><b>Temperature:</b>{k}</p>
         <p><b>Temperature max:</b>{p}</p>
        <p> <b>Temperature min:</b>{m}</p>
        <p> <b>Wind speed:</b>{w}</p>
        <p> <b>Wind Degree:</b>{y} </p>
        </div>
    );
  }
});

export default App;
