import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);

  return (
    <div className="container">
      <p>
        <hr />
        <button onClick={clear} className="boton-compra">Vaciar carrito</button>
      </p>


      <ul>
        {cart.map((item) => (
          <li key={item.id}>
                  <p>{item.title}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio por unidad: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                  <hr />
            <br />
          </li>
        ))}
      </ul>

      <p className="boton-compra">
        <button >
          <Link to="/Checkout">Proceder a finalizar la compra</Link>
          
        </button>
      </p>

    </div>

    


  );
};

export default Cart;
