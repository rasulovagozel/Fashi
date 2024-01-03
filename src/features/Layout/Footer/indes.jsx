import React from "react";
import styled from "./footer.module.scss";
import logo1 from "../../../assets/logo1.webp";
import logo2 from "../../../assets/logo2.webp";
import logo3 from "../../../assets/logo3.webp";
import logo4 from "../../../assets/logo4.webp";
import logo5 from "../../../assets/logo5.webp";
import logo from "../../../assets/logowhite.webp";
import payment from "../../../assets/payment-method.png.webp";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className={styled.brands}>
        <div className="container">
          <div
            className="row g-3"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 25,
            }}
          >
            <div className="col-lg-2 col-md-4 col-sm-12">
              <div className={styled.brand}>
                <img src={logo1} alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <div className={styled.brand}>
                <img src={logo2} alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <div className={styled.brand}>
                <img src={logo3} alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <div className={styled.brand}>
                <img src={logo4} alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <div className={styled.brand}>
                <img src={logo5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styled.footer}>
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-3">
              <div className={styled.header}>
                <div className={styled.image}>
                  <img src={logo} alt="" />
                </div>
                <div className={styled.text}>
                  <p>Address: 60-49 Road 11378 New York</p>
                  <p>Phone: +65 11.188.888</p>
                  <p>Email: hello.colorlib@gmail.com</p>
                </div>
                <div className={styled.apps}>
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>
                    <FaInstagram />
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>
                    <FaPinterest />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className={styled.footer_lists}>
                <div
                  className="row g-3"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <div className="col-lg-3">
                    <div className={styled.footerElements}>
                      <h2>Information</h2>
                      <div className={styled.list}>
                        <a href="">About Us</a>
                        <a href="">Checkout</a>
                        <a href="">Contact</a>
                        <a href="">Servis</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className={styled.footerElements}>
                      <h2>My Account</h2>
                      <div className={styled.list}>
                        <a href="">My Account</a>
                        <a href="">Contact</a>
                        <a href="">Shopping Cart</a>
                        <a href="">Shop</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className={styled.footerElements}>
                      <h2>Join Our Newsletter Now</h2>
                      <div className={styled.list}>
                        <a href="">
                          Get E-mail updates about our latest shop and special
                          offers.
                        </a>
                        <a href="">
                          <form action="">
                            <input type="text" placeholder="Enter Your Mail" />
                            <button>Subscribe</button>
                          </form>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="col-lg-7">
              <div className={styled.info}>
                <p>
                  Copyright ©2024 All rights reserved | This template is made
                  with by Colorlib
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className={styled.cards}>
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
