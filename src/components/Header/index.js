import React from 'react';
import {AppBar,Toolbar,Button } from '@material-ui/core';
import {connect} from 'react-redux';

import './header.scss';
function Header (props){
    return (
        <AppBar style={{backgroundColor:"#c3c3c3"}}  bg="light" variant="light">
          <Toolbar className="mr-auto">
          <Button  href="#home" >OUR STORE</Button >
          <Button  href="#pricing">CART({props.cart.cart.length})</Button >
        </Toolbar>
      </AppBar >
    )
}
const mapStateToProps = (state) =>{
  return {cart : state.Cart}
} 

export default connect(mapStateToProps)(Header);