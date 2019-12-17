import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Results from './Results';
import {Link} from 'react-router-dom';
import Displays from './Displays';
import ReactDOM from 'react-dom';
import WeatherIcon from './Icon';

const useStyles = makeStyles(theme => ({
  button: {
      margin: theme.spacing(1),
      width: 200,
      height: 50,
    },

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));



export default class GetWeather extends React.Component {

    state = {
      temperature: undefined,
      minTemp : undefined,
      maxTemp: undefined,
      humidity: undefined,
      windSpeed: undefined,
      windDeg: undefined,
      description: undefined,
      error: undefined,
      imageURL: '',
    };


    getWeather = async (e) => {

        e.preventDefault();
        const API_KEY = "4324d8d577c57538602893c1cd179abf";
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city},${this.props.country}&appid=${API_KEY}`);
        const data = await api_call.json();
       
        this.setState({
          temperature: data.main.temp,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          windDeg: data.wind.deg,
          description: data.weather[0].description,
          error: "",
        })
        console.log(this.data);
    }

    getTemperature = () => {
      this.props.getTemp(this.state.temperature-273);
    }

    getSRC = () => {
      this.props.getIMG();
    }
    
    render() {
    
        return (
            <div>
                <Button
                variant="contained"
                color="primary"
                style = {{width: '150px', height: '50px', marginTop: '10px'}}
                onClick = {this.getWeather}
                > Get Weather</Button>

                <Displays 
                temp = {this.state.temperature}
                minTemp = {this.state.minTemp}
                maxTemp = {this.state.maxTemp}
                humidity = {this.state.humidity}
                windSpeed = {this.state.windSpeed}
                windDeg = {this.state.windDeg}
                description = {this.state.description}
                error = {this.state.error}
                />

                <WeatherIcon retrieve = {this.props.getIMG} temp = {this.state.temperature}/>

                {this.getTemperature()}
                
            </div>
        );

    }
}
