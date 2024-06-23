
function header(){
    return(
    <header className="header-area">
      <div className="navbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                  >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="page-scroll" href="./index.html">Home 🏡</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="./trends.html">Trends 📈</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="./tools/sip.html">Tools 🔧</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="./blog.html">Blogs 📰</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="./quiz.html">Quiz 🤔</a>
                    </li>
                  </ul>
                </div>
                <div className="navbar-btn d-none d-sm-inline-block">
                  <a className="main-btn" data-scroll-nav="0" href="#"
                    onClick="openModal()" >Login/Register 💻</a
                    >
                </div>
            </nav>
          </div>
        </div>
      </div>
      </div>
      <div
        id="home"
        className="header-hero bg_cover"
        style="background-image: url(assets/images/banner-bg.svg)"
        >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="header-hero-content text-center">
                <h3
                  className="header-sub-title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                  >
                  Say 👋🏼 to FinVeda
                </h3>
                <h2
                  className="header-title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.5s"
                  >
                  your savvy financial companion
                </h2>
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.8s"
                  >
                  Wanna learn how to grow your money to become rich? We have made becoming a stock market Guru easy with our AI powered finance advisor - <b>Arth Sathi 🤵🏻</b>
                </p>
                {/* The Modal */}
                <div id="myModal" className="modal">
                   {/* Modal content  */}
                  <div className="modal-content">
                    <span className="close d-flex justify-content-end">&times;</span>
                    <div className="mt-3">
                      <p>
                      <h3 className="join">Login to join us....</h3>
                      </p>
                      <form className="px-3 py-4">
                        <div className="form-group">
                          <label className="d-flex">Username</label>
                          <input type="text" placeholder="Username" className="form-control"/>
                        </div>
                        <div className="form-group">
                          <label className="d-flex">Password</label>
                          <input type="text" placeholder="Password" className="form-control"/>
                        </div>
                        <div className="form-check d-flex">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">
                          Remember me
                          </label>
                        </div>
                      </form>
                      <button className="main-btn mt-2 w-100 mb-3">Sign in</button>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="main-btn wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.1s"
                  onClick="alert('💬 Click on the chat icon located at the bottom right of your screen to talk with your Arth Saathi.')"
                  >Chat with ArthaSathi 💬</a
                  >
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="header-hero-image text-center wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="1.4s"
                >
                <div className="anim" data-tilt="">
                  <img src="assets/images/header-hero.png" alt="hero" style="animation: float 1.5s ease-in-out infinite;" data-tilt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-1" className="particles"></div>
      </div>
    </header>
)}

export default header