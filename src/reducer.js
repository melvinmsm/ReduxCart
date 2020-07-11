import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTAL } from "./actions";

//reducer
function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      );
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }

        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  if (action.type === GET_TOTAL) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      },
    );
    total = parseFloat(total).toFixed(2);
    return { ...state, total, amount };
  }
  return state;

  // switch (action.type) {
  //   case CLEAR_CART:
  //     return { ...state, cart: [] };
  //   default:
  //     return state;
  // }

  // console.log({state, action});
  // if(action.type===DECREASE){
  //   return {...state,count:state.count-1};
  // }
  // if(action.type===INCREASE){
  //   return {...state,count:state.count+1};
  // }
  // // if(action.type==="RESET"){
  // //   return {...state,count:0};
  // // }
  // // if(action.type==="CHANGE_NAME"){
  // //   return {...state,name:'bob'};
  // // }
}

export default reducer;
