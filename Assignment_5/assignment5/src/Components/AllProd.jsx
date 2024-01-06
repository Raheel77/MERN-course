const AllProd = (props) => {
  const {title, shortText, products , onChildEvent} = props;


  return (
    <div className="product-area pb-60">
      <div className="container">
        <div className="section-title text-center mb-40">
          <h2>{title}</h2>
          <p>{shortText}</p>
        </div>
        <div className="row">
          {
            products.map(function (productItem) {
              const {type, title, price, woDiscountPrice = '', image,} = productItem;

              const handleSomeEvent = () => {
                onChildEvent(productItem);
              }

              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" onClick={handleSomeEvent}>
                  <div className="product-wrap mb-35">
                    <div className="product-img mb-15">
                      <img src={image} alt="product"/>
                    </div>
                    <div className="product-content">
                      <span>{type}</span>
                      <h4>{title}</h4>
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
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default AllProd;