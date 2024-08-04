import { useCart } from "../Contexts/CartProvider";
function Product({ id, name, price, image, description, quantity }) {
  const { addToCart, cart } = useCart();

  function handleAdd() {
    for (const item of cart) {
      if (item.id === id) {
        alert("item already added");
        return;
      }
    }

    const newItem = {
      id: id,
      name: name,
      price: price,
      image: image,
      description: description,
      quantity: quantity,
    };
    addToCart(newItem);
  }

  return (
    <div className="m-10 border-2 border-black p-10 ">
      <img src={image} alt="" srcset="" className="h-[250px]" />
      <p>id: {id}</p>
      <h1>name: {name}</h1>
      <h2>price: {price}</h2>
      <p>description: {description}</p>
      <p>quantity: {quantity}</p>
      <button
        className="bg-zinc-200 px-2 py-1 border-2 border-black rounded-md"
        onClick={handleAdd}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
