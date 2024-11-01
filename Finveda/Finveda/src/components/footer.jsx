function Footer() {
    return (
      <footer id="footer" className="footer-area pt-120">
        <div className="container">
          <div
            className="subscribe-area wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="subscribe-content mt-45">
                  <h2 className="subscribe-title">
                    Subscribe Our Newsletter <span>get regular updates</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="subscribe-form mt-50">
                  <form action="#">
                    <input type="text" placeholder="Enter Email" />
                    <button className="main-btn" onClick="event.preventDefault(); openModal();">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widget pb-100">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="footer-about mt-50 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <p className="text">
                    We at FinVeda aim to make you a stock market Guru easy with our AI powered teaching and financial blogs.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-5 col-md-7 col-sm-7">
                <div className="footer-link d-flex mt-50 justify-content-between">
                  <div
                    className="link-wrapper wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    <div className="footer-title">
                      <h4 className="title">Quick Link</h4>
                    </div>
                    <ul className="link quick-links">
                      <li><a href="./blogs/privacy-policy.html">Privacy Policy</a></li>
                      <li><a href="./blogs/refund-policy.html">Refund Policy</a></li>
                      <li><a href="./blogs/terms-of-service.html">Terms of Service</a></li>
                    </ul>
                  </div>
                  <div
                    className="link-wrapper wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                  >
                    <div className="footer-title">
                      <h4 className="title">Resources</h4>
                    </div>
                    <ul className="link">
                      <li><a href="./index.html">Home</a></li>
                      <li><a href="./login.html">Page</a></li>
                      <li><a href="./blog.html">Blog</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-5">
                <div
                  className="footer-contact mt-50 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.8s"
                >
                  <div className="footer-title contact-sec">
                    <h4 className="title ">Contact Us</h4>
                  </div>
                  <ul className="contact">
                    <li>ayush1337@hotmail.com</li>
                    <li>fin-veda.vercel.app</li>
                    <li>Delhi, India</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright d-sm-flex justify-content-between">
                  <div className="copyright-content">
                    <p className="text">
                      © <span id="copyright-year">2024</span> FinVeda. All rights reserved, Built with ♥ in India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-2"></div>
      </footer>
    );
  }
  
  export default Footer;