import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Sample image data
const mainCarouselData = [
    { image: 'https://t3.ftcdn.net/jpg/10/82/53/50/360_F_1082535075_jSNDcpDWYOBfA8DD4o9nVF27T8zH7feY.jpg' },
    { image: 'https://t4.ftcdn.net/jpg/08/74/88/31/360_F_874883136_weXp7jguYciiVvSuJn0UJfcJ4NLTKcVf.jpg' },
    { image: 'https://png.pngtree.com/background/20230611/original/pngtree-beautiful-woman-with-an-orange-and-gold-lehenga-sitting-on-the-picture-image_3151312.jpg' },
];

const MainCarosel = () => {
    const items = mainCarouselData.map((item, index) => (
    
       
       <img 
            key={index} 
            className="carousel-image mt-40" 
            src={item.image} 
            alt={`carousel-${index}`} 
            style={{ height: '500px', objectFit: 'cover' }} // Adjust height
        />
    ));

    // Custom render function for dots
    const renderDots = ({ isActive }) => {
        return (
            <span
                style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? 'rgb(111, 6, 6)' : '#ccc', // Active and inactive colors
                    margin: '0px 5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                }}
            />
        );
    };

    return (
        <div className="carousel-container">
            <AliceCarousel 
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                renderDotsItem={renderDots} // Use the custom render function
            />
        </div>
    );
}

export default MainCarosel;