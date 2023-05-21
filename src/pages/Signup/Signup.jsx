import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";

const Signup = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [error, setError] = useState("");
  useTitle('LWT|Signup');

  const navigate = useNavigate();
  const location = useLocation();
  console.log("signup page location", location);
  const from = location?.state || "/";

  const handleSignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, password, email, photo);

    setError("");
    if (password.length < 6) {
      setError("password must be 6 characters or long");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUSer = result.user;
        console.log(loggedUSer);
        profileUpdate(name, photo)
          .then(() => {
            console.log(loggedUSer);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  if(redirectToHome){
    return <Navigate replace to={"/"}></Navigate>
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 lg:w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Signup</h1>
          <form onSubmit={handleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign up"
              />
            </div>
          </form>
          <p className="my-4 text-center">
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>{" "}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "18 px",
              backgroundColor: "red",
             
            }}
            className="text-danger"
          >
            {error}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
