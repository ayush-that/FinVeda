function Blog(){
    return(
        <section id="blog" className="blog-area pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title pb-35">
                            <div className="line"></div>
                            <h3 className="title"><span>Our Recent</span> Blog Posts</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-lg-4 col-md-7">
                        <div
                        className="single-blog mt-30 wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.2s">
                            <div className="blog-image animate-ping">
                                <img src="assets/images/blog-1.jpg" alt="blog" />
                            </div>
                            <div className="blog-content">
                                <p className="text">
                                    How to deal with Unknown Risks in Life and Investing?
                                </p>
                                <a className="more" href="./blogs/how-to-deal-with-unknown-risks-in-life-and-investing.html">
                                    Learn More <i className="lni-chevron-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7">
                        <div
                        className="single-blog mt-30 wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                        >
                            <div className="blog-image">
                                <img src="assets/images/blog-2.jpg" alt="blog" />
                            </div>
                            <div className="blog-content">
                                <p className="text">
                                    How to 10x your Generational Wealth?
                                </p>
                                <a className="more" href="./blogs/how-to-10x-your-generational-wealth.html"
                                    >Learn More <i className="lni-chevron-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7">
                        <div
                        className="single-blog mt-30 wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.8s"
                        >
                        <div className="blog-image">
                            <img src="assets/images/blog-3.jpg" alt="blog" />
                        </div>
                        <div className="blog-content">
                            <p className="text">
                            Why investing in stocks is better than fixed deposit?
                            </p>
                        <a className="more" href="./blogs/why-investing-in-stocks-is-better-than-fixed-deposit.html"
                            >Learn More <i className="lni-chevron-right"></i
                        ></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
)}
export default Blog