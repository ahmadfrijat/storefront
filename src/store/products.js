const initialState = {
    products : [
        { name: 'TV',
         category: 'electronics',
          price: 699.00,
           inStock: 10 ,
           img:'https://image.shutterstock.com/image-photo/3d-illustration-living-room-led-260nw-728233795.jpg'
        },
        { 
        name: 'Orange',
        category: 'food',
         price: 1, 
         inStock: 20 ,
         img:'https://image.shutterstock.com/image-photo/orange-fruit-slices-leaves-isolated-260nw-1386912362.jpg'
        },
        { name: 'Headphones',
         category: 'electronics',
          price: 15,
           inStock: 12 ,
           img: 'https://image.shutterstock.com/image-photo/wireless-overear-headphones-black-leather-260nw-1199089237.jpg'
         },

         { name: 'Grape',
         category: 'food',
         price: 2, 
         inStock: 25 ,
         img:'https://image.shutterstock.com/image-photo/ripe-red-grape-pink-bunch-260nw-593908622.jpg'
         },

        { name: 'Phone',
         category: 'electronics',
          price: 300,
          inStock: 11 ,
          img:'https://cdn.stocksnap.io/img-thumbs/280h/UHGLILBFLV.jpg' 
        },
        
        
        { name: 'Apples',
         category: 'food',
          price: .50,
           inStock: 100 ,
           img: 'https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg'
        },
        { name: 'Banana',
        category: 'food',
         price: 2.50, 
         inStock: 110 ,
         img:'https://image.shutterstock.com/image-photo/banana-cluster-isolated-260nw-575528746.jpg' 
        },
    ],
}
export default (state = initialState ,action) =>{
    const { type , payload } = action;
    switch(type){
        case 'ACTIVE' :
            const products = initialState.products.filter(product=> product.category === payload) ;
            return {products}
        default :
        return state;
    }
}
export const active = (categoryName) => {
    return {
        type : 'ACTIVE',
        payload : categoryName,
    }
}
