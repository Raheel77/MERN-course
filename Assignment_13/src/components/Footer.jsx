import React from 'react'
import logo from '../assets/images/logo.png'


export const Footer = () => {
  return (
<>
    <div className="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-heading">
              <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
              <span>Details to details is what makes Hexashop different from the other themes.</span>
            </div>
            <form id="subscribe" action="" method="get">
              <div className="row">
                <div className="col-lg-5">
                  <fieldset>
                    <input name="name" type="text" id="name" placeholder="Your Name" required=""/>
                  </fieldset>
                </div>
                <div className="col-lg-5">
                  <fieldset>
                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address"
                           required="" />
                  </fieldset>
                </div>
                <div className="col-lg-2">
                  <fieldset>
                    <button type="submit" id="form-submit" className="main-dark-button">
                      <i className="fa fa-paper-plane"></i></button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Store Location:<br/><span>Sunny Isles Beach, FL 33160, United States</span></li>
                  <li>Phone:<br/><span>010-020-0340</span></li>
                  <li>Office Location:<br/><span>North Miami Beach</span></li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Work Hours:<br/><span>07:30 AM - 9:30 PM Daily</span></li>
                  <li>Email:<br/><span>info@company.com</span></li>
                  <li>Social Media:<br/><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a
                    href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="first-item">
            <div className="logo">
              <img src="assets/images/white-logo.png" alt="hexashop ecommerce templatemo" />
            </div>
            <ul>
              <li><a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
              <li><a href="#">hexashop@company.com</a></li>
              <li><a href="#">010-020-0340</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <h4>Shopping &amp; Categories</h4>
          <ul>
            <li><a href="#">Men’s Shopping</a></li>
            <li><a href="#">Women’s Shopping</a></li>
            <li><a href="#">Kid's Shopping</a></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Homepage</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h4>Help &amp; Information</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Tracking ID</a></li>
          </ul>
        </div>
        <div className="col-lg-12">
          <div className="under-footer">
            <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.

              <br/>Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a>
            </p>
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-behance"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>
)
}
