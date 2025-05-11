import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/CartSlice'; // Import the action to clear the cart

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((slice) => slice.cart);
  const total = cart.cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert("Your Products are scheduled to deliver in 3 Working Days. Happy shopping :)");
    dispatch(clearCart()); // Dispatch the action to clear the cart
  };

  return (
    <div className='m-5 flex flex-wrap'>
      <div className='w-2/3'>
        <p className='my-1 text-gray-600'><strong>Delivering to:</strong> 502/201 triveni nagar 3 sitapur Road Lucknow </p>
        <p className='text-5xl'>Your Cart</p>
        <div className='w-full flex flex-wrap mt-10'>
          {cart.cart.length > 0 ? cart.cart.map((item, idx) => (
            <CartItem key={idx} product={item} />
          )) : ""}
        </div>
      </div>
      <div className={`w-1/3 border-gray-800 ${cart.cart.length > 0 ? "border-l-2" : "border-0"}`}>
        <p className='text-3xl ml-10'>Summary</p>
        {cart.cart.map((item) => (
          <div className='flex flex-row justify-between' key={item.id}>
            <p className='m-4'>{item.title}</p>
            <p className='m-4'>₹ {Math.trunc(item.price * 80)}</p>
          </div>
        ))}
        <p className='border-t-2 border-gray-800'></p>
        <div className='flex flex-row justify-between'>
          <p className='m-4 font-bold'>Total:</p>
          <p className='m-4 text-2xl'>₹ {Math.trunc(total * 80)}</p>
        </div>
        <button onClick={handleCheckout} className='px-4 py-2 ml-2 bg-blue-600 rounded-xl text-white text-xl cursor-pointer'>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;