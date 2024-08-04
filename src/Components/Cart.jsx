import { useCart } from "../Contexts/CartProvider";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useCart();
  if (cart.length === 0)
    return <div className="text-2xl font-semibold">No items found!!</div>;
  const totalAmt = cart.reduce((acc, currItem) => {
    return acc + currItem.price * currItem.quantity;
  }, 0);
  return (
    <>
      <div>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <h1 className="text-2xl font-semibold">Total Amount: {totalAmt}</h1>
    </>
  );
}

export default Cart;
