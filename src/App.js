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



  Const  MyList =  this.state.data{
    var b =data.list[2];

    if(b)

      {
    var i = Math.round(b.main.temp) -273;
    var j= Math.round(b.main.temp_max) -273;
    var r =Math.round(b.main.temp_min) -273;
    var s=b.wind.speed;
    var t=b.wind.deg;
    }
    return(  Day 1:
<p>Date {n}</p>
    <p><b>Temperature:</b>{i}°C</p>
     <p><b>Temperature max:</b>{j}°C</p>
    <p> <b>Temperature min:</b>{r}°C</p>
    <p> <b>Wind speed:</b>{s}</p>
     <p> <b>Wind Degree:</b>{t}</p>
)
  }



  //  if (msgList === undefined) {
      //return <span>Nothing in list</span>
  //  }

  //  return (
    //  <ul>
      //  {msgList.map(item => {
      //    return <li>{item}</li>
    //    })}
    //  </ul>
    //)
  render: function() {
    var data = this.state.data;
    var a = data.list[3];
    var b =data.list[2];
    var h  =data.list[4];

    var list = <ol>
       {this.state.data.list.map((result) => (
         <li key={result.id}>{result.text}</li>
         //<ul> {this.state.data.list.map(x =>
        //  <li key={x.id}>{x.id}</li>
        // )}</ul>

       ))}
     </ol>
    if(h)

      {
    var i = Math.round(b.main.temp) -273;
    var j= Math.round(b.main.temp_max) -273;
    var r =Math.round(b.main.temp_min) -273;
    var s=b.wind.speed;
    var t=b.wind.deg;
    }


    if(b)

      {
      var n =b.dt_txt;
    var c = Math.round(b.main.temp) -273;
    var d= Math.round (b.main.temp_max)-273;
    var e =Math.round(b.main.temp_min)-273;
    var f=b.wind.speed;
    var g=b.wind.deg;
  }


    if(a)
//var r =a.dt_txt;
      {var k =  Math.round(a.main.temp) - 273;
      var p = Math.round (a.main.temp_max) -273;
      var m =Math.round(a.main.temp_min) -273;
      var w=a.wind.speed;
      var y=a.wind.deg;
    }
      return (
      <div className="commentbox">
        <h1>London Weather</h1>
        <p><i>{this.state.data.message}</i></p>

        Day 1:
<p>Date {n}</p>
      <p><b>Temperature:</b>{i}°C</p>
       <p><b>Temperature max:</b>{j}°C</p>
      <p> <b>Temperature min:</b>{r}°C</p>
      <p> <b>Wind speed:</b>{s}</p>
       <p> <b>Wind Degree:</b>{t}</p>

        Day 2:


        <p><b>Temperature:</b>{c}°C</p>
        <p><b>Temperature max:</b>{d}°C</p>
       <p> <b>Temperature min:</b>{e}°C</p>
       <p> <b>Wind speed:</b>{f}</p>
       <p> <b>Wind Degree:</b>{g} </p>
       Day 3:
         <p><b>Temperature:</b>{k} °C</p>
         <p><b>Temperature max:</b>{p} °C</p>
        <p> <b>Temperature min:</b>{m}°C</p>
        <p> <b>Wind speed:</b>{w}</p>
        <p> <b>Wind Degree:</b>{y} </p>



        </div>
    );
  }
});

module.exports = App;
