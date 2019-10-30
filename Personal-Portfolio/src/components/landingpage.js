import React, {Component} from 'react';
import { Grid, Cell, ProgressBar} from 'react-mdl';
import CountUp from 'react-countup';


class Landing extends Component {
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}> 
            <Grid className = "landing-grid">

            <Cell col = {12}> </Cell>
            {/* <img  
            src = "https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
            className = "avatar-img"
            /> */} 
            
            <div className = "banner-text" >
            <h1>Front End Web Developer</h1>
             <ProgressBar indeterminate  style = {{margin: 'auto', width: '75%'}}/>
           
            <p>HTML/CSS | React Native | React | JavaScript | C | Python</p>
            <div className = "social-links">

            {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/anupta/"  rel = "noopener noreferrer" target = "_blank">
                    <i className = "fa fa-linkedin-square" aria-hidden = "true" /> 
                </a>

             {/* Github */}
             <a href="https://github.com/noopta"  rel = "noopener noreferrer" target = "_blank">
                    <i className = "fa fa-github-square" aria-hidden = "true" /> 
                </a>

              {/* FreeCodeCamp */}
              <a href="https://www.freecodecamp.org/noopta"  rel = "noopener noreferrer" target = "_blank">
                    <i className = "fa fa-free-code-camp" aria-hidden = "true" /> 
                </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/anupta.isalam"  rel = "noopener noreferrer" target = "_blank">
                    <i className = "fa fa-facebook-square" aria-hidden = "true" /> 
                </a>

            </div>
            
            </div>
            </Grid>
            </div>
        )
    }
}

export default Landing;