import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import "../index.css"; // Import external CSS

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="register-form col-md-4 col-lg-4 col-sm-8">
                        <form>
                            <div className="form-group">
                                <label htmlFor="Name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already have an account? <Link to="/login" className="register-link">Login</Link></p>
                            </div>
                            <div className="text-center">
                                <button className="register-btn btn btn-dark" type="submit" disabled>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
