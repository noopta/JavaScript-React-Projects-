import React, {Component} from 'react';
import {Grid, Cell, Button} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Awards from './awards';

class Resume extends Component {
    render(){
        return(
            <div> 
               <Grid>

                    
                   <Cell col = {4}>
                       
                       <div style = {{textAlign: 'center'}}>

                       {/* <img 
                        src = "https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt = "avatar"
                        style= {{height: '200px'}}
                        
                        /> */}
                        </div>
                       
                        <h2 style = {{paddingTop: '2em'}}> Anupta Islam</h2>
                        <h4 style = {{color: 'grey'}}>Front End Web Developer</h4>

                        <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>I am currently a third year Honors Computer Science student at the University of Guelph. I'm pursuing a Bachelor of Computing with a minor in business. </p>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>172 Farley Drive, N1L 1L6</p> 
                        <h5>Phone </h5>
                        <p>519 993 8342</p>
                        <h5>Email</h5>
                        <p>anupta@uoguelph.ca</p>
                        <h5>Web </h5>
                        <p>anupta.com</p>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}} />



                   </Cell>
                   <Cell className = "resume-right-col" col = {8}>

                    <h2>Education</h2>
                
                    <Education 
                    startYear = {2017}
                    endYear = {2021}
                    schoolName = "University of Guelph"
                    schoolDescription = "Pursuing a Bachelor of Computing with a minor in Business."
                     />

                    <Education 
                    startYear = {2013}
                    endYear = {2017}
                    schoolName = "Centennial Collegiate Vocational Institute"
                    schoolDescription = "Earned my OSSD here."
                    />   

                    <hr style = {{borderTop: '3px solid #e22947'}} />

                    <h2>Experience</h2>

                    <Experience 
                        startYear = "Sept 2018"
                        endYear = "Present"
                        jobName = "Super 7"
                        jobDescription = "Clerk at Super 7 Mini Mart in Guelph, Ontario. Duties included counting cash at the end of every shift, organizing and placing merchandise, and providing excellent customer service."
                    />

                    <Experience 
                        startYear = "May 2018"
                        endYear = "August 2018"
                        jobName = "Walmart / OSL "
                        jobDescription = "Bikes Sales Associate for OSL at Walmart in Guelph, Ontario. Responsibilities included repairing and building bikes, displaying merchandise, and providing excellent customer service"
                    />  

                     <Experience 
                        startYear = "March 2018"
                        endYear = "May 2018"
                        jobName = "Boathouse "
                        jobDescription = "Floor Sales Associate for Boathouse in Guelph, Ontario. Was responsible for providing excellent customer service, maintaining the change rooms and folding/placing clothing around the store."
                    />   

                    <Experience 
                        startYear = "July 2017"
                        endYear = "August 2017"
                        jobName = "IFCO "
                        jobDescription = "General labourer for IFCO in Guelph, Ontario. Work included lifting heavy crates repetitively for long periods of time, finishing daily work orders and quality checks on the crates."
                    />   

                        
                        
                    <h2>Skills </h2>
                    <Skills 
                    skill = "C"
                    progress = {100}
                    />

                    <Skills 
                    skill = "Java"
                    progress = {70}
                    />

                    <Skills 
                    skill = "HTML/CSS"
                    progress = {100}
                    />

                    <Skills 
                    skill = "React"
                    progress = {50}
                    />

                    <hr style = {{borderTop: '3px solid #e22947'}} />

                    <h2>Certifications & Awards</h2>

                    <Awards
                    awardYear = {2019}
                    awardName = "NUVO 'Hack The NU' Hackathon Winner"
                    awardDescription = "Placed 1st for category 3, help local businesses get involved with the community through charity / non- profits,  at Hack the NU. Our project used a front end UI designed with React.Js, and on the backend we used artificial intelligence to achieve our goal."
                    />

                    <Awards
                    awardYear = {2019}
                    awardName = "Udemy React Certification"
                    awardDescription = "Completed online certification course for React.js on Udemy."
                    />

                    <Awards
                    awardYear = {2018}
                    awardName = "Entrance Scholarship"
                    awardDescription = "Recieved an entrance scholarship of $2000 for being accepted to the University of Guelph with a grade average above 85%."
                    />

                    <Awards
                    awardYear = {2017}
                    awardName = "DECA Regional Finalist"
                    awardDescription = "Placed top 10 at DECA Regionals in Waterloo, Ontario. For duo case studies in Sports and Entertainment Marketing(STDM), and competed against 50+ other groups."
                    />
                    
              

                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;