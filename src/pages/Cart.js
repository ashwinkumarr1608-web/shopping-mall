import { useState } from "react";
function Cart({ cart }) {
    const [status, setStatus] = useState("");
    const total = cart.reduce(
  (sum, item) => sum + Number(item.price),
  0
);
  return (
    <div>
      <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
            <hr />
          </div>
        ))
      )}
      <h2>Total Amount: ₹ {total}</h2>
      <button
  onClick={() => setStatus("Payment Successful")}
>
  Pay with PayPal
</button>

<h3>Payment Status: {status}</h3>
<h4>Payment Method: PayPal</h4>
<h4>Transaction ID: PAY123456</h4>
    </div>
  );
}

export default Cart;