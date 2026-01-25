import React from 'react';
import Hero from './Hero';
import About from './About';
import Universities from './Universities';
import Schedule from './Schedule';
import Sponsors from './Sponsors';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <About />
            <Universities />
            <Schedule />
            <Sponsors />
        </main>
    );
};

export default Home;
