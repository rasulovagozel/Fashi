import React from "react";
import styled from "./blog.module.scss";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import recent1 from "../../assets/recent1.webp";
import recent2 from "../../assets/recent2.webp";
import recent3 from "../../assets/recent3.webp";
import recent4 from "../../assets/recent4.webp";
import blog1 from "../../assets/blog1.webp";
import blog2 from "../../assets/blog2.webp";
import blog3 from "../../assets/blog3.webp";
import blog4 from "../../assets/blog4.webp";
import blog5 from "../../assets/blog5.webp";
import blog6 from "../../assets/blog6.webp";

const Blog = () => {
  return (
    <section className={styled.blog}>
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
                <p>Blog</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
        <div className="row g-5" style={{ marginTop: 50 }}>
          <div className="col-lg-3">
            <div className={styled.aside}>
              <div className={styled.search}>
                <h2>Search</h2>
                <form action="">
                  <input type="text" placeholder="Search . . ." />
                  <button>
                    <IoSearch />
                  </button>
                </form>
              </div>
              <div className={styled.categories}>
                <h2>Categories</h2>
                <div className={styled.list}>
                  <a href="">Fashion</a>
                  <a href="">Travel</a>
                  <a href="">Picnic</a>
                  <a href="">Model</a>
                </div>
              </div>
              <div className={styled.recentPost}>
                <h2>Recent Post</h2>
                <div className="row g-3">
                  <div className="col-lg-12">
                    <div className={styled.block}>
                      <div className={styled.image}>
                        <img src={recent1} alt="" />
                      </div>
                      <div className={styled.text}>
                        <div className={styled.header}>
                          <p>The Personality Trait That Makes...</p>
                        </div>
                        <div className={styled.date}>
                          <span>FASHION</span>
                          <a href="">- May 19,2019</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={styled.block}>
                      <div className={styled.image}>
                        <img src={recent2} alt="" />
                      </div>
                      <div className={styled.text}>
                        <div className={styled.header}>
                          <p>The Personality Trait That Makes...</p>
                        </div>
                        <div className={styled.date}>
                          <span>FASHION</span>
                          <a href="">- May 19,2019</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={styled.block}>
                      <div className={styled.image}>
                        <img src={recent3} alt="" />
                      </div>
                      <div className={styled.text}>
                        <div className={styled.header}>
                          <p>The Personality Trait That Makes...</p>
                        </div>
                        <div className={styled.date}>
                          <span>FASHION</span>
                          <a href="">- May 19,2019</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={styled.block}>
                      <div className={styled.image}>
                        <img src={recent4} alt="" />
                      </div>
                      <div className={styled.text}>
                        <div className={styled.header}>
                          <p>The Personality Trait That Makes...</p>
                        </div>
                        <div className={styled.date}>
                          <span>FASHION</span>
                          <a href="">- May 19,2019</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styled.productTags}>
                <h2>Product Tags</h2>
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
            <div className={styled.blogs}>
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className={styled.card}>
                    <div className={styled.image}>
                      <img src={blog1} alt="" />
                    </div>
                    <div className={styled.info}>
                      <div className={styled.head}>
                        <p>The Personality Trait That Makes People Happier</p>
                      </div>
                      <div className={styled.date}>
                        <span>TRAVEL </span>
                        <a href=""> -May 19,2019</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styled.card}>
                    <div className={styled.image}>
                      <img src={blog2} alt="" />
                    </div>
                    <div className={styled.info}>
                      <div className={styled.head}>
                        <p>
                          This was one of our first days in Hawaii last week.
                        </p>
                      </div>
                      <div className={styled.date}>
                        <span>FASHION</span>
                        <a href="">-May 19,2019</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styled.card}>
                    <div className={styled.image}>
                      <img src={blog3} alt="" />
                    </div>
                    <div className={styled.info}>
                      <div className={styled.head}>
                        <p>
                          Last week I had my first work trip of the year to
                          Sonoma Valley
                        </p>
                      </div>
                      <div className={styled.date}>
                        <span>TRAVEL</span>
                        <a href="">-May 19,2019</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styled.card}>
                    <div className={styled.image}>
                      <img src={blog4} alt="" />
                    </div>
                    <div className={styled.info}>
                      <div className={styled.head}>
                        <p>
                          Happppppy New Year! I know I am a little late on this
                          post
                        </p>
                      </div>
                      <div className={styled.date}>
                        <span>FASHION</span>
                        <a href="">-May 19,2019</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styled.card}>
                    <div className={styled.image}>
                      <img src={blog5} alt="" />
                    </div>
                    <div className={styled.info}>
                      <div className={styled.head}>
                        <p>
                          Absolue collection. The Lancome team has been one…
                        </p>
                      </div>
                      <div className={styled.date}>
                        <span>MODEL</span>
                        <a href="">-May 19,2019</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styled.card}>
                    <div className={styled.image}>
                      <img src={blog6} alt="" />
                    </div>
                    <div className={styled.info}>
                      <div className={styled.head}>
                        <p>
                          Writing has always been kind of therapeutic for me
                        </p>
                      </div>
                      <div className={styled.date}>
                        <span>FASHION</span>
                        <a href="">-May 19,2019</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
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

export default Blog;
