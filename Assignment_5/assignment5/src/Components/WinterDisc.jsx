const WinterDisc = (props) => {
    const {title , discount,shortText,cta,superTitle, image} = props;
    return (
      <div className="discount-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="discount-img">
                <a href="#">
                  <img src={image} alt="discount-img"/>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="discount-content">
                <p>{superTitle}</p>
                <h2>{title} <br/>{discount}</h2>
                <p className="bright-color">{shortText}</p>
                <div className="discount-btn default-btn btn-hover">
                  <a className="btn-color-theme btn-size-md btn-style-outline" href="product-details.html">{cta}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

)
}

export default WinterDisc;