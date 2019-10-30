import React, { Component } from 'react';
import { Grid, Cell, ProgressBar} from 'react-mdl';
import styles from './landing.module.css';
import {Box} from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Typist from 'react-typist-updated';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

export default function LandingPage() {
     {
        const classes = useStyles();
        return (
            <div>
               
             <Grid className = {styles.landing} > 
               <Cell col = {12}>
               <div
               style={{
              display: "flex",
              justifyContent: "center",
               alignItems: "center",
             
              
                }}>
                  <Link to ="/landing" >
           
         
        <Typist className = {styles.typeWriter}>
          Enter <Typist.Delay ms={500} /> Site
        </Typist>
     
       </Link>
      </div>
               </Cell>
             </Grid>
            </div>
        )
    }
}
