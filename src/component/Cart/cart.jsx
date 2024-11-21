import React, { useState } from 'react';
import FireFox1 from '../../assets/FireFox/mountananeo275D.jpg';
import Suncross1 from '../../assets/Suncross/BIKE.jpg';

const Cart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Mountananeo 27.5 D',
      price: 29999.99, 
      quantity: 1,
      imageUrl: FireFox1,
    },
    {
      id: 2,
      name: "ROUTE 3.0 700C S/S (Rigid Fork)",
      price: 39999.99, 
      quantity: 1,
      imageUrl: Suncross1,
    },
  ]);

  // Update quantity function
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  // Remove item function
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Format price to INR
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 py-16 px-6">
      <div className="container mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold text-center text-primary">Shopping Cart</h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg dark:bg-gray-800">
              <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded" />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">{item.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">Price: {formatCurrency(item.price)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity === 1}
                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-l hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-gray-700 dark:text-gray-300">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-r hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {formatCurrency(item.price * item.quantity)}
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">Order Summary</h2>
          <div className="flex justify-between py-4 text-lg">
            <span>Total:</span>
            <span className="font-bold text-primary">{formatCurrency(getTotalPrice())}</span>
          </div>
          <button className="w-full py-3 mt-4 text-white bg-primary rounded-lg hover:bg-primary-dark">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
