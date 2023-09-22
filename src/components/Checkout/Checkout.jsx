import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../utils";
import { createOrder } from "../../services";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);


  const total = getCartTotal(cart);

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: "Rupert",
        phone: "5983453345",
        email: "Ruperto@coldmail.com",
      },
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  return (
    <div>
      <h1>Casi está listo...</h1>

      <h2>Resumen de la compra:</h2>

      {orderId && <p>El id de la orden es: {orderId}</p>}

      {!orderId && (
        <>
          <div>
            <h4>Formulario de contacto</h4>

            <form>
      <div>
        <label htmlFor="name">Tu Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
        />
      </div>

      <div>
        <label htmlFor="phone">Número de Teléfono:</label>
        <input type="tel"
          name="phone"
          id="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"

        />
      </div>

</form>
          </div>

          <div>
            <h4>Productos:</h4>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <p>{item.title}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio por unidad: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
          </div>

          <p>Total de la compra: ${total}</p>

          <button onClick={handleCheckout}>Finalizar compra</button>

          {isLoading && <p>Aguarde un momento...</p>}
          <hr />
        </>
      )}
    </div>
  );
};

export default Checkout;
