import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import {createStore} from 'redux';
//import {DECREASE, INCREASE} from './actions';
import reducer from './reducer';
//react-redux -provider wraps the entire app
//use connect in each component to access the info
//like cart, total, amount here
import {Provider} from "react-redux";
//initial store
const initialStore={
   cart : cartItems, 
   total:0,
   amount:5
};

//const DECREASE="DECREASE";



const store =createStore(reducer,initialStore);
//action
// store.dispatch({type:DECREASE});
// store.dispatch({type:INCREASE});
// store.dispatch({type:INCREASE});
// store.dispatch({type:INCREASE});
// store.dispatch({type:INCREASE});
// store.dispatch({type:INCREASE});


//store.dispatch({type:'INCREASE'});
//store.dispatch({type:'CHANGE_NAME'});
//store.dispatch({type:'INCREASE'});
//store.dispatch({type:'INCREASE'});
//store.dispatch({type:'RESET'});


//console.log(store.getState());



function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
