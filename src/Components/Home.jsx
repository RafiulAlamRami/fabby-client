import React from 'react';
import Slider from './Slider';
import CraftItemSection from './CraftItemSection';
import CategoryCraft from './CategoryCraft';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItemSection></CraftItemSection>
            <CategoryCraft></CategoryCraft>
            <Faq></Faq>
        </div>
    );
};

export default Home;