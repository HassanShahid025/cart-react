import { initialState } from "./Context";

type actionType =
  | { type: "CLEAR_CART" }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE_ITEM"; payload: number }
  | { type: "DECREASE_ITEM"; payload: number }
  | { type: "TOTAL_QUANTITY"; payload: number }
  | { type: "GET_TOTAL" }
  | {type:'LOADING'}
  | { type: 'DISPLAY_ITEMS', payload:Promise<any>}

export const reducer = (state: typeof initialState, action: actionType) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_ITEM":
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    case "DECREASE_ITEM":
      let DecreaseCart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount !== 0 ? item.amount - 1 : 0 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: DecreaseCart };
    case "GET_TOTAL":
        let { total, amount} = state.cart.reduce(
            (cartTotal, item) => {
                const {price, amount} = item
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            }, {total:0, amount:0})

            total = parseFloat(total.toFixed(2))
            return({...state,total, amount})
    case "LOADING":
        return{ ...state, loading:true}
    case "DISPLAY_ITEMS":
        return { ...state, loading:false }
    
    default:
      return state;
  }
};
