import React from "react";
import styled from "./photos.module.scss";
import { FaInstagram } from "react-icons/fa";

const Photos = () => {
  return (
    <section className={styled.photos}>
      <div className={styled.image1}>
        <div className={styled.icon}>
          <span>
            <FaInstagram />
          </span>
          <p>colorlib_Collection</p>
        </div>
      </div>
      <div className={styled.image2}>
        <div className={styled.icon}>
          <span>
            <FaInstagram />
          </span>
          <p>colorlib_Collection</p>
        </div>
      </div>
      <div className={styled.image3}>
        <div className={styled.icon}>
          <span>
            <FaInstagram />
          </span>
          <p>colorlib_Collection</p>
        </div>
      </div>
      <div className={styled.image4}>
        <div className={styled.icon}>
          <span>
            <FaInstagram />
          </span>
          <p>colorlib_Collection</p>
        </div>
      </div>
      <div className={styled.image5}>
        <div className={styled.icon}>
          <span>
            <FaInstagram />
          </span>
          <p>colorlib_Collection</p>
        </div>
      </div>
      <div className={styled.image6}>
        <div className={styled.icon}>
          <span>
            <FaInstagram />
          </span>
          <p>colorlib_Collection</p>
        </div>
      </div>
    </section>
  );
};

export default Photos;
