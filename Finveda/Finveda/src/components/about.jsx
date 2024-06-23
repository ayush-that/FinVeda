  function About(){
    return(
        <>
            <section id="about" className="about-area pt-70">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="about-content mt-50 wow fadeInLeftBig"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      <div className="section-title">
                        <div className="line"></div>
                          <h3 className="title">
                            Personalized AI Guru <span>to Teach You Finance</span>
                          </h3>
                        </div>
                        <p className="text">
                          FinVeda's Personalized AI Assistant Arth Sathi revolutionizes financial learning. Tailored to your needs, it simplifies complex finance concepts, providing a dynamic learning experience.
                        </p>
                      <a href="#" className="main-btn">Try it Free</a>
                    </div>
                  </div>
                <div className="col-lg-6">
                  <div
                    className="about-image text-center mt-50 wow fadeInRightBig"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div className="tradingview-widget-container" style="height: 372px;">
                      <div className="tradingview-widget-container__widget"></div>
                        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
                          {{
                            "feedMode" : "all_symbols",
                            "isTransparent": true,
                            "displayMode": "adaptive",
                            "colorTheme": "light",
                            "locale": "in"
                          }}
                        </script>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="about-shape-1">
              <img src="assets/images/about-shape-1.svg" alt="shape" />
            </div>
          </section>
        <section className="about-area pt-70">
          <div className="about-shape-2">
            <img src="assets/images/about-shape-2.svg" alt="shape" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-last">
                <div
                  className="about-content mt-50 wow fadeInLeftBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
              >
              <div className="section-title">
                <div className="line"></div>
                <h3 className="title">
                  Finance Blogs <span> that Don't Suck</span>
                </h3>
              </div>
              <p className="text">
                FinVeda blogs redefine the conventional narrative and are crafted to resonate with readers of all financial backgrounds, making complex concepts digestible.
              </p>
              <a href="./blog.html" className="main-btn">Try it Free</a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div
              className="about-image text-center mt-50 wow fadeInRightBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
                <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
                  {{
                  "interval": "1m",
                  "width": "425",
                  "isTransparent": true,
                  "height": "250",
                  "symbol": "NASDAQ:AAPL",
                  "showIntervalTabs": true,
                  "displayMode": "single",
                  "locale": "en",
                  "colorTheme": "light"
                  }}
                </script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-area pt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="about-content mt-50 wow fadeInLeftBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              >
              <div className="section-title">
                <div className="line"></div>
                <h3 className="title">
                  <span>Market Monitoring</span> Real-time
                </h3>
              </div>
              <p className="text">
                FinVeda fetches live market figures, ensuring users access the most up-to-date information instantly. Be it stock prices, currency rates, or commodity values,
              </p>
              <a href="#" className="main-btn">Try it Free</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-image text-center mt-50 wow fadeInRightBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              >
              <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
                <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
                  {{
                  "symbol": "ECONOMICS:INGDP",
                  "width": "auto",
                  "height": 250,
                  "locale": "in",
                  "dateRange": "ALL",
                  "colorTheme": "light",
                  "isTransparent": true,
                  "autosize": false,
                  "largeChartUrl": ""
                  }}
                </script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-1">
        <img src="assets/images/about-shape-1.svg" alt="shape" />
      </div>
    </section>
    </>   
  )
}

export default About