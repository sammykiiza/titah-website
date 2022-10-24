import React from 'react'

function Footer() {
    return (
        <footer className="footer widget-footer bg-img11 ttm-bgcolor-black ttm-bg ttm-bgimage-yes clearfix">
            <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div className="first-footer ttm-textcolor-white">
                <div className="container">
                    <div className="row">
                        <div className="widget-area col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <aside className="widget widget-text">
                                <div className="ttm-newstter-box">
                                    <h4>Subscribe to <span className="ttm-textcolor-skincolor">Our Newsletter</span></h4>
                                    <p>No spam message from us, only give you latest offer which is best for you and your business</p>
                                    <form className="mc4wp-form mc4wp-form-24" method="post" data-id="24" data-name="Newsletter Form">
                                        <div className="mc4wp-form-fields">
                                            <div className="mailchimp-inputbox">
                                                <input type="email" name="EMAIL" placeholder="Your email address.." required />
                                                <input type="submit" value="Subscribe Now" />
                                            </div>
                                        </div>
                                        <div className="mc4wp-response"></div>
                                    </form>
                                </div>
                            </aside>
                        </div>
                    </div>
                    {/* row end */}
                </div>
            </div>
            <div className="second-footer">
                <div className="container">
                    <div className="second-footer-inner">
                        <div className="row">
                            <div className="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="widget widget-out-link clearfix">
                                    <h4 className="widget-title">Contact Us</h4>
                                    <ul className="widget-contact">
                                        <li><i className="fa fa-map-marker"></i>Themeforest, Envanto HQ<br />24 Fifth st., Los Angeles, USA</li>
                                        <li><i className="fa fa-envelope-o"></i><a href="!#">info@example.com</a></li>
                                        <li><i className="fa fa-phone"></i>Phone: (+01) 123 456 7890 <br />Support: (+01) 123 456 7890  </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="widget widget_nav_menu clearfix">
                                    <h4 className="widget-title">Our Services </h4>
                                    <ul className="menu-footer-services">
                                        <li><a href="!#">Our Story</a></li>
                                        <li><a href="!#">Our Gallery</a></li>
                                        <li><a href="!#">Event Guides</a></li>
                                        <li><a href="!#">About Us</a></li>
                                        <li><a href="!#">Latest News</a></li>
                                        <li><a href="!#">Pricing & Terms</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="widget widget-out-link clearfix ">
                                    <h4 className="widget-title">Recent Posts</h4>
                                    <ul className="widget-post ttm-recent-post-list">
                                        <li>
                                            <a href="!#"><img src={require("../assets/images/blog/blog7.jpg")} alt="post-img" /></a>
                                            <a href="single-blog.html">Our Biggest Summer Meetup</a>
                                            <span className="post-date clearfix">August 1, 2018</span>
                                        </li>
                                        <li>
                                            <a href="!#"><img src={require("../assets/images/blog/blog3.jpg")} alt="post-img" /></a>
                                            <a href="single-blog.html">5 Steps To Planning A Sweet Party</a>
                                            <span className="post-date clearfix">August 1, 2018</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="widget widget-out-link clearfix ">
                                    <h4 className="widget-title">Frequent Questions</h4>
                                    <ul className="widget-text">
                                        <li><a href="!#">How Can I Set An Event? </a></li>
                                        <li><a href="!#">What Venues Do You Use? </a></li>
                                        <li><a href="!#">Event Catalogue </a></li>
                                        <li><a href="!#">Shipping & Delivery </a></li>
                                        <li><a href="!#">What's your dream job? </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-xs-12 ttm-footer2-left">
                            <div className="company-info">
                                <div className="company-logo">
                                    <img src={require("../assets/images/logo-img.png")} alt="company-logo" height="45" />
                                </div>
                                <div className="company-desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesue corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culp.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-4 ttm-footer2-right">
                            <div className="ttm-social-link-wrapper">
                                <ul className="social-icons">
                                    <li><a href="!#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="!#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="!#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="!#" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                                </ul>
                            </div>
                            <p>Copyright © 2018 PresentUp. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer