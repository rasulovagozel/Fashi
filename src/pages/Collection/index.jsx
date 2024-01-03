import React from "react";
import styled from "./collection.module.scss";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Collection = () => {
  return (
    <section className={styled.collection}>
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
                <p>Collection</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
