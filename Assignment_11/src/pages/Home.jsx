import React from "react";

import {products_data} from '../utils/products_data'
import ProductSlider from "../components/Slider";


const Clothes = products_data.filter((currentItem) => {
  const {category: {name, image}} = currentItem;
  return name === 'Clothes'
})


console.log(Clothes);
export const Home = () => {
  return (
    <>
      <div className="main-banner" id="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <div className="thumb">
                  <div className="inner-content">
                    <h4>We Are Hexashop</h4>
                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                    <div className="main-border-button">
                      <a href="#">Purchase Now!</a>
                    </div>
                  </div>
                  <img src="assets/images/left-banner-image.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Clothes</h4>
                          <span>Best Clothes For Women</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Clothes</h4>
                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                            <div className="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/images/baner-right-image-01.jpg"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Furniture</h4>
                          <span>Best Furniture to use </span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Furniture</h4>
                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                            <div className="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/images/baner-right-image-02.jpg"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Electronics</h4>
                          <span>Best Electronics for use</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Electronics</h4>
                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                            <div className="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/images/baner-right-image-03.jpg"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Accessories</h4>
                          <span>Best Trend Accessories</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Accessories</h4>
                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                            <div className="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/images/baner-right-image-04.jpg"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductSlider/>

    </>
  );
};
