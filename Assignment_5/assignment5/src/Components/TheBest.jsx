const TheBest = (props) => {
  const {title, shortText, products,onChildEvent} = props;
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
              products.map(function (allProducts,index) {
                const {type, title, price, woDiscountPrice = '', image, best} = allProducts;
                const handleSomeEvent = () => {
                  onChildEvent(allProducts);
                }
                if (best) {
                  return (<div className="product-wrap col-3 p-3 " style={{cursor:'pointer'}} onClick={handleSomeEvent} key={index}>
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
                            <a title="Add To Cart" role={'button'}>+ Add To Cart</a>
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