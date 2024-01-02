const TheBest = (props) => {
  const {title, shortText, products} = props;
  console.log(products);
  return (
    <div className="product-area pb-135">
      <div className="container">
        <div className="row">
          <div className="section-title text-center mb-40">
            <h2>{title}</h2>
            <p>{shortText}</p>
          </div>
          <div className="product-slider-active owl-carousel- d-flex  flex-wrap">
            {
              products.map(function (allProducts) {
                const {type, title, price, woDiscountPrice = '', image, best} = allProducts;

                if (best) {
                  return (<div className="product-wrap col-3 p-3">
                      <div className="product-img mb-15">
                        <a href="product-details.html"><img src={image} alt="product"/></a>
                      </div>
                      <div className="product-content">
                        <span>{type}</span>
                        <h4><a href="product-details.html">{title}</a></h4>
                        <div className="price-addtocart">

                          <div className="product-price">
                            <span>{price}</span><span className="old">{woDiscountPrice}</span>
                          </div>

                          <div className="addtocart">
                            <a title="Add To Cart" href="#">+ Add To Cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheBest;