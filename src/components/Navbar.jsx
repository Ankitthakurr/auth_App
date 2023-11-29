import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/Auth/authSlice";

const Navbar = () => {
   const {user} = useSelector(state => state.auth)
   const dispatch = useDispatch()

  return (
    <nav className="navbar bg-warning shadow-lg">
      <div className="container-fluid">
        <Link to={"/"}>
          <span className="navbar-brand mb-0 h1">Auth App</span>
        </Link>
        <span className="navbar-brand mb-0 h1">
          {user ? (
            <button onClick={()=>dispatch(logout())} className="btn btn-sm btn-danger rounded-0 mx-1">
              Logout
            </button>
          ) : (
            <>
              <Link
                to={"/register"}
                className="btn btn-sm btn-success rounded-0 mx-1"
              >
                Register
              </Link>
              <Link
                to={"/login"}
                className="btn btn-sm btn-success rounded-0 mx-1"
              >
                Login
              </Link>
            </>
       )} 
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
