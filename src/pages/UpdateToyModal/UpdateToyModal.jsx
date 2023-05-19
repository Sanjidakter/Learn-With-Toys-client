import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToyModal = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    _id,
    photo,
    name,
    sellername,
    email,
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

    // console.log(updatedToy);

    // send data to the server
    fetch(`https://server-learn-with-toy.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    // <div>
    //   <div className="bg-[#F4F3F0] p-24">
    //     <h2 className="text-3xl font-extrabold">Update Toy:{name}</h2>
    //     <form onSubmit={handleUpdateToy}>
    //       {/* form name and quantity row */}
    //       <div className="md:flex mb-8">
    //         <div className="form-control md:w-1/2">
    //           <label className="label">
    //             <span className="label-text">Toy Name</span>
    //           </label>
    //           <label className="input-group">
    //             <input
    //               type="text"
    //               name="name"
    //               defaultValue={name}
    //               placeholder="Toy Name"
    //               className="input input-bordered w-full"
    //             />
    //           </label>
    //         </div>
    //         <div className="form-control md:w-1/2 ml-4">
    //           <label className="label">
    //             <span className="label-text">Available Quantity</span>
    //           </label>
    //           <label className="input-group">
    //             <input
    //               type="text"
    //               name="quantity"
    //               defaultValue={quantity}
    //               placeholder="Available Quantity"
    //               className="input input-bordered w-full"
    //             />
    //           </label>
    //         </div>
    //       </div>
    //       {/* form supplier row */}
    //       <div className="md:flex mb-8">
    //         <div className="form-control md:w-1/2">
    //           <label className="label">
    //             <span className="label-text">Seller Name</span>
    //           </label>
    //           <label className="input-group">
    //             <input
    //               type="text"
    //               name="  sellername"
    //               defaultValue={ sellername}
    //               placeholder=" sellername"
    //               className="input input-bordered w-full"
    //             />
    //           </label>
    //         </div>
    //         <div className="form-control md:w-1/2 ml-4">
    //           <label className="label">
    //             <span className="label-text">Ratings</span>
    //           </label>
    //           <label className="input-group">
    //             <input
    //               type="text"
    //               name="ratings"
    //               defaultValue={ratings}
    //               placeholder="Ratings"
    //               className="input input-bordered w-full"
    //             />
    //           </label>
    //         </div>
    //       </div>
    //       {/* form category and details row */}
    //       <div className="md:flex mb-8">
    //         <div className="form-control md:w-1/2">
    //           <label className="label">
    //             <span className="label-text">Category</span>
    //           </label>
    //           <label className="input-group">
    //             <input
    //               type="text"
    //               name="subcategory"
    //               defaultValue={subcategory}
    //               placeholder="Sub-Category"
    //               className="input input-bordered w-full"
    //             />
    //           </label>
    //         </div>
    //         <div className="form-control md:w-1/2 ml-4">
    //           <label className="label">
    //             <span className="label-text">Details</span>
    //           </label>
    //           <label className="input-group">
    //             <input
    //               type="text"
    //               name="description"
    //               defaultValue={description}
    //               placeholder="description"
    //               className="input input-bordered w-full"
    //             />
    //           </label>
    //         </div>
    //       </div>
    //       {/* form Photo url row */}
    //       <div className="mb-8">
    //         <div className="form-control w-full">
    //           <label className="label">
    //             <span className="label-text">Photo URL</span>
    //           </label>
    //           <label className="input-group">
    //             <input
    //               type="text"
    //               name="photo"
    //               defaultValue={photo}
    //               placeholder="Photo URL"
    //               className="input input-bordered w-full"
    //             />
    //           </label>
    //         </div>
    //       </div>
    //       <input
    //         type="submit"
    //         value="Update Toy"
    //         className="btn btn-block"
    //       />
    //     </form>
    //   </div>
    // </div>

    <div className="bg-[#F4F3F0] p-16">
      <h2 className="text-3xl font-extrabold text-center">Add a TOY</h2>
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
        {/* form toyname and seller name row */}
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

        {/* form Peice and rating row */}
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
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Toy" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateToyModal;
