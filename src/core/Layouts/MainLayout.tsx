import React from 'react'
import useScript from '../../utils/UseScript'
import Footer from '../Footer'
import Header from '../Header'
import Preloader from '../Preloader'

function MainLayout(props: { children?: React.ReactNode }) {
    useScript('js/jquery.min.js');
    useScript('js/tether.min.js');
    useScript('js/bootstrap.min.js');
    useScript('js/jquery.easing.js');
    useScript('js/jquery-waypoints.js');
    useScript('js/owl.carousel.js');
    useScript('js/jquery.prettyPhoto.js');
    useScript('js/numinate.min6959.js?ver=4.9.3');
    useScript('js/main.js');
    return (
        <div className='page'>
            <Preloader />
            <Header />
            {props.children}
            <Footer />
        </div>

    )
}

export default MainLayout