const Footer = () => {
    return (
        <footer className="footer-background-color text-light pt-5">
            <div className="container">
                <div className="row">

                    {/* Branding Section */}
                    <div className="col-md-4 mb-4">
                        <h2 className="text-info">
                            <span className="break">Breakfast</span>
                            <span className="chap">Chap</span>
                        </h2>
                        <p>
                            Start your day right with a perfect breakfast. Whether it's sweet or savory,
                            quick or leisurely, we’ve got something to jumpstart your morning.
                        </p>
                        <p className="small text-muted">#StartStrongWithBreakfast</p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-info">Get in Touch</h5>
                        <p>
                            <i className="fas fa-phone-alt me-2"></i>
                            +254 700 000 000
                        </p>
                        <p>
                            <i className="fas fa-envelope me-2"></i>
                            support@breakfastchap.com
                        </p>
                        <p>
                            <i className="fas fa-comments me-2"></i>
                            <a href="/chat us" className="text-decoration-none text-white">
                                Live Chat Assistant
                            </a>
                        </p>

                    </div>

                    {/* Newsletter + Socials */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-info">Stay Connected</h5>
                        <form className="mb-3">
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email"
                                    aria-label="Email"
                                    required
                                />
                                <button className="btn btn-info text-white" type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </form>

                        <div>
                            <a href="https://facebook.com" className="me-3 text-white">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="https://instagram.com" className="me-3 text-white">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="https://twitter.com" className="me-3 text-white">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="https://tiktok.com" className="text-white">
                                <i className="fab fa-tiktok fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer bottom section */}
                <div className="text-center mt-4 border-top pt-3">
                    <small className="text-muted">
                        &copy; 2025 BreakfastChap. Developed by Evans Musembi. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
