import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link, useLocation } from "react-router-dom";

const Toy = ({ toy }) => {
  const {user} = useContext(AuthContext);
  const location = useLocation();
  const {
    _id,
    name,
    photo,
    email,
    price,
    ratings,
    subcategory,
    quantity,
    description,
  } = toy || {};


  const handleViewDetails = (toyId) => {
    if (user) {
      // Redirect to toy details page
      // Replace "/toy-details" with the actual URL for toy details page
      window.location.href = `/toy-details/${toyId}`;
    } else {
      // Show notification and redirect to login
      alert('You have to log in first to view details');
      // Replace "/login" with the actual URL for login page
      window.location.href = '/login';
    }
  };

  


  return (
    <div>
      <div className="job col-md-12 col-sm-12 col-lg-6 mb-4 ">
        <div className="">
          <div className="col-md-4">
            <img className="mx-auto max-w-full w-1/2" src={photo} alt="" />
          </div>

          <div className="col-md-8 card-right flex">
            <div className="bg-gray-200 p-4 rounded-lg mb-6">
              <h2 className="text-3xl font-bold mb-4">{name}</h2>
              <div>
                <p className="mb-2 text-gray-700"> {description}</p>
                
              </div>
            </div>
            <div className="bg-purple-300 p-4 rounded-lg flex justify-between">
              <div className="mr-8">
                <p className="text-gray-700">Price: {price} BDT</p>
                <p className="text-gray-700">Ratings: {ratings}</p>
              </div>
              <div>
                <p className="text-gray-700">Quantity: {quantity}</p>
                <p className="mb-2 text-gray-700">
                  Sub-Category: {subcategory}
                </p>
                <button
                  onClick={() => handleViewDetails(_id)}
                  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded "
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
