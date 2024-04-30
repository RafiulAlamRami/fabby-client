import React from 'react';
import Slider from './Slider';
import CraftItemSection from './CraftItemSection';
import CategoryCraft from './CategoryCraft';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItemSection></CraftItemSection>
            <CategoryCraft></CategoryCraft>
        </div>
    );
};

export default Home;