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
            <div className="bg-gray-200 p-6 rounded-lg mb-6">
              <h2 className="text-3xl font-bold mb-4">{name}</h2>
              <div>
                <p className="mb-2 text-gray-700"> {description}</p>
                
              </div>
            </div>
            <div className="bg-purple-300 p-6 rounded-lg flex justify-between">
              <div className="mr-8">
                <p className="text-gray-700">Price: {price} BDT</p>
                <p className="text-gray-700">Ratings: {ratings}</p>
              </div>
              <div>
                <p className="text-gray-700">Quantity: {quantity}</p>
                <p className="mb-2 text-gray-700">
                  Sub-Category: {subcategory}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
