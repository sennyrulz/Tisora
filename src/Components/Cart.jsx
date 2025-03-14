import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // ✅ Read from Redux
  const dispatch = useDispatch(); // ✅ Dispatch actions

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </div>
        ))
      )}
      <button onClick={() => dispatch(addItem({ id: 1, name: "New Item", price: 20 }))}>
        Add Item
      </button>
    </div>
  );
}

export default Cart;
