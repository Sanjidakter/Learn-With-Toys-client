import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
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
    




  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredToys = toys.filter((toy) =>
  toy.name.toLowerCase().includes(searchTerm.toLowerCase())
);







return (
  <div className="p-6">
    <h2 className="text-center">Numer of Toys in this page:{toys.length}</h2>
    <input type="text" placeholder="Search by Toy Name" className="h-10 p-4 mb-4 ml-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
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
            <th>Toy Image</th>
            <th>Details?</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
          {filteredToys.map((toy) => (
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

              <th><button
                  onClick={() => handleViewDetails(toy._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                >
                  View Details
                </button></th>
           
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
