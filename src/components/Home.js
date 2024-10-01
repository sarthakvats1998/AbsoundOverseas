import React, { useRef } from 'react';
import CarouselImg from './CarouselImg';
import ProductCards from './ProductCards';
import Works from './Works';
import Contact from './Contact';

function Home(props) {
    const productCardsRef = useRef(null);

    const scrollToProductCards = () => {
        productCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <CarouselImg scrollToProductCards={scrollToProductCards} />
            <div ref={productCardsRef}>
                <ProductCards />
            </div>
            <Works />
            <Contact />
        </div>
    );
}

export default Home;
