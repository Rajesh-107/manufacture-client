import React from 'react';
import Banner from './Banner';
import BikeParts from './BikeParts';
import Contact from './Contact';
import Hero from './Hero';
import PartsGallery from './PartsGallery';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BikeParts></BikeParts>
            <Hero></Hero>
            <PartsGallery></PartsGallery>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;