import {createStore , combineReducers} from 'redux';
// this to make the dev tools work
import {composeWithDevTools} from 'redux-devtools-extension';
import Categories from './categories';
import Products from './products';
import Cart from './cart';


const rootReducer = combineReducers({Categories , Products , Cart});
// in some component state.counter.totalVotes / .candidates
const store = ()=>{
    return createStore(rootReducer , composeWithDevTools());
}

export default store();