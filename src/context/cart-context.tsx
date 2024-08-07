"use client";

import { Product } from "@/utils/products";
import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextData {
  handleAddItemToList: (product: Product) => void;
  desiredList: Product[];
}

export const CartContext = createContext({} as CartContextData);

type CartProviderProps = {
  children: ReactNode;
};
export const CartProvider = ({ children }: CartProviderProps) => {
  const [desiredList, setDesiredList] = useState<Product[]>([]);

  function handleAddItemToList(product: Product) {
    try {
      const existingProductsString = localStorage.getItem("products" || "[]");
      const existingProducts: Product[] = existingProductsString
        ? JSON.parse(existingProductsString)
        : [];

      if (existingProducts.length) {
        const repeatedProductIndex = existingProducts.findIndex(
          (item: Product) => item.id === product.id
        );

        if (repeatedProductIndex !== -1) {
          existingProducts[repeatedProductIndex].amount += 1;
        } else {
          existingProducts.push(product);
        }

        localStorage.setItem("products", JSON.stringify(existingProducts));
        setDesiredList(existingProducts);
      } else {
        localStorage.setItem("products", JSON.stringify([product]));
        setDesiredList((items) => [...items, product]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const products = localStorage.getItem("products");

    if (!products?.length) return;

    setDesiredList(JSON.parse(products));
  }, []);

  return (
    <CartContext.Provider value={{ handleAddItemToList, desiredList }}>
      {children}
    </CartContext.Provider>
  );
};
