import React from 'react';
import {AppBar,Toolbar,Button } from '@material-ui/core';

import './header.scss';
function Header (){
    return (
        <AppBar style={{backgroundColor:"#c3c3c3"}}  bg="light" variant="light">
          <Toolbar className="mr-auto">
          <Button  href="#home" >OUR STORE</Button >
          <Button  href="#pricing">CART()</Button >
        </Toolbar>
      </AppBar >
    )
}
export default Header;