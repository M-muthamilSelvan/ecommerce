import React from "react";
import { Footer, Navbar } from "../components";
import "../index.css"; // Import the external CSS file

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container about-container">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere
          doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi
          facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas
          provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse
          fugit dolore laudantium...
        </p>

        <h2 className="text-center section-title">Our Products</h2>
        <div className="row">
          {[
            {
              title: "Men's Clothing",
              img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "Women's Clothing",
              img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "Jewelry",
              img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "Electronics",
              img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ].map((product, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card product-card">
                <img
                  className="card-img-top img-fluid product-img"
                  src={product.img}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{product.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
