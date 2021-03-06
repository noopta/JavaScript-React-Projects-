import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Input(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      <div>
        <TextField
          required
          id="outlined-required"
          label={props.requirement}
          defaultValue= {props.holder}
          variant="outlined"
          
        />
       
      </div>
    </form>
  );
}