import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import {connect} from 'react-redux';
import {deleteFromCart} from '../../store/cart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';



import './cart.scss'


function Cart (props){

    return (
        <section className="aaaa">
            <List >
            <h5 style={{padding:"10px",color:"gray"}}>Shopping Bag</h5>

                {
                    props.cart.cart.map(product=>{
                        return(
                            <ListItem>
                                <ListItemText>{product}</ListItemText>
                                <DeleteIcon onClick={()=> props.deleteFromCart(product)}>X</DeleteIcon>
                            </ListItem>
                        )
                    })
                }
            </List >
        </section>
    )
}

const mapStateToProps = (state) =>{
  return {cart : state.Cart}
} 
const mapDispatchToProps = { deleteFromCart } 

export default connect(mapStateToProps , mapDispatchToProps  )(Cart);