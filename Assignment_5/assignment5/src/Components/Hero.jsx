import bg_image from "./images/hm1-bg-1.webp";

const Hero = (props) => {
  const {discount, title, shortText, image, cta} = props;
  return (
    <div className="slider-area">
      <div className="slider-active owl-carousel- nav-style-1 dot-style-1 nav-dot-left">
        <div className="single-slider-height-100vh bg-img" style={{backgroundImage: `url(${bg_image})`}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12 col-sm-6">

                <div className="slider-sin-img-hm1 slider-sin-mrg1 slider-animated-1">
                  <img className="animated" src={image} alt=""/>
                </div>

              </div>
              <div className="col-lg-7 col-md-6 col-12 col-sm-6">
                <div className="slider-content-1 slider-animated-1 ml-70">
                  <h3 className="animated">{discount}</h3>
                  <h1 className="animated">{title}</h1>
                  <p className="animated">{shortText}</p>
                  <div className="slider-btn-1 default-btn btn-hover">

                    <a className="animated btn-color-theme btn-size-md btn-style-outline"
                       href="/">{cta}</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;