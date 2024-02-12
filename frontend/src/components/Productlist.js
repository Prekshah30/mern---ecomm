import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/getproducts");
    result = await result.json();
    setProducts(result);
  };

  const deleteproduct = async (id) => {
    let result = await fetch(`http://localhost:5000/deleteprod/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const handlesearch = async (e) => {
    console.log(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  console.log(products);
  return (
    <div className="product-list">
      <h3>Product List</h3>
      <input
        type="text"
        placeholder="search product here"
        className="searchpro"
        onChange={handlesearch}
      />
      <ul>
        <li>S. no.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>

      { products.length > 0 ? products.map((item, index) => (
        <ul key={item._id}>
          <li>{index}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>
            <button onClick={() => deleteproduct(item._id)}>delete</button>
            <Link to={"/update/" + item._id}>Update</Link>
          </li>
        </ul>
      )): <h1>no results found</h1>}
    </div>
  );
};

export default Productlist;
