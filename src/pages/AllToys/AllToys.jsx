import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const AllToys = () => {
  const [toys, setToy] = useState([]);
  

  useEffect(()=>{
    fetch(`https://server-learn-with-toy.vercel.app/allToys`)
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setToy(result);
    })
  },[])

  

  return (
    <div>
      <h2>Toys:{toys.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
        
              <th>Toy Name</th>
              <th>Seller name</th>
              <th>Price</th>
              <th>Ratings</th>
              <th>Sub-Category</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            {toys.map((toy) => (
              <tr>

                <th>{toy.name}</th>
                <th>{toy.email}</th>
                <th>{toy.price}</th>
                <th>{toy.ratings}</th>
                <th>{toy.subcategory}</th>
                <th>{toy.quantity}</th>
                <th>
                  <img
                    style={{ height: "80px", width: "120px" }}
                    src={toy.photo}
                    alt=""
                  />
                </th>
             
              </tr>
            ))}

           
          </tbody> 



        

        </table>
      </div>
    </div>
  );
};

export default AllToys;
