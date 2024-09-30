import { Context } from "../contexts/context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const navigate = useNavigate();
  const { setProducts, products, user, setUser } = useContext(Context);

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("ออกจากระบบ");
    navigate("/logout");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost/api-react-context/api.php/product", {
        name,
        price,
        qty,
      });

      setName("");
      setPrice(0);
      setQty(0);

      await fetchProducts();
    } catch (err: any) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost/api-react-context/api.php/product"
      );

      setProducts(response.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h1>User Details</h1>
      {user && (
        <>
          {user.name} <br /> <br /> {user.createdate}
          <br />
          <br />
          <button onClick={logout}>Logout</button>
        </>
      )}

      <br />
      <br />
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Price"
          onChange={(e: any) => setPrice(e.target.value)}
          value={price}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Qty"
          onChange={(e: any) => setQty(e.target.value)}
          value={qty}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
      <br />
      <br />
      <h1>Product List</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            ชื่อสินค้า : {product.name} ราคา : {product.price} จำนวนสินค้า :{" "}
            {product.qty}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
