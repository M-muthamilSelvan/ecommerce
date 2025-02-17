import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";
import "../index.css"; // Import external CSS

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);

        if (data.category) {
          setLoading2(true);
          const response2 = await fetch(
            `https://fakestoreapi.com/products/category/${data.category}`
          );
          const data2 = await response2.json();
          setSimilarProducts(data2.filter((item) => item.id !== data.id));
          setLoading2(false);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
        setLoading2(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img className="product-image" src={product.image} alt={product.title} />
        </div>
        <div className="col-md-6 py-5">
          <h4 className="product-category">{product.category}</h4>
          <h1 className="product-title">{product.title}</h1>
          <p className="product-rating">
            {product.rating?.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="product-price">${product.price}</h3>
          <p>{product.description}</p>
          <button className="btn btn-outline-dark" onClick={() => addProduct(product)}>
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="similar-products-container d-flex">
      {[...Array(4)].map((_, index) => (
        <div className="mx-4" key={index}>
          <Skeleton height={400} width={250} />
        </div>
      ))}
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="similar-products-container">
      {similarProducts.length === 0 ? (
        <p className="text-center">No similar products found.</p>
      ) : (
        <div className="d-flex">
          {similarProducts.map((item) => (
            <div key={item.id} className="similar-product-card card">
              <img className="card-img-top" src={item.image} alt="Card" />
              <div className="card-body">
                <h5 className="card-title">{item.title.substring(0, 15)}...</h5>
              </div>
              <div className="card-body">
                <Link to={`/product/${item.id}`} className="btn btn-dark m-1">
                  Buy Now
                </Link>
                <button className="btn btn-dark m-1" onClick={() => addProduct(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : product ? <ShowProduct /> : <p>Product not found</p>}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="similar-products-title">You may also Like</h2>
            <Marquee className="marquee-container" pauseOnHover speed={50}>
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
