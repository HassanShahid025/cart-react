import {
  useEffect,
  useState,
  useContext,
  useReducer,
  createContext,
} from "react";
import cartItems from "./data";
import { reducer } from "./reducer";
import { IAppContext } from "./types";
const url = "https://course-api.com/react-useReducer-cart-project";

export const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppContext = createContext<IAppContext | null>(null);

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseItem = (id: number) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };
  const decreaseItem = (id: number) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
