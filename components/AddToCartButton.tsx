'use client';
import { Product } from "@/types/product_module";
import React, { useState } from "react";
import ModalPopup from "./ModelPopup";

const AddToCartButton = ({ singleProduct }: { singleProduct: Product }) => {

  const [isModelDisplay, setisModelDisplay] = useState(false)
  const closeModal = () => {
    setisModelDisplay(false);
  };
    
  const handleAddToCartProduct = () => {

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item: Product) => item.id === singleProduct.id
    );
    
    if (existingProductIndex !== -1) {
      // If the product exists, increase the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If the product does not exist, add it with a default quantity of 1
      cart.push({ ...singleProduct, quantity: 1 });
    }
    
    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // model popup trigger
    setisModelDisplay(true)
  };

  return (
    <>
      <button
        onClick={handleAddToCartProduct}
        type="button"
        className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-5 h-5 -ms-2 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
          />
        </svg>
        Add to cart 
      </button>
      <ModalPopup isModelDisplay={isModelDisplay} onClose={closeModal}/>
    </>
  );
};

export default AddToCartButton;
