function Header() {

    return (
        <header className="header-area transparent-bar sticky-bar">
            <div className="main-header-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <div className="logo mt-40">
                                <a href="@"><img src="./images//logo-1.png" alt="logo"/></a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="main-menu menu-common-style menu-lh-1 menu-other-style">
                                <nav>
                                    <ul>
                                        <li className="angle-shape"><a href="index.html">Home</a></li>
                                        <li className="angle-shape"><a href="shop.html">Shop </a></li>
                                        <li><a href="shop.html">Mens</a></li>
                                        <li className="angle-shape"><a href="#">Pages</a></li>
                                        <li className="angle-shape"><a href="blog.html">Blog</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 position-relative">
                            <div className="header-right-wrap mt-40">
                                <div className="cart-wrap common-style">
                                    <button className="cart-active">
                                        <i className="la la-shopping-cart"></i>
                                        <span className="count-style">2 Items</span>
                                    </button>
                                    <div className="shopping-cart-content">
                                        <div className="shopping-cart-top">
                                            <h4>Your Cart</h4>
                                            <a className="cart-close" href="#"><i className="la la-close"></i></a>
                                        </div>
                                        <ul>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src="assets/images/cart/cart-1.jpg"/></a>
                                                    <div className="item-close">
                                                        <a href="#"><i className="sli sli-close"></i></a>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="la la-trash"></i></a>
                                                </div>
                                            </li>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src="assets/images/cart/cart-2.jpg"/></a>
                                                    <div className="item-close">
                                                        <a href="#"><i className="sli sli-close"></i></a>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="la la-trash"></i></a>
                                                </div>
                                            </li>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src="assets/images/cart/cart-3.jpg"/></a>
                                                    <div className="item-close">
                                                        <a href="#"><i className="sli sli-close"></i></a>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="la la-trash"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-cart-bottom">
                                            <div className="shopping-cart-total">
                                                <h4>Subtotal <span className="shop-total">$290.00</span></h4>
                                            </div>
                                            <div className="shopping-cart-btn btn-hover default-btn text-center">
                                                <a className="black-color" href="checkout.html">Continue to Chackout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="search-wrap common-style ml-25">
                                    <button className="search-active">
                                        <i className="la la-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header