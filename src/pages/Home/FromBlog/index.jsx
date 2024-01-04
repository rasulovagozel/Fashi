import React from "react";
import styled from "./fromblog.module.scss";
import latest1 from "../../../assets/homePhotos/latest1.webp";
import latest2 from "../../../assets/homePhotos/latest2.webp";
import latest3 from "../../../assets/homePhotos/latest3.webp";
import { IoIosCalendar } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";

const FromBlog = () => {
  return (
    <section className={styled.fromBlog}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-12">
            <div className={styled.header}>
              <h2>From The Blog</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={styled.card}>
                  <div className={styled.image}>
                    <img src={latest1} alt="" />
                  </div>
                  <div className={styled.numbers}>
                    <div className={styled.date}>
                      <span>
                        <IoIosCalendar />
                      </span>
                      <p>May 4,2019</p>
                    </div>
                    <div className={styled.comment}>
                      <span>
                        <FaRegComment />
                      </span>
                      <p>5</p>
                    </div>
                  </div>
                  <div className={styled.text}>
                    <h3>The Best Street Style From London Fashion Week</h3>
                    <h5>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={styled.card}>
                  <div className={styled.image}>
                    <img src={latest2} alt="" />
                  </div>
                  <div className={styled.numbers}>
                    <div className={styled.date}>
                      <span>
                        <IoIosCalendar />
                      </span>
                      <p>May 4,2019</p>
                    </div>
                    <div className={styled.comment}>
                      <span>
                        <FaRegComment />
                      </span>
                      <p>5</p>
                    </div>
                  </div>
                  <div className={styled.text}>
                    <h3>Vogue`s Ultimate Guide To Autumn/Winter 2019 Shoes</h3>
                    <h5>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={styled.card}>
                  <div className={styled.image}>
                    <img src={latest3} alt="" />
                  </div>
                  <div className={styled.numbers}>
                    <div className={styled.date}>
                      <span>
                        <IoIosCalendar />
                      </span>
                      <p>May 4,2019</p>
                    </div>
                    <div className={styled.comment}>
                      <span>
                        <FaRegComment />
                      </span>
                      <p>5</p>
                    </div>
                  </div>
                  <div className={styled.text}>
                    <h3>How To Brighten Your Wardrobe With A Dash Of Lime</h3>
                    <h5>Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat</h5>
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

export default FromBlog;
