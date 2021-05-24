import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';
import Cart from './components/cart';
function App (){
    return(

    <>
        <Header/>
        <Categories/>
        <Cart/>
        <Products/> 
        <Footer/>
    </>
    )
}

export default App;