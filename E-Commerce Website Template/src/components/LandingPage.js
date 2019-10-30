import React, { Component } from 'react';
import { Grid, Cell, ProgressBar} from 'react-mdl';
import styles from './landing.module.css';
import {Box} from '@material-ui/core/Box';
import Typist from 'react-typist';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
                <Cell col = {12} >
                    <Typist >
                      Welcome to  <Typist.Delay ms = {500} />
       
                    </Typist>
                </Cell>
                <Cell col = {12}>
                <Button size = "large" variant="outlined" color="inherit" className={classes.button}>
                Inherit
                </Button>
                </Cell>
             </Grid>
            </div>
        )
    }
}
