import { useEffect, useState } from "react";
import axios from "axios";

function Products({ cart, setCart }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://shopping-mall-backend-mc8c.onrender.com/products")
        .then((response) => {
    console.log(response.data);
    alert(JSON.stringify(response.data));
    setProducts(response.data);
});
    }, []);
const addToCart = (product) => {
  setCart([...cart, product]);
  alert(product.name + " Added To Cart");
}
    return (
  <div>
    <h1>Products Page</h1>

    {products.map((product) => (
      <div key={product.id}>
        <h3>{product.name}</h3>

        <p>₹ {product.price}</p>

        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>

        <hr />
      </div>
    ))}
  </div>
);
}
export default Products;