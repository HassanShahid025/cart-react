
export interface ICartItem {
    id: number;
    title: string;
    img: string;
    price: number;
    amount: number;
  }

  
export interface IAppContext {
    loading: boolean;
    cart: ICartItem[];
    total: number;
    amount: number;
    clearCart: () => void;
    removeItem: (id: number) => void;
    increaseItem: (id:number) => void;
    decreaseItem: (id: number) => void;
  }