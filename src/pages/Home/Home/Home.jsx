import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import ToyStoreSection from '../ToyStoreSection/ToyStoreSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <ToyStoreSection></ToyStoreSection>
        </div>
    );
};

export default Home;