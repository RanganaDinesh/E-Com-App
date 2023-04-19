import React, { useState, useEffect } from 'react';
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";



const CarouselSmaller = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [numSlides, setNumSlides] = useState(3);
    const DATA = require('../../../ApiData/Accessoriesdata.json')

    const slide = DATA.slice(7, 12);

    const renderSlide = (slide, id) => {
    return (
        <section  style={{textDecoration:"none"}} key={slide.id} className="carousel-slide">
            <img className="SlideImg" src={slide.image} alt={slide.title} />
           
          
            <div className='slide-adj'>
                <span>{slide.name} </span> 
                <Stack className="best-product-rating" spacing={1} id='start-adj'>
                  <Rating
                    name="half-rating-read"
                    // defaultValue={2.5}
                    value={slide.rating}
                    precision={0.5}
                    readOnly
                    className='rating-star'
                  />
                </Stack>
            <span style={{ color: "red" }}>Sale Price: ${slide.newPrice}</span> <br />
            <span  style={{ textDecoration: "line-through", color: "grey", opacity:"0.8" }}>Original Price: ${slide.oldPrice}</span> 
           </div>
        </section>
    );
    };

    const renderSlides = () => {
    const leftIndex = (currentSlide + slide.length - 1) % slide.length;
    const centerIndex = currentSlide % slide.length;
    const rightIndex = (currentSlide + 1) % slide.length;

    return (
        <div className="carousel-slides d-flex flex-wrap justify-content-center">
            {numSlides === 1 && renderSlide(slide[centerIndex], slide[centerIndex].id)}
            {numSlides === 3 && (
                <>
                {renderSlide(slide[leftIndex], slide[leftIndex].id)}
                {renderSlide(slide[centerIndex], slide[centerIndex].id)}
                {renderSlide(slide[rightIndex], slide[rightIndex].id)}
                </>
            )}
        </div>
    );
    };

    const handlePrevClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide + slide.length - 1) % slide.length);
    };

    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slide.length);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1300) {
            setNumSlides(1);
            } else {
            setNumSlides(3);
            }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center pt-4">
                <h2>ACCESORIES PRODUCTS</h2>
                <hr />
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-center my-5 py-5">
            <div style={{textDecoration:"none", width:"80vw"}}>
                {renderSlides()}
            </div>
            <div className="carousel-nav container">
                <button className="carousel-next2" onClick={handlePrevClick}> <i class="bi bi-arrow-left-circle-fill"></i></button>
                <button className="carousel-next1 " onClick={handleNextClick}><i class="bi bi-arrow-right-circle-fill"></i></button>
            </div>
        </div>
    </>
    );
};

export default CarouselSmaller;
