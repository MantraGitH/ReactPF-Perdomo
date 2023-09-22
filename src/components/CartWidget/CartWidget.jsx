import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const quantity = getCartQuantity(cart);

  return <div className="cart-widget"><FontAwesomeIcon icon={faShoppingCart} size="lg" />Mi Carrito: {quantity > 0 ? quantity : ""}</div>;
};

export default CartWidget;