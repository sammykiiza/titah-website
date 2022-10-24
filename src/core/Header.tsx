import React from 'react'

function Header() {
    return (
        <header id="masthead" className="header ttm-header-style-classic-overlay">
            {/* ttm-header-wrap */}
            <div className="ttm-header-wrap">
                {/* ttm-stickable-header-w */}
                <div id="ttm-stickable-header-w" className="ttm-stickable-header-w clearfix">
                    <div id="site-header-menu" className="site-header-menu">
                        <div className="site-header-menu-inner ttm-stickable-header">
                            <div className="container">
                                {/* site-branding */}
                                <div className="site-branding">
                                    <a className="home-link" href="index.html" title="Planwey" rel="home">
                                        <img id="logo-img" className="img-center" src={require("../assets/images/logo-img.png")} alt="logo-img" />
                                    </a>
                                </div>
                                {/* site-branding end */}
                                {/* header-icins */}
                                <div className="ttm-header-icons">
                                    <span className="ttm-header-icon ttm-header-cart-link">
                                        <a href="cart.html"><i className="fa fa-shopping-cart"></i>
                                            <span className="number-cart">0</span>
                                        </a>
                                    </span>
                                    <div className="ttm-header-icon ttm-header-search-link">
                                        <a href="!#" className="open"><i className="ti ti-search"></i></a>
                                        <div className="ttm-search-overlay">
                                            <div className="container">
                                                <div className="row">
                                                    <form method="get" className="ttm-site-searchform" action="#">
                                                        <div className="w-search-form-h">
                                                            <div className="w-search-form-row">
                                                                <div className="w-search-input">
                                                                    <input type="search" className="field searchform-s" name="s" placeholder="Type Word Then Enter..." />
                                                                    <button type="submit">
                                                                        <i className="ti ti-search"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="ttm-search-close"><i className="fa fa-close"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* header-icons end */}
                                {/* site-navigation */}
                                <div id="site-navigation" className="site-navigation">
                                    <div className="ttm-menu-toggle">
                                        <input type="checkbox" id="menu-toggle-form" />
                                        <label htmlFor="menu-toggle-form" className="ttm-menu-toggle-block">
                                            <span className="toggle-block toggle-blocks-1"></span>
                                            <span className="toggle-block toggle-blocks-2"></span>
                                            <span className="toggle-block toggle-blocks-3"></span>
                                        </label>
                                    </div>
                                    <nav id="menu" className="menu">
                                        <ul className="dropdown">
                                            <li className="active"><a href="index.html">Home</a>
                                                <ul>
                                                    <li className="active"><a href="index.html">Homepage 1</a></li>
                                                    <li><a href="homepage-2.html">Homepage 2</a></li>
                                                    <li><a href="homepage-3.html">Homepage 3</a></li>
                                                    <li><a href="!#">Header Styles</a>
                                                        <ul>
                                                            <li><a href="index.html">Header Classic Overlay</a></li>
                                                            <li><a target="_blank" href="header-elegant.html">Header Elegant</a></li>
                                                            <li><a target="_blank" href="header-classic.html">Header Classic</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="!#">Pages</a>
                                                <ul>
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li><a href="services-1.html">Service</a></li>
                                                    <li><a href="services-2.html">Service details</a></li>
                                                    <li><a href="our-event.html">Our Events</a></li>
                                                    <li><a href="our-team.html">Our Team</a></li>
                                                    <li><a href="gallery.html">Gallery</a></li>
                                                    <li><a href="error.html">Error Page</a></li>
                                                    <li><a href="faq.html">FAQs</a></li>
                                                    <li><a href="element.html">Elements</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="!#">Portfolio</a>
                                                <ul>
                                                    <li><a href="portfolio-classic.html">Portfolio Classic</a></li>
                                                    <li><a href="portfolio-overlay.html">Portfolio Overlay</a></li>
                                                    <li><a href="!#">Portfolio Details</a>
                                                        <ul>
                                                            <li><a href="portfolio-details-01.html">Style One</a></li>
                                                            <li><a href="portfolio-details-02.html">Style Two</a></li>
                                                            <li><a href="portfolio-details-03.html">Style Three</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="!#">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog Classic</a></li>
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="single-blog.html">Single Blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact-us.html">Contact Us</a></li>
                                            <li><a href="!#">Shop</a>
                                                <ul>
                                                    <li><a href="home-shop.html">Home Shop</a></li>
                                                    <li><a href="shop.html">Default Shop</a></li>
                                                    <li><a href="product-details.html">Single Product Details</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* site-navigation end */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* ttm-header-wrap end */}
            {/* rev-slider */}
            <div id="rev_slider_4_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container slide-overlay" data-alias="classic4export" data-source="gallery">
                {/* START REVOLUTION SLIDER 5.3.0.2 auto mode */}
                <div id="rev_slider_4_1" className="rev_slider fullwidthabanner" data-version="5.3.0.2">
                    <div className="slotholder"></div>
                    <ul>
                        <li data-index="rs-1" data-transition="boxslide" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="" data-delay="10010" data-rotate="0" data-saveperformance="off" data-title="Let’s Have a Party!" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">

                            <img src={require("../assets/images/slides/slider-mainbg-004.jpg")} alt="" title="slider-mainbg-003" width="1920" height="915" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />

                            <div className="tp-caption tp-resizeme head-font" id="slide-1-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-126','-177','-156','-99']"

                                data-fontsize="['36','36','36','25']"
                                data-lineheight="['45','45','35','35']"
                                data-fontweight="['400','400','400','400']"
                                data-color="['#fff','#fff','#fff','#fff']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":210,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            >Your Celebration Presents</div>

                            <div className="tp-caption tp-resizeme highlight-skin-button" id="slide-1-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-121','-105','-52']"

                                data-fontsize="['20','18','20','14']"
                                data-lineheight="['22','20','22','20']"
                                data-fontweight="['300','300','300','300']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":930,"speed":900,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[6,6,6,5]"
                                data-paddingright="[18,18,18,18]"
                                data-paddingbottom="[6,6,6,5]"
                                data-paddingleft="[18,18,18,18]"
                            >December 03rd 2018</div>

                            <div className="tp-caption tp-resizeme tp-shapewrapper" id="slide-1-layer-3" data-x="['center','center','center','center']" data-hoffset="['269','269','201','134']" data-y="['middle','middle','middle','middle']" data-voffset="['52','6','-7','29']"

                                data-width="['311','311','236','154']"
                                data-height="['23','23','24','17']"
                                data-whitespace="nowrap"
                                data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1980,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            ></div>

                            <div className="tp-caption tp-resizeme heading-slide" id="slide-1-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['23','-21','-27','15']"

                                data-fontsize="['85','85','62','42']"
                                data-lineheight="['110','110','110','110']"
                                data-fontweight="['600','600','600','600']"
                                data-color="['#fff','#fff','#fff','#fff']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":880,"split":"chars","splitdelay":0.05,"speed":1500,"split_direction":"forward","frame":"0","from":"y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            >LET'S HAVE A PARTY!</div>

                            <div className="tp-caption tp-resizeme" id="slide-1-layer-5" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['109','82','53','53']"

                                data-fontsize="['16','16','16','14']"
                                data-lineheight="['26','26','26','24']"
                                data-fontweight="['300','300','300','300']"
                                data-color="['#e0e0e0','#e0e0e0','#e0e0e0','#e0e0e0']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-visibility="['on','on','on','off']"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":2010,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['center','center','center','center']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            >Planning a Wedding, Proposal, Corporate or Event in our busy city is not so<br />easy, and it takes skills (and time) to make it all look easy-going </div>

                            <a className="tp-caption tp-resizeme highlight-skin-button" href="!#" target="_self" id="slide-1-layer-6" data-x="['center','center','center','center']" data-hoffset="['-97','-97','-97','-97']" data-y="['middle','middle','middle','middle']" data-voffset="['203','182','127','85']"

                                data-fontsize="['14','14','14','14']"
                                data-lineheight="['14','14','14','14']"
                                data-fontweight="['600','600','600','600']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-actions=''
                                data-responsive_offset="on"
                                data-frames='[{"delay":2260,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[15,15,15,10]"
                                data-paddingright="[30,30,30,25]"
                                data-paddingbottom="[15,15,15,10]"
                                data-paddingleft="[30,30,30,25]"
                            >Online Request </a>

                            <a className="tp-caption tp-resizeme classic-border-button" href="!#" target="_self" id="slide-1-layer-7" data-x="['center','center','center','center']" data-hoffset="['98','98','98','98']" data-y="['middle','middle','middle','middle']" data-voffset="['203','182','128','85']"

                                data-fontsize="['14','14','14','14']"
                                data-lineheight="['14','14','14','14']"
                                data-fontweight="['600','600','600','600']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-actions=''
                                data-responsive_offset="on"
                                data-frames='[{"delay":2260,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[15,15,15,10]"
                                data-paddingright="[30,30,30,25]"
                                data-paddingbottom="[15,15,15,10]"
                                data-paddingleft="[30,30,30,25]"
                            >More Gallery <span><i className="ti ti-angle-right"></i></span></a>
                        </li>

                        <li data-index="rs-2" data-transition="slotslide-vertical,fade" data-slotamount="default,default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default,default" data-easeout="default,default" data-masterspeed="default,300" data-thumb="" data-delay="10010" data-rotate="0,0" data-saveperformance="off" data-title="We Plan the Best Events" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            <img src={require("../assets/images/slides/slider-mainbg-003.jpg")} alt="" title="slider-mainbg-003" width="1920" height="915" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />

                            <div className="tp-caption" id="slide-2-layer-1" data-x="['left','left','left','center']" data-hoffset="['50','50','50','-290']" data-y="['top','top','top','middle']" data-voffset="['336','228','80','-120']"

                                data-lineheight="['110','90','120','74']"
                                data-fontweight="[400,400,400,400]"
                                data-fontsize="['110','90','75','75']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-visibility="['on','on','on','off']"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":190,"speed":850,"frame":"0","from":"x:{-250,250};y:{-150,150};rX:{-90,90};rY:{-90,90};rZ:{-360,360};sX:0;sY:0;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            ><strong className="ttm-textcolor-skincolor"><i className="ti ti-gift"></i></strong>
                            </div>

                            <div className="tp-caption tp-resizeme" id="slide-2-layer-2" data-x="['left','left','left','center']" data-hoffset="['187','177','143','-1']" data-y="['top','top','top','middle']" data-voffset="['354','237','95','-101']"

                                data-fontsize="['105','105','70','55']"
                                data-lineheight="['110','110','100','70']"
                                data-fontweight="[600,600,600,600]"
                                data-color="['#fff','#fff','#fff','#fff']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":380,"speed":1500,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            >We Plan The</div>

                            <div className="tp-caption tp-resizeme" id="slide-2-layer-3" data-x="['left','left','left','center']" data-hoffset="['50','50','50','0']" data-y="['top','top','top','middle']" data-voffset="['463','330','168','-40']"


                                data-fontweight="[600,600,600,600]"
                                data-fontsize="['105','105','70','55']"
                                data-lineheight="['110','110','100','70']"
                                data-color="['#fff','#fff','#fff','#fff']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":960,"speed":1500,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            >Best<strong className="ttm-textcolor-skincolor"> Events</strong>
                            </div>

                            <div className="tp-caption tp-resizeme" id="slide-2-layer-4" data-x="['right','right','right','center']" data-hoffset="['49','49','50','330']" data-y="['middle','middle','middle','middle']" data-voffset="['80','20','26','-104']"

                                data-width="['97','80','65','40']"
                                data-height="['97','80','65','40']"
                                data-lineheight="['97','80','65','40']"
                                data-whitespace="nowrap"
                                data-visibility="['on','on','off','off']"
                                data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1320,"speed":800,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:rgba(255,61,85,0);bc:transparent;bw:0px 0 0 0;br:50px 50px 50px 50px;"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            ></div>

                            <a className="tp-caption tp-resizeme vedio-icon" href="https://youtu.be/HkyVTxH2fIM" target="_self" id="slide-2-layer-5" data-x="['right','right','right','center']" data-hoffset="['49','49','50','326']" data-y="['middle','middle','middle','middle']" data-voffset="['80','20','26','-106']"

                                data-fontsize="['43','43','43','43']"
                                data-lineheight="['97','97','97','97']"
                                data-width="['90','90','65','50']"
                                data-height="['90','90','65','50']"
                                data-whitespace="nowrap"
                                data-visibility="['on','on','off','off']"
                                data-type="text"
                                data-actions=''
                                data-responsive_offset="on"
                                data-frames='[{"delay":1450,"speed":800,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['center','center','center','center']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            ><i className="ti ti-control-play"></i>
                            </a>

                            <a className="tp-caption tp-resizeme highlight-skin-button" href="!#" target="_self" id="slide-2-layer-6" data-x="['left','left','left','center']" data-hoffset="['50','50','50','0']" data-y="['middle','middle','middle','middle']" data-voffset="['200','130','89','39']"

                                data-fontsize="['14','14','14','14']"
                                data-lineheight="['14','14','14','14']"
                                data-fontweight="[600,600,600,600]"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-actions=''
                                data-responsive_offset="on"
                                data-frames='[{"delay":1760,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[15,15,15,10]"
                                data-paddingright="[30,30,30,25]"
                                data-paddingbottom="[15,15,15,10]"
                                data-paddingleft="[30,30,30,25]"
                            >Get A Quote <span><i className="ti ti-angle-right"></i></span></a>

                            <a className="tp-caption tp-resizeme classic-border-button" href="!#" target="_self" id="slide-2-layer-7" data-x="['left','left','left','center']" data-hoffset="['249','249','240','0']" data-y="['middle','middle','middle','middle']" data-voffset="['200','130','89','99']"

                                data-fontsize="['14','14','14','14']"
                                data-lineheight="['14','14','14','14']"
                                data-fontweight="[600,600,600,600]"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-actions=''
                                data-responsive_offset="on"
                                data-frames='[{"delay":1960,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textalign="['inherit','inherit','inherit','inherit']"
                                data-paddingtop="[15,15,15,10]"
                                data-paddingright="[30,30,30,25]"
                                data-paddingbottom="[15,15,15,10]"
                                data-paddingleft="[30,30,30,25]"
                            >About Us </a>
                        </li>
                    </ul>
                    <div className="tp-loader"><div className="dot1"></div><div className="dot2"></div><div className="bounce1"></div><div className="bounce2"></div><div className="bounce3"></div></div>
                    <div className="tp-bannertimer"></div>
                </div>
            </div>
            {/* rev-slider end */}
        </header>
    )
}

export default Header