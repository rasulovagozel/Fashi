import React from 'react'
import styled from "./delivery.module.scss"
import icon1 from "../../../assets/icon/icon1.webp"
import icon2 from "../../../assets/icon/icon2.webp"

const Delivery = () => {
  return (
    <section className={styled.delivery}>
      <div className="container">
        <div className="row g-0">
            <div className="col-lg-4">
                <div className={styled.card}>
                    <div className={styled.image}>
                        <img src={icon1} alt="" />
                    </div>
                    <div className={styled.text}>
                      <p>FREE SHIPPING</p>
                      <span>For all order over 99$</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className={styled.card}>
                    <div className={styled.image}>
                        <img src={icon2} alt="" />
                    </div>
                    <div className={styled.text}>
                      <p>DELIVERY ON TIME</p>
                      <span>If good have prolems</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className={styled.card}>
                    <div className={styled.image}>
                        <img src={icon1} alt="" />
                    </div>
                    <div className={styled.text}>
                      <p>SECURE PAYMENT</p>
                      <span>100% secure payment</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery