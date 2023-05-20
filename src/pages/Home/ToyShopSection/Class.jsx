import React, { Component } from 'react'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
export default class MyClassComponent extends Component {
    componentDidMount() {
        AOS.init();
    }

  render() {
    return (
      <div
        data-aos="fade-right"  //Here you can use any of the AOS animations
      >
        MyClassComponent
      </div>
    )
  }
}