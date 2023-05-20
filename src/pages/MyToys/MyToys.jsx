import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useTitle('LWT|MyToys');
  const navigate = useNavigate();
  const [modalShow,setModalShow] = React.useState(false);


  // sort price
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedToys = toys.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
    // Default case, no sorting
    return 0;
  });

 

  
  useEffect(() => {
    const fetchToys = async () => {
      if (user) {
        const url = `https://server-learn-with-toy.vercel.app/myToys?email=${user.email}`;

        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });

          const data = await response.json();
          if (!data.error) {
            setToys(data);
            console.log(data);
          } else {
            // logout and then navigate
            navigate('/');
          }
        } catch (error) {
          // Handle fetch error
          console.error('Error fetching toys:', error);
        }
      }
    };

    fetchToys();
  }, [user]);
  






 

const handleDelete = id => {
  const proceed = confirm('Are you sure you want to delete?');
  if (proceed) {
    fetch(`https://server-learn-with-toy.vercel.app/myToys/${id}`, {
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

   
  return (
    <div className="p-10">
      <h2>Toys:{toys.length}</h2>
      <button className="btn btn-outline btn-warning" onClick={toggleSortOrder}>Sort Price</button>
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
              <th>Toy Image</th>
              <th>Update </th>
            </tr>
          </thead>
          <tbody>
            
            {toys.map((toy) => (
              <tr>
                 <th>
                <label>
                  <button
                    onClick={()=>handleDelete(toy._id)}
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
                  <Link  to={`/updateToy/${toy._id}`}>
                  <button style={{fontSize:'.700rem'}}  className="btn btn-xl  btn-square" >Update</button>
                  </Link>
                 
                 
                </th> 
              </tr>
            ))}

           
          </tbody> 

        </table>
      </div>
    </div>
  );
};

export default MyToys;