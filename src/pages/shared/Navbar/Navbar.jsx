import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar glass sticky top-0 text-stone-600 z-10">
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
            <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all">All Toys</NavLink>
          </li>
          {user?.email && (
            <>
              <li>
                <NavLink to="/myToys">My Toys</NavLink>
              </li>
              <li>
                <NavLink to="/add">Add A toy</NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src="assets/logo/logo.jpeg" alt="" className="hidden lg:block w-12 mr-2 rounded-full"/>
          <p>Figure Universe</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all">All Toys</NavLink>
          </li>
          {user?.email && (
            <>
              <li>
                <NavLink to="/myToys">My Toys</NavLink>
              </li>
              <li>
                <NavLink to="/add">Add A toy</NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:mr-10">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar tooltip tooltip-left normal-case"
              data-tip={user?.displayName || user.email}
            >
              <div className="lg:w-16 rounded-full">
                {user?.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <img src="assets/user/avatar.png" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <a className="justify-between">
                  Profile Settings
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="font-semibold btn bg-stone-500 text-stone-800 border-0 normal-case" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
