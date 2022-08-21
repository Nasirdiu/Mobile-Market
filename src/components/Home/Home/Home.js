import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Faq from '../Faq/Faq';
import LatestPhone from '../LatestPhone/LatestPhone';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <LatestPhone></LatestPhone>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;