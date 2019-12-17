import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './component.css';
import {Link} from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles(theme => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));

export default function Home(){
  
const classes = useStyles();
const [checked, setChecked] = React.useState(true);

const handleChange = () => {
    setChecked(prev => !prev);
};
        return (
        
        <div className = "home-container">    
        <div className = "homeBanner-text" >
        <br />
        <br/>
        <Grow
         in={checked}
         style={{ transformOrigin: '0 0 0' }}
         {...(checked ? { timeout: 1000 } : {})}>
        <Link style = {{textDecoration: 'none'}} to = "/daily"> 
        <Button style = {{width: '75%', height: '20%'}} size = "large" variant="outlined" color="secondary">
            Daily Forecast
        </Button>
        </Link>
        </Grow>
      <br />
      <br />
      <br />
      <br />
      <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})}
        >
      <Button style = {{width: '75%', height: '20%'}}  size = "large" variant="outlined" color="secondary">
        5 - Day Forecast
      </Button>
      </Grow>
      <br />
      <br />
      <br />
      <br />
      <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 3000 } : {})}
        >
      <Button style = {{width: '75%', height: '20%'}}  size = "large" variant="outlined" color="secondary">
        Geolocation
      </Button>
      </Grow>
      </div>
      </div>
        );
    }

