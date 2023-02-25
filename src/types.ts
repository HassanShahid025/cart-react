
export interface ICartItem {
    id: number;
    title: string;
    img: string;
    price: number;
    amount: number;
  }

  
export interface IAppContext {
    loading: boolean;
    cart: {
        id: number;
        title: string;
        price: number;
        img: string;
        amount: number;
    }[];
    total: number;
    amount: number;
    clearCart: () => void;
    removeItem: (id: number) => void;
    increaseItem: (id:number) => void;
    decreaseItem: (id: number) => void;
  }