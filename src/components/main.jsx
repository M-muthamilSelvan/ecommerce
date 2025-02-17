import React from "react";
import "../index.css"; // Import external CSS

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card custom-card">
          <img
            className="card-img"
            src="https://t4.ftcdn.net/jpg/02/16/47/35/360_F_216473592_NefHePTpMfvYMNjD3UQTUVJy7DFPwqKA.jpg"
            alt="Card"
          />
          <div className="card-img-overlay">
            <div className="container">
              <h5 className="card-title">Your One-Stop Shop for Trendy Fashion & Essentials!</h5>
              <p className="para">
                Shop the latest styles and exclusive deals on clothing, accessories, and more.
                Elevate your wardrobe with top-quality fashion at unbeatable prices!...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
