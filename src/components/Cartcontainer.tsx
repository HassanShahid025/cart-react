import { useGlobalContext } from "../Context";
import { CartItem } from "./CartItem";

export const Cartcontainer = () => {
  const { cart, total, clearCart } = useGlobalContext()!;
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* {cart header} */}
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* {cart header} */}
      <header>
        <h2>Your Bag</h2>
        {/* {cart items} */}
        <div>
            {cart.map((item) => {
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        {/* {cart footer} */}
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>${total}</span>
                </h4>
            </div>
            <button
            className="btn clear-btn"
            onClick={clearCart}>
                clear cart
            </button>
        </footer>
      </header>
    </section>
  );
};
