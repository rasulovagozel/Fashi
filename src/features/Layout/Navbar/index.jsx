import React from 'react'
import {Link} from "react-router-dom"
import styled from "./navbar.module.scss"
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  return (
    <section className={styled.navbar}>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className={styled.departments}>
               <div className={styled.all}>
               <span><IoMdMenu /></span>
               <p>ALL DEPARTMENTS</p>
               <span><MdKeyboardArrowDown /></span>
               </div>
               <div className={styled.list}>
               <ul>
                <li>Women`s Clothing</li>
                <li>Men`s Clothing</li>
                <li>Underwear</li>
                <li>Kid`s Clothing</li>
                <li>Brand Fashion</li>
                <li>Accessroies/Shoes</li>
                <li>Luxury Brands</li>
                <li>Brand Outdoor Apparel</li>
               </ul>
               </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className={styled.nav_lists}>
                <ul>
                  <li><Link className={location.pathname=="/" && styled.active} to="/">Home</Link></li>
                  <li> <Link className={location.pathname=="/shop" && styled.active} to="/shop">Shop</Link></li>
                  <li><Link to="/collection" className={location.pathname=="/collection" && styled.active}>Collection</Link>
                  <ul className={styled.collection}>
                    <li>Men`s</li>
                    <li>Women`s</li>
                    <li>Kid`s</li>
                  </ul>
                  </li>
                  <li><Link to="/blog" className={location.pathname=="/blog" && styled.active}>Blog</Link></li>
                  <li><Link to="/contact" className={location.pathname=="/contact" && styled.active}>Contact</Link></li>
                  <li><Link to="/pages" className={location.pathname=="/pages" && styled.active}>Pages</Link>
                  <ul className={styled.collection}>
                    <li>Blog Details</li>
                    <li>Shopping Cart</li>
                    <li>Checkout</li>
                    <li>Faq</li>
                    <li>Register</li>
                    <li>Login</li>
                  </ul></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-12">
              <div className={styled.menu}>
                <div className={styled.menuButton}>
                <p>MENU</p>
              <span><IoMdMenu /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar