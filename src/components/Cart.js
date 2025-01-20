import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }


  console.log(cartItems);
  return (
    <div className="m-10 p-10 bg-gray-50">
      <h1 className="text-2xl font-bold"> Cart</h1>
      <button className="m-4 w-28 h-8 bg-red-300 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
      
      { cartItems.length === 0 && <h1 className="text-center"> Cart is Empty. Please add some items.</h1>}
      
      <div className="">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
