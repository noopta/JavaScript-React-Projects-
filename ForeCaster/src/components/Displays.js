import React, { Component } from 'react'
import Icon from './Icon';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

export default class Displays extends Component {

    state = {
        checked : true,
    }

    render()
     {
         if(this.props.temp >0 || this.props.temp <0){
        return (
            <div> 
                <br />
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 1000 } : {})}
                >
                <hr style = {{borderTop: '1px solid #833fb2', width: '75%'}} />
                </Grow>
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 2000 } : {})}
                >
                <h2>Current Temp: {(this.props.temp - 273).toFixed(0)} °C </h2>
                </Grow>
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 3000 } : {})}
                >
                <hr style = {{borderTop: '1px solid #833fb2', width: '75%'}} />
                </Grow>
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 4000 } : {})}
                >
                <h2> High: {(this.props.maxTemp-273).toFixed(0)} °C || Low: {(this.props.minTemp-273).toFixed(0)} °C</h2>
                </Grow>
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 5000 } : {})}
                >
                <hr style = {{borderTop: '1px solid #833fb2', width: '75%'}} />
                </Grow>
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 6000 } : {})}
                >
                <h2>Humidity: {this.props.humidity}%</h2>
                </Grow>
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 7000 } : {})}
                >
                <hr style = {{borderTop: '1px solid #833fb2', width: '75%'}} />
                </Grow>
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 8000 } : {})}
                >
                <h2>Wind Speeds: {(this.props.windSpeed*1.609).toFixed(0)} km/hr</h2>
                </Grow>
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 9000 } : {})}
                >
                <hr style = {{borderTop: '1px solid #833fb2', width: '75%'}} />
                </Grow>
                <Grow
                in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 10000 } : {})}
                >
                <h2>Today: {this.props.description}</h2>
                </Grow>
                
            </div>
        )
        }
        
        else{
            return(
                <div>
                    
                </div>
            )
        }
    }
}
