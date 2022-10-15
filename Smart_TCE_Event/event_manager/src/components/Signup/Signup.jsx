import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/profile");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <div className="bg-[url('clgimg.jpg')] bg-no-repeat bg-cover font-medium h-[715px]">
    <div className="relative top-[8rem] left-[43rem] p-10 h-[500px] w-[370px] rounded-lg shadow-lg shadow-black bg-[rgba(0,0,0,0.5)]">
      <div>
        <h1 className="text-2xl font-bold py-2 text-white">Sign up for an account</h1>
        <p className="text-medium text-white py-2">
          Already have an account?
          <Link to="/signin" className="ml-2 underline text-lg font-bold text-blue-900">
            Sign in.
          </Link>
        </p>
      </div>
      <form onClick={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="text-2xl ml-10 font-bold py-2 text-white">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="text-2xl ml-10 font-bold py-2 text-white">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
          />
        </div>
        <button className="w-72 mt-10 bg-[#8B0000] text-white rounded-full p-2 border hover:font-bold hover:scale-105 shadow-md hover:shadow-black">
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
