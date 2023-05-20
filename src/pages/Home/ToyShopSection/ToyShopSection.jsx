import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import t1 from "../../../assets/t1.jpg"
import t2 from "../../../assets/t2.jpg"
import MyFunctionalComponent from './Functional';
import MyClassComponent from './Class';

const ToyShopSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    AOS.init();
  }, [])

  return (
   <div>
    <MyFunctionalComponent></MyFunctionalComponent>
   <MyClassComponent></MyClassComponent>
   </div>
  );
};

export default ToyShopSection;
