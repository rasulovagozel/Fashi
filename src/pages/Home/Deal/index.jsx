import React from "react";
import styled from "./deal.module.scss";

const Deal = () => {
  return (
    <section className={styled.deal}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.time}>
              <div className="row">
                <div className="col-lg-7">
                  <div className={styled.texts}>
                    <h2>Deal Of The Week</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                    <span>$35.00 <a href="">/HanBag</a> </span>
                    <div className={styled.hours}>
                      <div className={styled.block}>
                        <h3>30</h3>
                        <p>DAYS</p>
                      </div>
                      <div className={styled.block}>
                        <h3>04</h3>
                        <p>HRS</p>
                      </div>
                      <div className={styled.block}>
                        <h3>25</h3>
                        <p>MINS</p>
                      </div>
                      <div className={styled.block}>
                        <h3>24  </h3>
                        <p>SECS</p>
                      </div>
                    </div>
                    <button>SHOP NOW</button>
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

export default Deal;
