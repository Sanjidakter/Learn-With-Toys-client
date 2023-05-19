import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import logo from "../../assets/logo.jpg"

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
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to='/myToys'>My Toys</Link>
            <Link to="/addToys">Add a Toy</Link>
            <Link>Blogs</Link>
            <button className="btn btn-outline btn-warning" onClick={handleLogOut}>Log Out</button>
          </li>
        </>
      ) : (
        <li>
          <Link className="btn btn-outline btn-warning" to="/login">Login</Link>
        </li>
      )}
      
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
        <div className="dropdown">
      
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  bg-base-100 rounded-box w-52 back">
       {navItems}
      </ul>
    </div>
          <a className="btn btn-ghost normal-case text-xl">
            Learn<i>with</i>Toy
          </a>
          <img  className="btn btn-ghost normal-case text-xl" src={logo} alt="" />
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
    </div>
  );
};

export default Navbar;
