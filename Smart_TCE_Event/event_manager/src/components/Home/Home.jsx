import React from "react";
import { Link } from "react-router-dom";
import Account from "../Account/Account";

import { UserAuth } from "../../context/AuthContext";

const Home = () => {
  const { user } = UserAuth();

  return user ? (
    <div className="bg-[url('clgimg.jpg')] bg-no-repeat bg-cover font-medium h-[715px]">
      <Account />
    </div>
  ) : (
    <div className="bg-[url('clgimg.jpg')] bg-no-repeat bg-cover font-medium h-[715px]">
      <Link to="/signin">
        <button className="w-72 mt-10 relative left-[45rem] top-[15rem] bg-[#8B0000] text-white rounded-full p-2 border hover:font-bold hover:scale-105 shadow-md hover:shadow-black">
          Sign In
        </button>
      </Link>
      <Link to="/signup">
        <button className="w-72 mt-10 relative left-[27rem] top-[21rem] bg-[#8B0000] text-white rounded-full p-2 border hover:font-bold hover:scale-105 shadow-md hover:shadow-black">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default Home;
