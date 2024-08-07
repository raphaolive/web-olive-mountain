"use client";

import { CartContext } from "@/context/cart-context";
import { useContext } from "react";

export default function useCart() {
  const cartContext = useContext(CartContext);

  return cartContext;
}
