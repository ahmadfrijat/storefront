import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#f5f5f5',
      padding: theme.spacing(6),
    },
  }));
  
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/ahmadfrijat/storefront">
          Code Fellows
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  export default function Footer() {
    const classes = useStyles();
    return (
      <footer style={{backgroundColor:"#c3c3c3"}} className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Ahmad ALfrijat
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Our Store Catogeries
        </Typography>
        <Copyright />
      </footer>
    );
  }