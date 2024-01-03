import React from "react";
import styled from "./contact.module.scss";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { PiEnvelope } from "react-icons/pi";

const Contact = () => {
  return (
    <section className={styled.contact}>
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
                <p>Contact</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <hr />
          </div>
          <div className="col-lg-12">
            <div className={styled.location}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd"
                className={styled.map}
              ></iframe>
            </div>
          </div>
          <div className="col-lg-12">
            <div className={styled.contactPart}>
              <div
                className="row g-3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="col-lg-5">
                  <div className={styled.contactUs}>
                    <h2>Contacts Us</h2>
                    <h4>
                      Contrary to popular belief, Lorem Ipsum is simply random
                      text. It has roots in a piece of classical Latin
                      literature from 45 BC, maki years old.
                    </h4>
                    <div className={styled.infos}>
                      <div className={styled.address}>
                        <div className={styled.icon}>
                          <span>
                            <SlLocationPin />
                          </span>
                        </div>
                        <div className={styled.text}>
                          <p>Address:</p>
                          <span>60-49 Road 11378 New York</span>
                        </div>
                      </div>
                      <div className={styled.phone}>
                        <div className={styled.icon}>
                          <span>
                            <MdOutlinePhoneIphone />
                          </span>
                        </div>
                        <div className={styled.text}>
                          <p>Phone:</p>
                          <span>+65 11.188.888</span>
                        </div>
                      </div>
                      <div className={styled.email}>
                        <div className={styled.icon}>
                          <span>
                            <PiEnvelope />
                          </span>
                        </div>
                        <div className={styled.text}>
                          <p>Email:</p>
                          <span>hellocolorlib@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styled.leaveComment}>
                    <h2>Leave A Comment</h2>
                    <h4>
                      Our staff will call back later and answer your questions.
                    </h4>
                    <div className={styled.form}>
                      <div className="row g-5">
                        <div className="col-lg-12">
                          <div
                            className="row g-5"
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className={styled.input}>
                                <input type="text" placeholder="Your name" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className={styled.input}>
                                <input type="text" placeholder="Your email" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="row g-5">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className={styled.message}>
                                <textarea placeholder="Your message"></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className={styled.button}>
                                <button>SEND MESSAGE</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Contact;
