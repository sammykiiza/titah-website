import React from 'react'
import MainLayout from '../core/Layouts/MainLayout'
import useScript from '../utils/UseScript'

function Home() {
    useScript('js/revolution/js/jquery.themepunch.tools.min.js');
    useScript('js/revolution/js/jquery.themepunch.revolution.min.js');
    useScript('js/revolution/js/slider.js');

    // optional scripts

    // useScript('revolution/js/extensions/revolution.extension.actions.min.js');
    // useScript('revolution/js/extensions/revolution.extension.carousel.min.js');
    // useScript('revolution/js/extensions/revolution.extension.kenburn.min.js');
    // useScript('revolution/js/extensions/revolution.extension.layeranimation.min.js');
    // useScript('revolution/js/extensions/revolution.extension.migration.min.js');
    // useScript('revolution/js/extensions/revolution.extension.navigation.min.js');
    // useScript('revolution/js/extensions/revolution.extension.parallax.min.js');
    // useScript('revolution/js/extensions/revolution.extension.slideanims.min.js');

    // end of optional scripts
    
    return (
        <MainLayout>
            <div className="site-main">

                {/* <!--intro-section start--> */}
                <section className="ttm-row welcome-section clearfix ttm-bgcolor-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="ttm_single_image_wrapper mt_20 res-991-mt-0">
                                    <img src={require("../assets/images/about-2.png")} alt="img-fluid" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <div className="pt-40 res-991-pt-30">
                                            <div className="section-title">
                                                <h2 className="title">About Our Planwey</h2>
                                                <p className="mb-25"><strong>With our passion, knowledge, creative flair and inspiration, we are dedicated in helping you to achieve your dream wedding day or special event within your budget.</strong></p>
                                            </div>
                                            <div className="mt_19 mb-30 pr-35">
                                                <p>Our wedding planning and events coordination services are designed for Any Sized budget, meaning anyone. Our wedding planning and events coordination services are designed.</p>
                                            </div>
                                            <div className="separator">
                                                <div className="sep-line mt_5 mb-20 res-991-mb-0"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        {/* <!-- ttm-fid --> */}
                                        <div className="ttm-fid inside ttm-fid-view-topicon">
                                            <div className="ttm-fid-contents">
                                                <h4><span data-appear-animation="animateDigits"
                                                    data-from="0"
                                                    data-to="50"
                                                    data-interval="10"
                                                    data-before=""
                                                    data-before-style="sup"
                                                    data-after=""
                                                    data-after-style="sub"
                                                >50
                                                </span><sub>k</sub>
                                                </h4>
                                                <h3 className="ttm-fid-title"><span>Customers</span></h3>
                                            </div>
                                            {/* <!-- ttm-fid-contents end --> */}
                                        </div>
                                        {/* <!-- ttm-fid end --> */}
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        {/* <!-- ttm-fid --> */}
                                        <div className="ttm-fid inside ttm-fid-view-topicon">
                                            <div className="ttm-fid-contents">
                                                <h4><span data-appear-animation="animateDigits"
                                                    data-from="0"
                                                    data-to="15"
                                                    data-interval="5"
                                                    data-before=""
                                                    data-before-style="sup"
                                                    data-after=""
                                                    data-after-style="sub"
                                                >15
                                                </span><sub>Years</sub>
                                                </h4>
                                                <h3 className="ttm-fid-title"><span>Experience</span></h3>
                                            </div>
                                            {/* <!-- ttm-fid-contents end --> */}
                                        </div>
                                        {/* <!-- ttm-fid end --> */}
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        {/* <!-- ttm-fid --> */}
                                        <div className="ttm-fid inside ttm-fid-view-topicon">
                                            <div className="ttm-fid-contents">
                                                <h4><span data-appear-animation="animateDigits"
                                                    data-from="0"
                                                    data-to="70"
                                                    data-interval="10"
                                                    data-before=""
                                                    data-before-style="sup"
                                                    data-after=""
                                                    data-after-style="sub"
                                                >70
                                                </span><sub>k</sub>
                                                </h4>
                                                <h3 className="ttm-fid-title"><span>Project Done</span></h3>
                                            </div>
                                            {/* <!-- ttm-fid-contents end--> */}
                                        </div>
                                        {/* <!-- ttm-fid end --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--intro-section end--> */}

                {/* <!--service-section start--> */}
                <section className="ttm-row bg-img1 ttm-bgcolor-black service-section ttm-bg ttm-bgimage-yes clearfix">
                    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <div className=" section-title clearfix">
                                    <h4>WHAT WE OFFER</h4>
                                    <h2 className="title">Provide Best Services</h2>
                                    <div className="title-img">
                                        <img src={require("../assets/images/ds-2.png")} alt="underline-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="featured-imagebox static-title mb-20">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src={require("../assets/images/blog/blog-01.jpg")} alt="" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5><a href="!#"> Wedding</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="featured-imagebox static-title mb-20">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src={require("../assets/images/blog/blog-02.jpg")} alt="" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5><a href="!#">Private Party</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="featured-imagebox static-title mb-20">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src={require("../assets/images/blog/blog-03.jpg")} alt="" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5><a href="!#">Corporate Party</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--service-section end--> */}

                {/* <!--service-section.style2 start--> */}
                <section className="ttm-row service-section style2 bg-layer clearfix bg-layer-equal-height break-991-colum">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                {/* <!-- col-bg-img-three --> */}
                                <div className="col-bg-img-three ttm-col-bgimage-yes ttm-bg ttm-left-span res-991-mt-0 mt_60">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                    </div>
                                </div>
                                {/* <!-- col-bg-img-three end--> */}
                                <img src={require("../assets/images/bg-image/col-bgimage-3.jpg")} className="ttm-equal-height-image" alt="bg-img" />
                            </div>
                            <div className="col-lg-7 col-md-12">
                                {/* <!-- about-content --> */}
                                <div className="about-content ttm-bg ttm-col-bgcolor-yes ttm-right-span ttm-bgcolor-skincolor padding-15">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        {/* <!-- section title --> */}
                                        <div className="section-title with-desc clearfix">
                                            <div className="title-header">
                                                <h4>WHAT WE DO</h4>
                                                <h2 className="title">Get Premium Our Services</h2>
                                            </div>
                                            <p>We have a huge range of suppliers and contacts in the industry that work closely with us to not only ensure you get the wedding day.</p>
                                        </div>
                                        {/* <!-- section title end --> */}
                                        <div className="separator clearfix">
                                            <div className="sep-line mb-50"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="featured-box style2 left-icon icon-align-top">
                                                    <div className="featured-icon">
                                                        <div className="ttm-icon ttm-icon_element-size-sm ttm-icon_element-color-white">
                                                            <i className="flaticon flaticon-cake"></i>
                                                        </div>
                                                    </div>
                                                    <div className="featured-content">
                                                        <div className="featured-title">
                                                            <h5>Catering &amp; Decor</h5>
                                                        </div>
                                                        <div className="featured-desc">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typendard nknown.</p>
                                                        </div>
                                                        <a className="ttm-btn btn-inline ttm-btn-color-white ttm-icon-btn-right mt-5" href="!#">View More<i className="ti ti-angle-double-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="featured-box style2 left-icon icon-align-top">
                                                    <div className="featured-icon">
                                                        <div className="ttm-icon ttm-icon_element-size-sm ttm-icon_element-color-white">
                                                            <i className="flaticon flaticon-wedding-location"></i>
                                                        </div>
                                                    </div>
                                                    <div className="featured-content">
                                                        <div className="featured-title">
                                                            <h5>Venue Selections</h5>
                                                        </div>
                                                        <div className="featured-desc">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typendard nknown.</p>
                                                        </div>
                                                        <a className="ttm-btn btn-inline ttm-btn-color-white ttm-icon-btn-right mt-5" href="!#">View More
                                                            <i className="ti ti-angle-double-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- about-content end--> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--service-section.style2 end--> */}

                {/* <!--timer-section start--> */}
                <div className="ttm-row timer-section ttm-bgcolor-grey mt_60 clearfix">
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="col-md-12 col-lg-5">
                                <div className="section-title with-desc clearfix m-0">
                                    <div className="title-header">
                                        <h2 className="title mb-0 res-991-mb-30">Our Upcoming Events:</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-7 timer-wraper">
                                <div className="timer-box-content">
                                    <div id="timer-box" className="timer-box">
                                        <div className="line-bgimg2 timer-box-position">
                                            <span className="days"></span>
                                            <div className="bottom-txt">Days</div>
                                        </div>
                                        <div className="line-bgimg2 timer-box-position">
                                            <span className="hours"></span>
                                            <div className="bottom-txt">Hours</div>
                                        </div>
                                        <div className="line-bgimg2 timer-box-position">
                                            <span className="minutes"></span>
                                            <div className="bottom-txt">Minutes</div>
                                        </div>
                                        <div className="line-bgimg2  timer-box-position">
                                            <span className="seconds"></span>
                                            <div className="bottom-txt">Seconds</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--timer-section end--> */}

                {/* <!--event-section start--> */}
                <section className="ttm-row event-section clearfix">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <div className=" section-title clearfix">
                                    <h4>LATEST</h4>
                                    <h2 className="title">Our Events</h2>
                                    <div className="title-img"><img src={require("../assets/images/ds-1.png")} alt="underline-img" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="event-slide owl-carousel" data-item="2" data-nav="true" data-dots="false" data-auto="false" data-center="true">
                                    {/* <!-- featured-imagebox--> */}
                                    <div className="featured-imagebox featured-imagebox-event ttm-box-view-top-image mb-120 position-relative res-767-mlr-15">
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid" src={require("../assets/images/event-img3.jpg")} alt="" />
                                        </div>
                                        <div className="ttm-box-post-date">
                                            <span className="ttm-entry-date">
                                                <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">12<span className="entry-month entry-year">aug</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-content featured-content-event">
                                            <div className="featured-title">
                                                <h5><a href="event-details.html">The Ronaldos Music Festival</a></h5>
                                                <span className="ttm-textcolor-skincolor">Tickets from $33</span>
                                            </div>
                                            <div className="ttm-box-meta">
                                                <span className="ttm-event-meta-item ttm-event-date">
                                                    <i className="fa fa-clock-o"></i>
                                                    <span className="ttm-event-meta-dtstart"> November 28 </span>
                                                    <span className="sep">-</span>
                                                    <span className="ttm-event-meta-dtend">Start 8:00 am - 5:00 pm </span>
                                                </span>
                                                <div className="tribe-events-vanue">
                                                    <i className="fa fa-map-marker"></i> Manhamman, New Yok
                                                </div>
                                            </div>
                                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-black mt-28" href="event-details.html" title="">Ticket & Details</a>
                                        </div>
                                    </div>
                                    {/* <!-- featured-imagebox END --> */}
                                    {/* <!-- featured-imagebox--> */}
                                    <div className="featured-imagebox featured-imagebox-event ttm-box-view-top-image mb-120 position-relative res-767-mlr-15">
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid" src={require("../assets/images/event-img5.jpg")} alt="" />
                                        </div>
                                        <div className="ttm-box-post-date">
                                            <span className="ttm-entry-date">
                                                <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">12<span className="entry-month entry-year">aug</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-content featured-content-event">
                                            <div className="featured-title">
                                                <h5><a href="event-details.html">Techohub 2019</a></h5>
                                                <span className="ttm-textcolor-skincolor">Tickets from $46</span>
                                            </div>
                                            <div className="ttm-box-meta">
                                                <span className="ttm-event-meta-item ttm-event-date">
                                                    <i className="fa fa-clock-o"></i>
                                                    <span className="ttm-event-meta-dtstart"> November 05 </span>
                                                    <span className="sep">-</span>
                                                    <span className="ttm-event-meta-dtend">9:00 am - 4:00 pm </span>
                                                </span>
                                                <div className="tribe-events-vanue">
                                                    <i className="fa fa-map-marker"></i> Manhamman, New Yok
                                                </div>
                                            </div>
                                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-black mt-28" href="event-details.html" title="">Ticket & Details</a>
                                        </div>
                                    </div>
                                    {/* <!-- featured-imagebox END --> */}
                                    {/* <!-- featured-imagebox--> */}
                                    <div className="featured-imagebox featured-imagebox-event ttm-box-view-top-image mb-120 position-relative res-767-mlr-15">
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid" src={require("../assets/images/event-img4.jpg")} alt="" />
                                        </div>
                                        <div className="ttm-box-post-date">
                                            <span className="ttm-entry-date">
                                                <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">12<span className="entry-month entry-year">aug</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-content featured-content-event">
                                            <div className="featured-title">
                                                <h5><a href="event-details.html">Sucess Party, 35 Avennue</a></h5>
                                                <span className="ttm-textcolor-skincolor">Tickets from $99</span>
                                            </div>
                                            <div className="ttm-box-meta">
                                                <span className="ttm-event-meta-item ttm-event-date">
                                                    <i className="fa fa-clock-o"></i>
                                                    <span className="ttm-event-meta-dtstart"> November 28 </span>
                                                    <span className="sep">-</span>
                                                    <span className="ttm-event-meta-dtend">9:00 am - 6:00 pm </span>
                                                </span>
                                                <div className="tribe-events-vanue">
                                                    <i className="fa fa-map-marker"></i> Manhamman, New Yok
                                                </div>
                                            </div>
                                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-black mt-28" href="event-details.html" title="">Ticket & Details</a>
                                        </div>
                                    </div>
                                    {/* <!-- featured-imagebox END --> */}
                                </div>
                            </div>
                            {/* <!-- row end --> */}
                        </div>
                    </div>
                </section>
                {/* <!--event-section end--> */}

                {/* <!--gallery-section start--> */}
                <section className="ttm-row bg-img7 ttm-bgcolor-black gallery-section ttm-bg ttm-bgimage-yes clearfix">
                    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12 col-md-12">
                                <div className=" section-title clearfix">
                                    <h4>SEE OUR BEST</h4>
                                    <h2 className="title">Photo Gallery</h2>
                                    <div className="title-img">
                                        <img src={require("../assets/images/ds-2.png")} alt="underline-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--gallery-section end--> */}

                {/* <!--gallery-view-section start--> */}
                <section className="ttm-row gallery-view-section">
                    <div className="container">
                        {/* <!-- row --> */}
                        <div className="row multi-columns-row ttm-boxes-spacing-5px style2 mt_65">
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-6">
                                {/* <!-- featured-image-box --> */}
                                <div className="featured-imagebox featured-imagebox-portfolio">
                                    {/* <!-- featured-thumbnail--> */}
                                    <div className="featured-thumbnail">
                                        <a href="!#"> <img className="img-fluid" src={require("../assets/images/gallery/gallery-1.jpg")} alt="img-fluid" /></a>
                                    </div>
                                    {/* <!-- featured-thumbnail END--> */}
                                    {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-box-view-overlay">
                                        <div className="ttm-media-link">
                                            <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="Autue Art Gallery Opening" href="../assets/images/gallery/gallery-1.jpg" data-rel="prettyPhoto">
                                                <i className="ti ti-search"></i>
                                            </a>
                                        </div>
                                        <div className="featured-content featured-content-portfolio">
                                            <div className="featured-title">
                                                <h5><a href="portfolio-details-01.html">Autue Art Gallery Opening</a></h5>
                                            </div>
                                            <span className="category">
                                                <a href="private-party.html">Private Party</a>
                                            </span>
                                        </div>
                                    </div>
                                    {/* <!-- ttm-box-view-overlay end--> */}
                                </div>
                                {/* <!-- featured-item --> */}
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-6">
                                {/* <!-- featured-image-box --> */}
                                <div className="featured-imagebox featured-imagebox-portfolio">
                                    {/* <!-- featured-thumbnail--> */}
                                    <div className="featured-thumbnail">
                                        <a href="!#"> <img className="img-fluid" src={require("../assets/images/gallery/gallery-5.jpg")} alt="img-fluid" /></a>
                                    </div>
                                    {/* <!-- featured-thumbnail END--> */}
                                    {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-box-view-overlay">
                                        <div className="ttm-media-link">
                                            <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="Grand Despa Events" href="../assets/images/gallery/gallery-5.jpg" data-rel="prettyPhoto">
                                                <i className="ti ti-search"></i>
                                            </a>
                                        </div>
                                        <div className="featured-content featured-content-portfolio">
                                            <div className="featured-title">
                                                <h5><a href="portfolio-details-01.html">Grand Despa Events</a></h5>
                                            </div>
                                            <span className="category">
                                                <a href="private-party.html">birthday Party</a>
                                            </span>
                                        </div>
                                    </div>
                                    {/* <!-- ttm-box-view-overlay end--> */}
                                </div>
                                {/* <!-- featured-item --> */}
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-6">
                                {/* <!-- featured-image-box --> */}
                                <div className="featured-imagebox featured-imagebox-portfolio">
                                    {/* <!-- featured-thumbnail--> */}
                                    <div className="featured-thumbnail">
                                        <a href="!#"> <img className="img-fluid" src={require("../assets/images/gallery/gallery-2.jpg")} alt="img-fluid" /></a>
                                    </div>
                                    {/* <!-- featured-thumbnail END--> */}
                                    {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-box-view-overlay">
                                        <div className="ttm-media-link">
                                            <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="Divqi Holiday Party" href="../assets/images/gallery/gallery-2.jpg" data-rel="prettyPhoto">
                                                <i className="ti ti-search"></i>
                                            </a>
                                        </div>
                                        <div className="featured-content featured-content-portfolio">
                                            <div className="featured-title">
                                                <h5><a href="portfolio-details-01.html">Divqi Holiday Party</a></h5>
                                            </div>
                                            <span className="category">
                                                <a href="private-party.html">Corporate</a>
                                            </span>
                                        </div>
                                    </div>
                                    {/* <!-- ttm-box-view-overlay end--> */}
                                </div>
                                {/* <!-- featured-item --> */}
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-6">
                                {/* <!-- featured-image-box --> */}
                                <div className="featured-imagebox featured-imagebox-portfolio">
                                    {/* <!-- featured-thumbnail--> */}
                                    <div className="featured-thumbnail">
                                        <a href="!#"> <img className="img-fluid" src={require("../assets/images/gallery/gallery-3.jpg")} alt="img-fluid" /></a>
                                    </div>
                                    {/* <!-- featured-thumbnail END--> */}
                                    {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-box-view-overlay">
                                        <div className="ttm-media-link">
                                            <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="Helen Birthday Party" href="../assets/images/gallery/gallery-3.jpg" data-rel="prettyPhoto">
                                                <i className="ti ti-search"></i>
                                            </a>
                                        </div>
                                        <div className="featured-content featured-content-portfolio">
                                            <div className="featured-title">
                                                <h5><a href="portfolio-details-01.html">Helen Birthday Party</a></h5>
                                            </div>
                                            <span className="category">
                                                <a href="private-party.html">Birthday Party</a>
                                            </span>
                                        </div>
                                    </div>
                                    {/* <!-- ttm-box-view-overlay end--> */}
                                </div>
                                {/* <!-- featured-item --> */}
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-6">
                                {/* <!-- featured-image-box --> */}
                                <div className="featured-imagebox featured-imagebox-portfolio">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                        <a href="!#"><img className="img-fluid" src={require("../assets/images/gallery/gallery-4.jpg")} alt="fimg-luid" /></a>
                                    </div>
                                    {/* featured-thumbnail END */}
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay">
                                        <div className="ttm-media-link">
                                            <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="Steven and Sofia Wedding" href="https://youtu.be/HkyVTxH2fIM" data-rel="prettyPhoto">
                                                <i className="ti ti-control-play"></i>
                                            </a>
                                        </div>
                                        <div className="featured-content featured-content-portfolio">
                                            <div className="featured-title">
                                                <h5><a href="portfolio-details-01.html">Steven and Sofia Wedding</a></h5>
                                            </div>
                                            <span className="category">
                                                <a href="private-party.html">Engagement</a>,
                                                <a href="private-party.html">Wedding</a>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ttm-box-view-overlay end- */}
                                </div>
                                {/* featured-item  */}
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-6">
                                {/* featured-image-box */}
                                <div className="featured-imagebox featured-imagebox-portfolio">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                        <a href="!#"> <img className="img-fluid" src={require("../assets/images/gallery/gallery-8.jpg")} alt="img-fluid" /></a>
                                    </div>
                                    {/* featured-thumbnail END */}
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay">
                                        <div className="ttm-media-link">
                                            <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="Kids Birthday Party" href="../assets/images/gallery/gallery-8.jpg" data-rel="prettyPhoto">
                                                <i className="ti ti-search"></i>
                                            </a>
                                        </div>
                                        <div className="featured-content featured-content-portfolio">
                                            <div className="featured-title">
                                                <h5><a href="portfolio-details-01.html">Kids Birthday Party</a></h5>
                                            </div>
                                            <span className="category">
                                                <a href="private-party.html">Birthday Party</a>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ttm-box-view-overlay end */}
                                </div>
                                {/* featured-item */}
                            </div>
                        </div>
                        {/* row end */}
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-black mt-50" href="gallery.html">View More Gallery</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* gallery-view-section end */}

                {/* testimonial */}
                <section className="testimonial-section ttm-row bg-layer break-991-colum">
                    <div className="container">
                        <div className="row">
                            {/* estimonials */}
                            <div className="col-md-12 col-lg-7">
                                <div className="ttm-col-bgcolor-yes ttm-bg ttm-left-span ttm-bgcolor-skincolor padding-3 res-1199-pl-15">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                        <div className="ttm-bg-layer-inner"></div>
                                    </div>
                                    <div className="layer-content">
                                        <div className="carousel-outer pr-10">
                                            <div className="section-title clearfix mb-30">
                                                <h4>TESTIMONAL</h4>
                                                <h2 className="title ttm-textcolor-white">Clients feedback</h2>
                                            </div>
                                            {/* wrap-testimonial */}
                                            <div className="testimonial-slide owl-carousel" data-item="1" data-nav="false" data-dots="false" data-auto="false">
                                                {/* testimonials */}
                                                <div className="testimonials">
                                                    <div className="testimonial-content mb-35">
                                                        <div className="testimonial-avatar">
                                                            <div className="testimonial-img">
                                                                <img className="img-center" src={require("../assets/images/feedback1.jpg")} alt="testimonial-img" />
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-caption">
                                                            <h6>Linda Jone</h6>
                                                            <label>Newyork City</label>
                                                        </div>
                                                        <blockquote>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloret quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</blockquote>
                                                    </div>
                                                </div>
                                                {/* testimonials end */}
                                                {/* testimonials */}
                                                <div className="testimonials">
                                                    <div className="testimonial-content mb-35">
                                                        <div className="testimonial-avatar">
                                                            <div className="testimonial-img">
                                                                <img className="img-center" src={require("../assets/images/feedback2.jpg")} alt="testimonial-img" />
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-caption">
                                                            <h6>Tonny Edward</h6>
                                                            <label>Newyork City</label>
                                                        </div>
                                                        <blockquote>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloret quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</blockquote>
                                                    </div>
                                                </div>
                                                {/* testimonials end */}
                                                {/* testimonials */}
                                                <div className="testimonials">
                                                    <div className="testimonial-content mb-35">
                                                        <div className="testimonial-avatar">
                                                            <div className="testimonial-img">
                                                                <img className="img-center" src={require("../assets/images/feedback3.jpg")} alt="testimonial-img" />
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-caption">
                                                            <h6>Teena Venanda</h6>
                                                            <label>Newyork City</label>
                                                        </div>
                                                        <blockquote>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloret quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</blockquote>
                                                    </div>
                                                </div>
                                                {/* testimonials end */}
                                            </div>
                                            {/* wrap-testimonial end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* left Column-end */}
                            <div className="col-md-12 col-lg-5">
                                <div className="col-bg-img-four ttm-col-bgimage-yes ttm-bg ttm-right-span ml_165 mt-60 res-991-mt-0">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content"></div>
                                </div>
                                <img src={require("../assets/images/bg-image/col-bgimage-4.jpg")} className="ttm-equal-height-image" alt="bg-img" />
                            </div>
                            {/* Testimonials-end */}
                        </div>
                    </div>
                </section>
                {/* End testimonial */}

                {/* last-section start */}
                <section className="ttm-row ttm-bgcolor-grey last-section clearfix">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                    <h4>WORKING WITH EXCELLENT</h4>
                                    <h2 className="title">Our Latest News/ Blog</h2>
                                    <div className="title-img"><img src={require("../assets/images/ds-1.png")} alt="underline-img" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
                                <div className="featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow1 ttm-bgcolor-white mb-30">
                                    <div className="row row-equal-height">
                                        <div className="col-md-12 col-lg-6 ttm-featured-img-left">
                                            <div className="featured-thumbnail">
                                                <a href="single-blog.html"><img className="img-fluid" src={require("../assets/images/blog/blog1.jpg")} alt="img-fluid" /></a>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 ttm-featured-content-right">
                                            <div className="featured-content featured-content-post">
                                                <div className="ttm-box-post-date">
                                                    <span className="ttm-entry-date">
                                                        <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">01<span className="entry-month entry-year">MAY</span></time>
                                                    </span>
                                                </div>
                                                <div className="featured-title ml-70">
                                                    <h5><a href="single-blog.html">Best Kids’ Birthday Party Ideas</a></h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typendard nknown printet to make a type specimen book.</p>
                                                </div>
                                                <a className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-black mt-20 mb-15" href="single-blog.html" title="">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow1 ttm-bgcolor-white mb-30">
                                    <div className="row row-equal-height">
                                        <div className="col-md-12 col-lg-6 ttm-featured-img-left">
                                            <div className="featured-thumbnail">
                                                <a href="single-blog.html"><img className="img-fluid" src={require("../assets/images/blog/blog3.jpg")} alt="img-fluid" /></a>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 ttm-featured-content-right">
                                            <div className="featured-content featured-content-post">
                                                <div className="ttm-box-post-date">
                                                    <span className="ttm-entry-date">
                                                        <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">23<span className="entry-month entry-year">NOV</span></time>
                                                    </span>
                                                </div>
                                                <div className="featured-title ml-70">
                                                    <h5><a href="single-blog.html">5 Steps To Planning A Sweet Party</a></h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typendard nknown printet to make a type specimen book.</p>
                                                </div>
                                                <a className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-black mt-20 mb-15" href="single-blog.html" title="">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="featured-imagebox featured-imagebox-post ttm-box-view-top-image box-shadow1 ttm-bgcolor-white mb-30 res-1199-m-0">
                                    <div className="featured-thumbnail">
                                        <a href="blog-details.html"><img className="img-fluid" src={require("../assets/images/blog/blog2.jpg")} alt="img-fluid" /></a>
                                    </div>
                                    <div className="featured-content featured-content-post">
                                        <div className="ttm-box-post-date">
                                            <span className="ttm-entry-date">
                                                <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">18<span className="entry-month entry-year">DEC</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-title ml-70">
                                            <h5><a href="blog-details.html">How to Find the Perfect Event Venue</a></h5>
                                        </div>
                                        <div className="featured-desc">
                                            <p className="res-991-mb-0">Lorem Ipsum is simply dummy text of the printing and typendard nknown printet to make a type specimen book Lorem Ipsum is simply dummy tex.</p>
                                        </div>
                                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-black mt-10 mb-15" href="single-blog.html" title="">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* last-section end */}

            </div>
            
        </MainLayout>
    )
}

export default Home