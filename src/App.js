import React from 'react';
import './App.css';

var App = React.createClass({
  getInitialState: function() {
    return {data: {
      list: []
    }};
  },

  componentDidMount: function() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=json&appid=759bff8904cab98d07e01ce1bff75319')
      .then(r => r.json())
      .then(function(data) {
        console.log("data", data.list);
        this.setState({data: data});
      }.bind(this))
  },




  render: function() {
    var data = this.state.data;
    var a = data.list[3];
    var b =data.list[2];
    var h  =data.list[4];
    if(h)

      {
    var i = b.main.temp;
    var j= b.main.temp_max;
    var r =b.main.temp_min;
    var s=b.wind.speed;
    var t=b.wind.deg;
    }


    if(b)

      {
    var c = b.main.temp;
    var d= b.main.temp_max;
    var e =b.main.temp_min;
    var f=b.wind.speed;
    var g=b.wind.deg;
  }


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

        Day 1:
      <p><b>Temperature:</b>{i}</p>
       <p><b>Temperature max:</b>{j}</p>
      <p> <b>Temperature min:</b>{r}</p>
      <p> <b>Wind speed:</b>{s}</p>
       <p> <b>Wind Degree:</b>{t} </p>

        Day 2:

        <p><b>Temperature:</b>{c}</p>
        <p><b>Temperature max:</b>{d}</p>
       <p> <b>Temperature min:</b>{e}</p>
       <p> <b>Wind speed:</b>{f}</p>
       <p> <b>Wind Degree:</b>{g} </p>
       Day 3:
         <p><b>Temperature:</b>{k}</p>
         <p><b>Temperature max:</b>{p}</p>
        <p> <b>Temperature min:</b>{m}</p>
        <p> <b>Wind speed:</b>{w}</p>
        <p> <b>Wind Degree:</b>{y} </p>



        </div>
    );
  }
});

module.exports = App;
