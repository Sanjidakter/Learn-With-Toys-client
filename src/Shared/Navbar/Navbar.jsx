import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/myToys">My Toys</Link>
            <Link to="/addToys">Add a Toy</Link>

            <button
              className="btn btn-outline btn-warning"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link className="btn btn-outline btn-warning" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );

  // res
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img className="w-8 ml-3" src={logo} alt="" />
        <a className="btn btn-ghost normal-case text-xl">
          {" "}
          Learn<i>with</i>Toy
        </a>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <img
            width="40"
            height="40"
            className="mr-6 rounded-lg"
            src={user?.photoURL}
            alt=""
            title={user?.displayName}
          />
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Navbar;
