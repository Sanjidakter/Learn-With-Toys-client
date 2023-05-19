import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import MyToysList from "./MyToysList";

const MyToys = () => {
  const { user ,email} = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();
  

  const url = `http://localhost:5000/myToys?email=${user.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setToys(data);
          console.log(data);
        } else {
          // logout and then navigate
          navigate("/");
        }
      });
  }, [url, navigate]);


  // const handleDelete = id =>{
  //   const proceed = confirm('Are you sure you want to delete');
  //   if(proceed){
  //      fetch(`http://localhost:5000/myToys?/${id}`,{
  //       method: 'DELETE'
  //      })
  //      .then(res => res.json())
  //      .then(data => {
  //       console.log(data)
  //       if(data.deletedCount >0){
  //         alert('deleted successfully!');
  //         const remainingToys = toys.filter(toy => toy._id !== id);
  //         setToys(remainingToys)
  //       }
  //      })
  //   }
    
    
  // }



 

const handleDelete = id => {
  const proceed = confirm('Are you sure you want to delete?');
  if (proceed) {
    fetch(`http://localhost:5000/myToys/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('Deleted successfully!');
          const remainingToys = toys.filter(toy => toy._id !== id);
          setToys(remainingToys);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}


  
  const handleUpdate = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/updateToy/${data?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };

  return (
    <div>
      <h2>Toys:{toys.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
            <th>
                <label>
                  <button
                    
                    className="btn btn-sm btn-circle"
                  ></button>
                </label>
              </th>
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
                 <th>
                <label>
                  <button
                    onClick={()=>handleDelete(toy.id)}
                    className="btn btn-sm btn-circle"
                  >X</button>
                </label>
              </th>

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
                <th>
                  <button onClick={() => handleUpdate(_id)}>Update</button>
                </th>
              </tr>
            ))}

           
          </tbody> 



         {/* {
          toys.map(toy => <MyToysList
          key={toy._id}
          handleDelete={handleDelete}
          ></MyToysList>)
         } */}

        </table>
      </div>
    </div>
  );
};

export default MyToys;