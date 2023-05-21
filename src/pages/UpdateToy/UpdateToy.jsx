import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  useTitle("LWT|UpdateToys");
  const toy = useLoaderData();
  const {
    _id,
    photo,
    name,
    subcategory,
    price,
    ratings,
    quantity,
    description,
  } = toy;

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      photo,
      name,
      subcategory,
      price,
      ratings,
      quantity,
      description,
    };

    console.log(updatedToy);

    // send data to the server
    fetch(`https://server-learn-with-toy.vercel.app/toys/${toy._id}`,
     {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "UPDATED!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-[#c474d7] p-16">
        <h2 className="text-3xl font-extrabold text-center">
          Update TOY:{name}
        </h2>
        <form onSubmit={handleUpdateToy}>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form toyname and subcat row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Toy Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="subcategory"
                  defaultValue={subcategory}
                  placeholder="Sub-Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form Price and rating row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="ratings"
                  defaultValue={ratings}
                  placeholder="Ratings"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form quantity and description */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Quantity Available</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Quantity Available"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={description}
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update Toy" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
