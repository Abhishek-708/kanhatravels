import React from "react";
import HeroSection from "./components/HeroSection";


const Home = () => {
    const data = {
        name : "Kanha Travels",
        imgData : "images/car.jpg",
    };
    

    return (
      <>
        <HeroSection myData = {data} />;
        
      </>
    );
};

export default Home;

