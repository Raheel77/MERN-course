const Footer = (props) => {
    // const {title1, title2, image} = props;
    return (
        <footer className="footer-area">
            <div className="footer-top bg-gray pt-120 pb-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12 col-sm-6">
                            <div className="footer-widget mb-30">
                                {/*<a href="#"><img src="./images//logo-1.png" alt="logo"></a>*/}
                                <div className="footer-social">
                                    <span>Follow us:</span>
                                    <ul>
                                        <li><a href="#"><i className=" ti-facebook "></i></a></li>
                                        <li><a href="#"><i className=" ti-twitter-alt "></i></a></li>
                                        <li><a href="#"><i className=" ti-pinterest "></i></a></li>
                                        <li><a href="#"><i className=" ti-vimeo-alt "></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 col-sm-6">
                            <div className="footer-widget mb-30 footer-mrg-hm1">
                                <div className="footer-title">
                                    <h3>Useful Link</h3>
                                </div>
                                <div className="footer-list">
                                    <ul>
                                        <li><a href="cart.html">Shopping Cat</a></li>
                                        <li><a href="wishlist.html">WIshlist</a></li>
                                        <li><a href="checkout.html">Chekout</a></li>
                                        <li><a href="contact.html">Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-12 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="footer-title">
                                    <h3>About us</h3>
                                </div>
                                <div className="footer-list">
                                    <ul>
                                        <li><a href="cart.html">About</a></li>
                                        <li><a href="wishlist.html">Products</a></li>
                                        <li><a href="checkout.html">Terms and conditions</a></li>
                                        <li><a href="contact.html">Help Center</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="footer-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <div className="subscribe-style mt-45">
                                    <p>Subscribe to get all new updates</p>
                                    <div id="mc_embed_signup" className="subscribe-form mt-20">
                                        <form id="mc-embedded-subscribe-form" className="validate subscribe-form-style"
                                              noValidate="" target="_blank" name="mc-embedded-subscribe-form"
                                              method="post"
                                              action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                            <div id="mc_embed_signup_scroll" className="mc-form">
                                                <input className="email" type="email" required=""
                                                       placeholder="Enter your email"
                                                       name="EMAIL" value="" />
                                                    <div className="mc-news" aria-hidden="true">
                                                        <input type="text" value="" tabIndex="-1"
                                                               name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                                    </div>
                                                    <div className="clear">
                                                        <input id="mc-embedded-subscribe" className="button"
                                                               type="submit"
                                                               name="subscribe" value="" />
                                                    </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-gray-2 ptb-20">
                <div className="container">
                    <div className="copyright text-center">
                        <p>Copyright © <a href="#">Daxone</a>. All Right Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
)
}

export default Footer;