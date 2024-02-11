import { useContext } from "react";
import AppContext from "../../context";

export function useCart() {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrise = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return { cartItems, setCartItems, totalPrise };
}
