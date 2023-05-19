import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLoaderData, useNavigate } from "react-router-dom";
import './AllToys.css';

const AllToys = () => {
  const [toys, setToy] = useState([]);
  const {totalToys} = useLoaderData();
  const [currentPage, setCurrentaPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(20);
  console.log(totalToys);

  // const itemsPerPage = 20;
  const totalPages = Math.ceil(totalToys/itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  const handleSelectChange = (event) => {
    setItemPerPage(parseInt(event.target.value));
    setCurrentaPage(0);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://server-learn-with-toy.vercel.app/allToys?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setToy(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  return (
    <div className="p-6">
      <h2 className="text-center">Numer of Toys in this page:{toys.length}</h2>
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

      {/* paginataion */}
      <div className="pagination">
      
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={currentPage === number ? "selected" : ""}
            onClick={() => setCurrentaPage(number)}
          >
            {number + 1}
          </button>
        ))}
        
      </div>
    </div>
  );
};

export default AllToys;
