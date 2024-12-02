'use client';
import React, { useEffect, useState } from "react";
import { Product } from "@/types/product_module";

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="max-w-screen-xl py-4 mx-auto 2xl:px-0">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity || 1}</p>
                </div>
                <p className="text-lg font-bold">
                  Rs {((item.price * (item.quantity || 1)).toFixed(2))}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t pt-4">
            <h3 className="text-xl font-semibold">Total: Rs {totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
   
  );
};

export default Cart;
