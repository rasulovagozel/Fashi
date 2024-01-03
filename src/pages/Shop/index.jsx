import React from "react";
import styled from "./shop.module.scss";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoPlus } from "react-icons/go";
import { MdShare } from "react-icons/md";
import product1 from "../../assets/product1.webp";
import product2 from "../../assets/product2.webp";
import product3 from "../../assets/product3.webp";
import product4 from "../../assets/product4.webp";
import product5 from "../../assets/product5.webp";
import product6 from "../../assets/product6.webp";
import product7 from "../../assets/product7.webp";
import product8 from "../../assets/product8.webp";
import product9 from "../../assets/product9.webp";

const Shop = () => {
  return (
    <section className={styled.shop}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.header}>
              <div className={styled.activeList}>
                <span>
                  <FaHome />
                </span>
                <Link to="/">Home</Link>
                <span className={styled.arrow}>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </div>
              <div className={styled.pageName}>
                <p>Shop</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
        <div className="row g-5" style={{ marginTop: 50, marginBottom: 50 }}>
          <div className="col-lg-3">
            <div className={styled.aside}>
              <div className={styled.categories}>
                <h2>Categories</h2>
                <div className={styled.list}>
                  <a href="">Men</a>
                  <a href="">Women</a>
                  <a href="">Kids</a>
                </div>
              </div>
              <div className={styled.brand}>
                <h2>Brand</h2>
                <form action="">
                  <div className={styled.input}>
                    <input type="checkbox" />
                    <label htmlFor="">Calvin Klein</label>
                  </div>
                  <div className={styled.input}>
                    <input type="checkbox" />
                    <label htmlFor="">Diesel</label>
                  </div>
                  <div className={styled.input}>
                    <input type="checkbox" />
                    <label htmlFor="">Polo</label>
                  </div>
                  <div className={styled.input}>
                    <input type="checkbox" />
                    <label htmlFor="">Tommy Hilgifer</label>
                  </div>
                </form>
              </div>
              <div className={styled.price}>
                <h2>Price</h2>
                <div className={styled.button}>
                  <button>$33</button>
                  <a href="">-</a>
                  <button>$98</button>
                </div>
                <input type="range" />
                <button>Filter</button>
              </div>
              <div className={styled.colors}>
                <h2>Color</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styled.type}>
                      <input type="radio" className={styled.black} />
                      <label htmlFor="">Black</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={styled.type}>
                      <input type="radio" className={styled.blue} />
                      <label htmlFor="">Blue</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={styled.type}>
                      <input type="radio" className={styled.red} />
                      <label htmlFor="">Red</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={styled.type}>
                      <input type="radio" className={styled.violet} />
                      <label htmlFor="">Violet</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={styled.type}>
                      <input type="radio" className={styled.yellow} />
                      <label htmlFor="">Yellow</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={styled.type}>
                      <input type="radio" className={styled.green} />
                      <label htmlFor="">Green</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styled.size}>
                <h2>Size</h2>
                <div className={styled.sizes}>
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XS</button>
                </div>
              </div>
              <div className={styled.productTags}>
                <h2>Tags</h2>
                <div className={styled.tags}>
                  <button>Towel</button>
                  <button>Shoes</button>
                  <button>Coat</button>
                  <button>Dresses</button>
                  <button>Trousers</button>
                  <button>Men`s hats</button>
                  <button>Backpack</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className={styled.products}>
              <div className="row g-3">
                <div className="col-lg-12">
                  <div
                    className="row"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="col-lg-6 col-sm-12">
                      <div className={styled.choose}>
                        <div className={styled.button}>
                          <button>Default Sorting</button>
                          <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </div>
                        <div className={styled.button}>
                          <button>Show</button>
                          <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                      <div className={styled.infoText}>
                        <p>Show 01- 09 Of 36 Product</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row g-5">
                    <div className="col-lg-4">
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={product1} alt="" />
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <div className={styled.quickStart}>
                            <a href="">
                              <LiaShoppingBagSolid />
                            </a>
                            <p>
                              <b>
                                <GoPlus />
                              </b>
                              Quick View
                            </p>
                            <h5>
                              <MdShare />
                            </h5>
                          </div>
                        </div>
                        <div className={styled.info}>
                          <span>TOWEL</span>
                          <p>Pure Pineapple</p>
                          <div className={styled.price}>
                            <span>$14.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={product2} alt="" />
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <div className={styled.quickStart}>
                            <a href="">
                              <LiaShoppingBagSolid />
                            </a>
                            <p>
                              <b>
                                <GoPlus />
                              </b>
                              Quick View
                            </p>
                            <h5>
                              <MdShare />
                            </h5>
                          </div>
                        </div>
                        <div className={styled.info}>
                          <span>COAT</span>
                          <p>Guangzhou sweater</p>
                          <div className={styled.price}>
                            <span>$13.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={product3} alt="" />
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <div className={styled.quickStart}>
                            <a href="">
                              <LiaShoppingBagSolid />
                            </a>
                            <p>
                              <b>
                                <GoPlus />
                              </b>
                              Quick View
                            </p>
                            <h5>
                              <MdShare />
                            </h5>
                          </div>
                        </div>
                        <div className={styled.info}>
                          <span>SHOES</span>
                          <p>Guangzhou sweater</p>
                          <div className={styled.price}>
                            <span>$34.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={product4} alt="" />
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <div className={styled.quickStart}>
                            <a href="">
                              <LiaShoppingBagSolid />
                            </a>
                            <p>
                              <b>
                                <GoPlus />
                              </b>
                              Quick View
                            </p>
                            <h5>
                              <MdShare />
                            </h5>
                          </div>
                        </div>
                        <div className={styled.info}>
                          <span>COAT</span>
                          <p>Microfiber Wool Scarf</p>
                          <div className={styled.price}>
                            <span>$64.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={product5} alt="" />
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <div className={styled.quickStart}>
                            <a href="">
                              <LiaShoppingBagSolid />
                            </a>
                            <p>
                              <b>
                                <GoPlus />
                              </b>
                              Quick View
                            </p>
                            <h5>
                              <MdShare />
                            </h5>
                          </div>
                        </div>
                        <div className={styled.info}>
                          <span>SHOES</span>
                          <p>Men`s Painted Hat</p>
                          <div className={styled.price}>
                            <span>$44.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={product6} alt="" />
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <div className={styled.quickStart}>
                            <a href="">
                              <LiaShoppingBagSolid />
                            </a>
                            <p>
                              <b>
                                <GoPlus />
                              </b>
                              Quick View
                            </p>
                            <h5>
                              <MdShare />
                            </h5>
                          </div>
                        </div>
                        <div className={styled.info}>
                          <span>SHOES</span>
                          <p>Converse Shoes</p>
                          <div className={styled.price}>
                            <span>$34.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={product7} alt="" />
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <div className={styled.quickStart}>
                            <a href="">
                              <LiaShoppingBagSolid />
                            </a>
                            <p>
                              <b>
                                <GoPlus />
                              </b>
                              Quick View
                            </p>
                            <h5>
                              <MdShare />
                            </h5>
                          </div>
                        </div>
                        <div className={styled.info}>
                          <span>TOWEL</span>
                          <p>Pure Pineapple</p>
                          <div className={styled.price}>
                            <span>$64.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={product8} alt="" />
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <div className={styled.quickStart}>
                            <a href="">
                              <LiaShoppingBagSolid />
                            </a>
                            <p>
                              <b>
                                <GoPlus />
                              </b>
                              Quick View
                            </p>
                            <h5>
                              <MdShare />
                            </h5>
                          </div>
                        </div>
                        <div className={styled.info}>
                          <span>COAT</span>
                          <p>2 Layer Windbreaker</p>
                          <div className={styled.price}>
                            <span>$44.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={product9} alt="" />
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <div className={styled.quickStart}>
                            <a href="">
                              <LiaShoppingBagSolid />
                            </a>
                            <p>
                              <b>
                                <GoPlus />
                              </b>
                              Quick View
                            </p>
                            <h5>
                              <MdShare />
                            </h5>
                          </div>
                        </div>
                        <div className={styled.info}>
                          <span>SHOES</span>
                          <p>Converse Shoes</p>
                          <div className={styled.price}>
                            <span>$34.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={styled.loading}>
                    <span>
                      <FaSpinner />
                    </span>
                    <a href="">Loading More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
