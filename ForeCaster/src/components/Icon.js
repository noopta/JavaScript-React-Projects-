import React, { Component } from 'react'



export default class WeatherIcon extends Component {

    lastTrip = (picNeeded) =>{
        this.props.retrieve(picNeeded);
    }

    render() 
       {
       if(this.props.temp -273> 0) {
        {this.lastTrip('https://www.shareicon.net/data/2016/03/16/734609_sun_512x512.png')}
            return (
            <div>
   
            </div>
        )
       }

       if(this.props.temp-273 < 0){
            {this.lastTrip('http://pngimg.com/uploads/snowflakes/snowflakes_PNG7545.png')}
           return(
           <div>
               
           </div>
           )

       }
       else{
          return( <div>

                </div>
          )
       }
    }
}
