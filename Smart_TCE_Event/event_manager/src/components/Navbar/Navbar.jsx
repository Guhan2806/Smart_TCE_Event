import React from "react";
import TCELogo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = UserAuth();

  // console.log(user);

  return (
    <div className="flex justify-between items-center h-30 mx-auto px-4 text-white bg-[#a80202]">
      <div className="w-[200px]">
        <img
          src={TCELogo}
          alt="TCELogo"
          width={120}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
        TCE EVENTS
      </div>

      {user ? (
        <ul className="hidden md:flex font-medium text-2xl ">
          <li className="p-4 hover:scale-125">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:scale-125">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:scale-125">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      ) : (
        <ul className="hidden md:flex font-medium text-2xl ">
          <li className="p-4 hover:scale-125">
            <Link to="/signin">SignIn</Link>
          </li>
          <li className="p-4 hover:scale-125">
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
