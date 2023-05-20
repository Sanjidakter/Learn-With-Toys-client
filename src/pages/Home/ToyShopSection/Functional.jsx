import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyFunctionalComponent() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div
      data-aos="fade-left" //Here you can use any of the AOS animations
    >
      MyFunctionalComponent
    </div>
  );
}