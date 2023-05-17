import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = (
<>
<li>
    <Link>Home</Link>
</li>
<li>
    <Link>All Toys</Link>
</li>
{/* {
    user?.email?
    <>
    <li>
        <Link>My Toys</Link>
        <Link>Add a Toy</Link>
        <Link
                to="/userdetail"
                className="ms-auto"
                style={{ width: "30%" }}
              >
                <img
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  src={user?.photoURL}
                  alt=""
                  title={user?.displayName}
                />
              </Link>
    </li>
    </>
    :(
        <li>
             <Link to="/login">Login</Link>
        </li>
    )
} */}
</>
    );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Learn<i>with</i>Toy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
