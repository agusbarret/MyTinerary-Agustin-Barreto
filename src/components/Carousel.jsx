import React, { useState } from "react";
import { cities } from "../data/data";
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 4 + cities.length ) % cities.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 4) % cities.length);
    };


    return (
        <div className="container mx-auto mt-10 bg-[#2d2d38]">
            <div className="flex items-center justify-between mb-4">
                <button
                    className="block bg-[#ffffff] absolute pl-[3px] pr-[3px] bg-opacity-[10%] pb-[150px] pt-[150px] rounded-[6px] left-[4%]"
                    onClick={handlePrevious}
                >
                    <i className="inline-block w-[24px] h-[auto]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                        </svg>
                    </i>
                </button>
                <button
                    className="block bg-[#ffffff] absolute pr-[3px] pl-[3px] bg-opacity-[10%] pt-[150px] pb-[150px] rounded-[6px] right-[4%]"
                    onClick={handleNext}
                >
                    <i className="inline-block w-[24px] h-[auto]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                        </svg>
                    </i>
                </button>
            </div>
            <div className="flex bg-[#2d2d38] ">
                {cities.slice(currentIndex, currentIndex + 4).map((city, index) => (
                    <div key={index} className="flex-shrink-0 w-64 p-4">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img
                                src={city.image}
                                alt={city.name}
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h2 className="text-xl font-semibold mb-2">{city.name}</h2>
                            <p className="text-gray-700 mb-4">{city.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>  
    );
};

export default Carousel;