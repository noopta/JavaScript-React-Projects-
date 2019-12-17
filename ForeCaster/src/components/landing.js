import React, { Component, useState } from 'react';
import Input from './inputs.js';
import {Grid, Cell} from 'react-mdl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import './component.css';
import GetWeather from './GetWeather';
import Displays from './Displays';
import WeatherIcon from './Icon';

const API_KEY = "4324d8d577c57538602893c1cd179abf";

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#FF7F50',
    },
    '& label': {
      color: '#FF7F50',
    },
    '& input': {
      color: '#FF7F50',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FF7F50',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FF7F50',
      },
      '&:hover fieldset': {
        borderColor: '#FF7F50',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FF7F50',
      },
    },
  },
})(TextField);


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

export default function Landing(){
 
    const classes = useStyles();
    let [city, changeValue] = useState('');
    let [country, changeCountry] = useState('');
    let [bgColor, changeColor] = useState('white');
    let [imgURL, changeURL] = useState('https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/Weather+Targeting');

    const callBackBG = (temperature) => {
        if(temperature < 0){      
                changeColor(bgColor = '#add8e6')
               console.log(bgColor);
        }

        if(temperature > 18 && temperature < 28){
            changeColor(bgColor = '#FF6D2D');
        }
    }

    const callBackImage = (src) => {
        changeURL(imgURL = src);
        console.log(imgURL);
    }
    

    return (
      
        <div style ={{backgroundColor: bgColor}} className = "landing-container"> 
        <div className = "banner-text" >
            <h1>ForeCaster</h1>
            

          <img style = {{width: '70px', height: '70px'}} src = {imgURL} /> 
      <form className={classes.root} noValidate autoComplete="off">
       
        <div>
        <CssTextField
        label="City"
        variant="outlined"
        id="custom-css-outlined-input"
        onChange = {(event) => changeValue(city = event.target.value)}
      />
      <CssTextField
        label="Country"
        variant="outlined"
        id="custom-css-outlined-input"
        onChange = {(event) => changeCountry(country = event.target.value)}  
        
      /> 
        </div>
      </form>
        <GetWeather getIMG = {callBackImage} getTemp = {callBackBG} city = {city} country = {country}/>
      </div>
      </div>
       
      
    );
    }
 

 {/**   <div className = "landing-container">
                    <div className = "banner-text"> 
                    <h1 >ForeCaster</h1>
                    <img style = {{width: '70px', height: '70px'}} src = "https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/Weather+Targeting" />
                  */}

        {/**
                </div>
                </div>
                     */}