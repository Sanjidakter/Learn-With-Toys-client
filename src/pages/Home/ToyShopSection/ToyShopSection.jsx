import React from "react";
import t1 from "../../../assets/t1.jpg"
import t2 from "../../../assets/t2.jpg"

const ToyShopSection = () => {
  
  return (
    <div className="mt-6 p-10">
      <h2 className="text-center">Why Learn with Toys?</h2>
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
        Educational toys are meant to help your child enhance his or her
        literacy, memorization and motor skills. Your child can get a higher IQ
        level once he or she develops these skills. And since toys are fun to
        play with, they can have enough time to learn and retain these. Develops
        problem solving skills Have you ever noticed your child focusing on a
        puzzle and figuring out how to complete it? This is another important
        benefit of developmental toys--its capability to challenge a child’s
        mind. Toys like wooden puzzles encourage children to think as they
        follow a step by step process. There are so many types of puzzles with
        different difficulty levels. The more difficult it is, the more
        attention, energy and thinking it requires.
      </div>
      <div className="w-1/2 gap-4 mt-4 flex" data-aos="fade-up"
     data-aos-duration="3000" >
        <img  src={t1} alt="" />
        <img  src={t2} alt="" />
      </div>
    </div>
  );
};

export default ToyShopSection;
