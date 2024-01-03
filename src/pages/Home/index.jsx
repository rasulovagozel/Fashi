import React, { useEffect } from "react";
import styled from "./home.module.scss";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import banner1 from "../../assets/homePhotos/banner1.webp";
import banner2 from "../../assets/homePhotos/banner2.webp";
import banner3 from "../../assets/homePhotos/banner3.webp";
import Clothes from "./Clothes";
import Deal from "./Deal";
import MensClothes from "./MensClothes";
import Photos from "./Photos";
import FromBlog from "./FromBlog";
import Delivery from "./Delivery";
import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {
  useEffect(()=>{
    Aos.init();
   },[])
  return (
    <section className={styled.home}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          992: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <section className={styled.swiper1}>
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className={styled.texts}>
                    <span data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">BAG,KIDS</span>
                    <h2 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Black friday</h2>
                    <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <button data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">SHOP NOW</button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styled.sale} data-aos="fade-up-left" data-aos-delay="100" data-aos-duration="1000">
                    <span>SALE</span>
                    <span> </span>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styled.swiper2}>
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className={styled.texts}>
                    <span data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">BAG,KIDS</span>
                    <h2 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Black friday</h2>
                    <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <button data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">SHOP NOW</button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styled.sale}>
                    <span>SALE</span>
                    <span> </span>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
      <section className={styled.categoryPart}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className={styled.card}>
                <img src={banner1} alt="" />
                <button>Men`s</button>
                <button className={styled.hover}></button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styled.card}>
                <img src={banner2} alt="" />
                <button>Women`s</button>
                <button className={styled.hover}></button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styled.card}>
                <img src={banner3} alt="" />
                <button>Kid`s</button>
                <button className={styled.hover}></button>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Clothes />
        <Deal />
        <MensClothes />
        <Photos />
        <FromBlog />
        <Delivery />
    </section>
  );
};

export default Home;
