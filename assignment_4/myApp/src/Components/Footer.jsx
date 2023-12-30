const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <p>© 2023 Your Company Name. All Rights Reserved.</p>
                    </div>

                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
}
export default Footer