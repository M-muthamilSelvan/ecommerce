import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../index.css"; // Import external CSS

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => (
    <div className="row">
      {[...Array(6)].map((_, i) => (
        <div className="col-md-4 col-sm-6 col-12 mb-4" key={i}>
          <Skeleton height={400} />
        </div>
      ))}
    </div>
  );

  const ShowProducts = () => (
    <>
      <div className="text-center mb-4">
        <button className="btn btn-dark mx-2" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark mx-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark mx-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark mx-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button className="btn btn-outline-dark mx-2" onClick={() => filterProduct("electronics")}>Electronics</button>
      </div>

      <div className="row">
        {filter.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card text-center p-3">
              <img className="card-img-top" src={product.image} alt="Product" height="250" />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 15)}...</h5>
                <p className="card-text">{product.description.substring(0, 80)}...</p>
                <h5 className="text-dark">$ {product.price}</h5>
              </div>
              <div className="card-body">
                <Link to={`/product/${product.id}`} className="btn btn-dark m-1">Buy Now</Link>
                <button
                  className="btn btn-outline-dark m-1"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container my-5">
      <h2 className="text-center">Latest Products</h2>
      <hr />
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
