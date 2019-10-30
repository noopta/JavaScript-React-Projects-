import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Grid, Cell} from 'react-mdl';
import InViewMonitor from 'react-inview-monitor';
import Fade from 'react-reveal/Fade';

class About extends Component {
    render(){
        return(
            <div className = "about-me"> 
                
              
               
               <Grid className = "about-grid"> 
              
                <Cell col = {6}> 
               
                <InViewMonitor
               classNameNotInView = 'vis-hidden'
               classNameInView = 'animated fadeInUp'
                >  
                
            <h1> Toronto Based.</h1>
            
             <img style = {{width: '450px',height: '450px'}} src="https://i.pinimg.com/originals/8b/b2/03/8bb2038f14de6c2e487f7691079976af.jpg" />
             </InViewMonitor> 

        

              <InViewMonitor
               classNameNotInView = 'vis-hidden'
               classNameInView = 'animated fadeInLeft'
               > 

            
        
             <h1>Est. 2017.</h1>
             <img  className = "pic2" style = {{width: '450px', height: '300px' }} src = "http://www.fubiz.net/wp-content/uploads/2016/12/Minimalist-Black-and-White-Photography-2-900x600.jpg" />
             
             </InViewMonitor>
             </Cell>
            

             
               {/*  <Cell row = {2}></Cell> */}
                <Cell  col = {6}>
                    <Fade> 
              {/*  <ScrollAnimation animateIn = 'fadeIn' > */ }
        <img style = {{width: '450px', height: '300px'}} src = "https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/60190674_675789742857945_1346002270499635200_n.jpg?_nc_cat=108&_nc_oc=AQncClneRyCJP1JdpOn9r_7XWAcbMZ0aD2LFYPd9DVRefXA_d8xdwlZss7do7jJRcwfS8tmBnuC2_JpkzxZ9x9T7&_nc_ht=scontent.fyyz1-2.fna&oh=135c2cc4f9910ed7e1ce3f438e55f362&oe=5E0EB715" /> 
                </Fade> 
              { /*   </ScrollAnimation> */ }

                <Fade> 
                <h1>Designer.</h1>
                
               {/*  <InViewMonitor classNameNotInView = 'vis-hidden'
                classNameInView = 'animated fadeInRight'
               > */}
                <img style = {{width: '450px', height: '450px'}} src = "https://i.pinimg.com/originals/18/aa/70/18aa70b65225e0e7124c326a2e9bebeb.jpg" />
                </Fade>
                {/* 
                </InViewMonitor>
                */}
                
                </Cell>

            

                
                <Cell col = {4}>
                    <Fade>
                    <h2>Freelancing has always been something I've done since my senior year of high school. Since I started, caffiene driven nights and long days of coding have pretty much become my thing. But I love the grind.</h2>
                    
                    <hr style = {{borderTop: '3px solid #e22947', opacity: '0.5', width: '100%'}} />
                    <h2>My Stack</h2>

                    <div className = "row"> 
                    <div className = "logos col-10 mx-auto my-2 text-center text-title "> 
                    {/* 
                        <img style = {{width: '100px', height: '100px', paddingTop: '0px'}} src = "https://i.dlpng.com/static/png/468328_preview.png" />
                        <img style = {{width: '70px', height: '70px', paddingTop: '0px'}} src = "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/square_480/expressjslogo.png" />
                        <img style = {{width: '110px', height: '80px'}} src = " https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                   
                        <img style = {{width: '90px', height: '70px', paddingLeft: '0px'}} src = "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" />
                    */ }

                    <img style = {{width: '240px', height: '100px', paddingLeft: '25px'}} src = "https://geeksperhour.com/wp-content/uploads/2019/02/mern-img.png" />
                        </div>

                    </div>
                    </Fade> 
                </Cell>
                
               

                </Grid>
             
                
               
            </div>
        )
    }
}

export default About;