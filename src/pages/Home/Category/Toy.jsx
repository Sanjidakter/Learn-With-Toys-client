import React from "react";

const Toy = ({ toy }) => {
  const {
    name,
    photo,
    email,
    price,
    ratings,
    subcategory,
    quantity,
    description,
  } = toy || {};
  return (
    <div>
      <div className="job col-md-12 col-sm-12 col-lg-6 mb-4 ">
        <div className="">
          <div className="col-md-4">
            <img className="w-100" src={photo} alt="" />
          </div>
          <div className="col-md-8 card-right flex">
          <div className="d-flex justify-content-around">
              <h2 className="text-center">{name}</h2>
              <p>Description: {description}</p>
              <p>Sub-Category: {subcategory}</p>
            </div>
            <div className=" p-4 mt-3 d-flex justify-content-between ">
              <div className="div">Price: {price} BDT</div>
              <div>Ratings: {ratings}</div>
              <p>Quantity:{quantity}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
