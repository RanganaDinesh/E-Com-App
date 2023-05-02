import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} from "../../store/redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, event) => {
    const quantity = parseInt(event.target.value);
    if (quantity >= 1) {
      dispatch(updateItemQuantity({ id, quantity }));
    }
  };

  const handleRemoveClick = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearClick = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} - Quantity:
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(event) => handleQuantityChange(item.id, event)}
            />
            <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearClick}>Clear Cart</button>
    </div>
  );
};

export default Cart;
