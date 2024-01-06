import bg_image from "./images/hm1-bg-1.webp";
import users from "./images/review.webp";


const Single = (props) => {
  const {title, image, model, price, type, woDiscountPrice} = props['data'];
  return (
    <>
      <div className="breadcrumb-area bg-img" style={{backgroundImage: `url(${bg_image})`}}>
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h2>Product details page</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">Product details</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="product-details-area pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product-details-img-left">
                <img className="zoompro" src={image} alt="product-details-img"/>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product-details-content pro-details-content-modify">
                <span>Life Style</span>
                <h2>{title}, {model}</h2>
                <div className="product-ratting-review">
                  <div className="product-ratting">
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star-half-o"></i>
                  </div>
                  <div className="product-review">
                    <span>40+ Reviews</span>
                  </div>
                </div>
                <div className="pro-details-color-wrap">
                  <span>Color:</span>
                  <div className="pro-details-color-content">
                    <ul>
                      <li className="green"></li>
                      <li className="yellow"></li>
                      <li className="red"></li>
                      <li className="blue"></li>
                    </ul>
                  </div>
                </div>
                <div className="pro-details-size">
                  <span>Size:</span>
                  <div className="pro-details-size-content">
                    <ul>
                      <li><a href="/#">s</a></li>
                      <li><a href="/#">m</a></li>
                      <li><a href="/#">xl</a></li>
                      <li><a href="/#">xxl</a></li>
                    </ul>
                  </div>
                </div>
                <div className="pro-details-price-wrap">
                  <div className="product-price">
                    <span>{price}</span><span className="old">{woDiscountPrice}</span>
                  </div>
                  <div className="dec-rang"><span>- 30%</span></div>
                </div>
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <div className="dec qtybutton">-</div>
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value="01"/>
                    <div className="inc qtybutton">+</div>
                  </div>
                </div>
                <div className="pro-details-compare-wishlist">
                  <div className="pro-details-compare">
                    <a title="Add To Compare" href="/#"><i className="la la-retweet"></i> Compare</a>
                  </div>
                  <div className="pro-details-wishlist">
                    <a title="Add To Wishlist"
                       href="/#"><i
                      className="la la-heart-o"></i> Add to wish list</a>
                  </div>
                </div>
                <div className="pro-details-buy-now btn-hover btn-hover-radious">
                  <a href="/#">Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-review-wrapper pb-90">
        <div className="container">
          <div className="row">
            <div className="ms-auto me-auto col-lg-10">
              <div className="dec-review-topbar nav mb-40">
                <a data-bs-toggle="tab" href="#des-details1">Description</a>
                <a className="active" data-bs-toggle="tab" href="#des-details2">Specification</a>
                <a data-bs-toggle="tab" href="#des-details3">Reviews</a>
              </div>
              <div className="tab-content dec-review-bottom">
                <div id="des-details1" className="tab-pane">
                  <div className="description-wrap">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text. The point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text. It is a long established fact
                      that a reader will be distracted by the readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                  </div>
                </div>
                <div id="des-details2" className="tab-pane active">
                  <div className="specification-wrap table-responsive">
                    <table>
                      <tbody>
                      <tr>
                        <td className="width1">Name / Model</td>
                        <td>{title}, {model}</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>Categories</td>
                      </tr>
                      <tr>
                        <td className="width1">Models</td>
                        <td>{model}</td>
                      </tr>
                      <tr>
                        <td className="width1">Categories</td>
                        <td>{type}</td>
                      </tr>
                      <tr>
                        <td className="width1">Size</td>
                        <td>60’’ x 40’’</td>
                      </tr>
                      <tr>
                        <td className="width1">Display Port</td>
                        <td>Multi</td>
                      </tr>
                      <tr>
                        <td className="width1">Media</td>
                        <td>Brightside</td>
                      </tr>
                      <tr>
                        <td className="width1">Color</td>
                        <td>Black, White</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="des-details3" className="tab-pane">
                  <div className="dec-review-wrap mb-50">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="dec-review-img-wrap">
                          <div className="dec-review-img">
                            <img src={users} alt="review"/>
                          </div>
                          <div className="dec-client-name">
                            <h4>Jonathon Doe</h4>
                            <div className="dec-client-rating">
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star-half-o"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="dec-review-content">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters,</p>
                          <div className="review-content-bottom">
                            <div className="review-like">
                              <span><i className="la la-heart-o"></i> 24 Likes</span>
                            </div>
                            <div className="review-date">
                              <span>25 Jun 2019</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dec-review-wrap mb-50">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="dec-review-img-wrap">
                          <div className="dec-review-img">
                            <img src={users} alt="review"/>
                          </div>
                          <div className="dec-client-name">
                            <h4>Jonathon Doe</h4>
                            <div className="dec-client-rating">
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star-half-o"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="dec-review-content">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters,</p>
                          <div className="review-content-bottom">
                            <div className="review-like">
                              <span><i className="la la-heart-o"></i> 24 Likes</span>
                            </div>
                            <div className="review-date">
                              <span>25 Jun 2019</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dec-review-wrap">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="dec-review-img-wrap">
                          <div className="dec-review-img">
                            <img src={users} alt="review"/>
                          </div>
                          <div className="dec-client-name">
                            <h4>Jonathon Doe</h4>
                            <div className="dec-client-rating">
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star-half-o"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="dec-review-content">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters,</p>
                          <div className="review-content-bottom">
                            <div className="review-like">
                              <span><i className="la la-heart-o"></i> 24 Likes</span>
                            </div>
                            <div className="review-date">
                              <span>25 Jun 2019</span>
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
    </>
  )
}

export default Single;