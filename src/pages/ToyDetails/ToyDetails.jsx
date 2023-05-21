import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    _id,
    photo,
    name,
    sellername,
    email,
    price,
    ratings,
    quantity,
    description,
  } = toy;

  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <img src={photo} alt={name} className="w-full" />
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>
        <div className="mb-4">
          <p className="text-lg">Seller: {sellername}</p>
          <p className="text-lg">Seller Email: {email}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Price: ${price}</p>
          <p className="text-lg">Rating: {ratings}</p>
          <p className="text-lg">Available Quantity: {quantity}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Description:</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
