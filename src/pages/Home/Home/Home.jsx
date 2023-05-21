import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";
import ToyStoreSection from "../ToyStoreSection/ToyStoreSection";
import SpecialOffersSection from "../SpecialOffersSection/SpecialOfferSection";
import ToyShopSection from "../ToyShopSection/ToyShopSection";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("LWT|Home");
  return (
    <div>
      
        <div className="font-extralight text-3xl bg-pink-50 p-2 text-center">
          Welcome to{" "}
          <span className="text-pink-800 text-4xl font-semibold">LWT</span>
        
      </div>
      <Banner></Banner>
      <SpecialOffersSection></SpecialOffersSection>
      <Gallery></Gallery>
      <ToyShopSection></ToyShopSection>
      <Category></Category>
      <ToyStoreSection></ToyStoreSection>
    </div>
  );
};

export default Home;
