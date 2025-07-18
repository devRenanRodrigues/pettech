import { createContext, type ReactNode, useState } from 'react';
import type { ProductProps } from '../pages/Home';

interface CartItem extends ProductProps {
  quantity: number;
}

interface CartContextData {
  cart: CartItem[];
  addItemToCart: (item: ProductProps) => void;
  removeItemFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalItems: number;
}

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addItemToCart(item: ProductProps) {
    const itemExists = cart.find((product) => product.id === item.id);

    if (itemExists) {
      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function removeItemFromCart(id: number) {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  }

  function increaseQuantity(id: number) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }

  function decreaseQuantity(id: number) {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
