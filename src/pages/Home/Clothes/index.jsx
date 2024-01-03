import React from "react";
import styled from "./clothes.module.scss";
import clothes1 from "../../../assets/homePhotos/women2.webp";
import clothes2 from "../../../assets/homePhotos/women3.webp";
import clothes3 from "../../../assets/homePhotos/women4.webp";
import clothes4 from "../../../assets/homePhotos/women5.webp";
import { Navigation, Autoplay,Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoPlus } from "react-icons/go";
import { MdShare } from "react-icons/md";

const Clothes = () => {
  return (
    <section className={styled.clothes}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3">
            <div className={styled.womenCard}>
              <div className={styled.text}>
                <h2>Women’s</h2>
                <a href="">Discover More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className={styled.clothesImages}>
              <div className={styled.list}>
                <a href="" className={styled.active}>
                  Clothings
                </a>
                <a href="">Handbag</a>
                <a href="">Shoes</a>
                <a href="">Accessories</a>
              </div>
              <div className={styled.swiperClothes}>
                <Swiper
                  modules={[Navigation, Autoplay,Pagination]}
                  spaceBetween={50}
                  slidesPerView={3}
                  breakpoints={{
                    992: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    500: {
                      slidesPerView: 1,
                    },
                  }}
                  autoplay={{ delay: 2000 }}
                  navigation={{
                    prevEl: `.${styled.customPrevButton}`,
                    nextEl: `.${styled.customNextButton}`,
                  }}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={clothes1} alt="" />
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
                          <span>Shoes</span>
                          <p>Guangzhou Sweater</p>
                          <div className={styled.price}>
                            <span>$13.00</span>
                          </div>
                        </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={clothes2} alt="" />
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
                            <span>$34.00</span>
                          </div>
                        </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={clothes3} alt="" />
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
                          <p>Converse Shoes</p>
                          <div className={styled.price}>
                            <span>$34.00</span>
                          </div>
                        </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styled.product}>
                        <div className={styled.image}>
                          <img src={clothes4} alt="" />
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
                          <p>Pure Pineapple</p>
                          <div className={styled.price}>
                            <span>$14.00</span>
                            <del>$35.00</del>
                          </div>
                        </div>
                      </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clothes;
