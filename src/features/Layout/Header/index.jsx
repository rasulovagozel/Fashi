import React from "react";
import styled from "./header.module.scss";
import { FaEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import flag from "../../../assets/america.png";
import logo from "../../../assets/logo.webp";

const Header = () => {
  return (
    <>
      <section className={styled.headerTop}>
        <div className="container">
          <div className="row g-3" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}> 
            <div className="col-lg-5">
              <div className={styled.left}>
                <div className={styled.email}>
                  <span>
                    <FaEnvelope />
                  </span>
                  <p>hello.colorlib@gmail.com</p>
                </div>
                <div className={styled.phone}>
                  <span>
                    <MdPhone />
                  </span>
                  <p>+65 11.188.888</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className={styled.right}>
                <div className={styled.apps}>
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>
                    <FaLinkedinIn />
                  </span>
                  <span>
                    <FaPinterestP />
                  </span>
                </div>
                <div className={styled.language}>
                  <div className={styled.image}>
                    <img src={flag} alt="" />
                  </div>
                  <div className={styled.text}>
                    <p>English</p>
                    <span>
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                </div>
                <div className={styled.login}>
                      <span>
                        <FaUser />
                      </span>
                      <p>Login</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styled.headerBottom}>
        <div className="container">
          <div
            className="row g-3"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="col-lg-2 col-md-2 col-sm-12">
              <div className={styled.logo}>
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className={styled.searchPart}>
                <div className="row g-0">
                  <div className="col-lg-4">
                    <div className={styled.category}>
                      <button> All Categories</button>
                      <span>
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className={styled.search}>
                      <form action="">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="What do you need?"
                        />
                        <button>
                          <IoSearchSharp />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-12"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div className={styled.likeAndcard}>
                <span>
                  <CiHeart className={styled.heart} />
                </span>
                <span>
                  <MdOutlineShoppingBag className={styled.bag} />
                </span>
                <p>$150.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
