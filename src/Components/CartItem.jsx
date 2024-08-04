import { useCart } from "../Contexts/CartProvider";

function CartItem({ id, name, price, image, description, quantity }) {
  const { handleIncBtn, handleDecBtn, handleRemoveBtn } = useCart();
  return (
    <div className="border-2 my-4 p-6 text-black font-semibold border-black ">
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>
        price: {price} X {quantity} = {price * quantity}
      </p>
      <p>description: {description}</p>
      <p>quantity: {quantity}</p>
      <button
        className="bg-zinc-200 px-4 py-2 border-2 border-black rounded-md text-center mt-4 mx-2"
        onClick={() => {
          handleIncBtn(id);
        }}
      >
        Inc Quantity
      </button>
      <button
        className="bg-zinc-200 px-4 py-2 border-2 border-black rounded-md text-center mt-4 mx-2"
        onClick={() => {
          if (quantity <= 1) {
            return;
          }
          handleDecBtn(id);
        }}
      >
        Dec Quantity
      </button>
      <button
        className="bg-zinc-200 px-4 py-2 border-2 border-black rounded-md text-center mt-4 mx-2"
        onClick={() => {
          handleRemoveBtn(id);
        }}
      >
        Remove Item
      </button>
    </div>
  );
}

export default CartItem;
