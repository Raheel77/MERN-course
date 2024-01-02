const PremiumHome = (props) => {
    const {title1, title2, image,cta} = props;
    return (
        <div className="banner-area pt-100 pb-100">
            <div className="container">
                <div className="bg-img pt-100 pb-100 learn-banner" style={{backgroundImage: `url(${image})`}}>
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-11">
                            <div className="banner-content">
                                <h2>{title1}<br/>{title2}</h2>
                                <a href="product-details.html">{cta}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumHome;