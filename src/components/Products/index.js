import React from 'react';
import { connect } from 'react-redux';
import './products.scss'
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import products from '../../store/products';
import {addtoCart} from '../../store/cart';


function Products(props) {
    return (
        <section>
            <ul className='products'>
                {
                    props.products.products.map(product => {
                        return (
                            <Card style={{ width: '18rem' }} className={`cards ${product.name}`} key={product.name}>
                                <CardMedia
                                    className={"img"}
                                    image={product.img}
                                />
                                <CardContent>
                                {product.name}
                                </CardContent>
                                <CardContent>
                                Price : {product.price}$
                                 </CardContent>
                                 <CardContent>
                                in Stock : {product.inStock}
                                </CardContent>
                                <section className="btnn">
                                    <Button onClick={()=> props.addtoCart(product.name)} variant="light">ADD TO CART</Button>
                                    <Button variant="light">VIEW DETAILS</Button>
                                </section>
                            </Card>
                        )
                    })
                }
            </ul>
        </section>
    )
}
const mapStateToProps = (state) => {
    return { products: state.Products }
}
const mapDispatchToProps = { addtoCart } 
export default connect(mapStateToProps , mapDispatchToProps  )(Products);