import React from 'react';

const MyToysList = ({toy,handleDelete}) => {
  const {name,email,price,ratings,subcategory,quantity} = toy;
    return (
        <div>
             
              <tr>
                 <th>
                <label>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-sm btn-circle"
                  >X</button>
                </label>
              </th>

                <th>{name}</th>
                <th>{email}</th>
                <th>{price}</th>
                <th>{ratings}</th>
                <th>{subcategory}</th>
                <th>{quantity}</th>
                <th>
                  <img
                    style={{ height: "80px", width: "120px" }}
                    src={toy.photo}
                    alt=""
                  />
                </th>
              </tr>
           
        </div>
    );
};

export default MyToysList;