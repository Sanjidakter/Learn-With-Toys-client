import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faStar } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Toy = ({ toy }) => {
  const { user } = useContext(AuthContext);
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

  const handleClick = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "You have to log in first to view details",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000
      });
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
              <div className="mr-8 mb-5">
                <p className="text-gray-700">
                  Buy: <br />
                  {price}{" "}
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    size="sm"
                    color="white"
                  />
                </p>
                <p className="text-gray-700">
                  Ratings: <br /> {ratings}
                  <FontAwesomeIcon icon={faStar} size="sm" color="white" />
                </p>
              </div>
              <div>
                <p className="text-gray-700">Quantity: {quantity}</p>
                <p className="mb-2 text-gray-700">
                  Sub-Category: {subcategory}
                </p>
                <Link
                  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded "
                  to={`/toy-details/${toy._id}`}
                  onClick={handleClick}
                >
                  {" "}
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
