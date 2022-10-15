import React from "react";
// import Navebar from "./navebar.js";
import Gif1 from "../../images/event6.gif";
import Pie from "./pie";
function profile() {
  var arr = [
    "Won First prize on Smart TCE Hackathon",
    "Won Third on Apti Killer",
    "Won Second prize on Ideathon",
    "Won Third prize on Logic Cracker"
  ];

  return (
    <>
      <div className="flex flex-row flex-wrap justify-around bg-rose-200">
        <div className="mt-10 items-center bg-gray-800 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-700 h-[700px] w-[600px] ">
          <h5 className="mb-2 text-4xl text-center font-bold tracking-tight text-white">
            User Profile
          </h5>
          <img
            className="h-[200px] w-[200px] proimg rounded-full relative left-[11rem]"
            src={Gif1}
            alt=""
          />
          <div className="mt-10 flex flex-row justify-around mb-2 text-2xl  font-bold tracking-tight dark:text-white ">
            <label>Name :</label>
            <input className=" dark:text-black" defaultValue="Annie"></input>
          </div>
          <div className="mt-10 flex flex-row justify-around mb-2 text-2xl  font-bold tracking-tight dark:text-white">
            <label>Phone no :</label>
            <input
              className=" dark:text-black"
              defaultValue="8767977567"
            ></input>
          </div>
          <div className="mt-10 flex flex-row justify-around mb-2 text-2xl font-bold tracking-tight dark:text-white">
            <label>Mail Id :</label>
            <input
              className=" dark:text-black"
              defaultValue="annies@student.tce.edu"
            ></input>
          </div>
          <div className="mt-10 flex flex-row justify-around mb-2 text-2xl font-bold tracking-tight dark:text-white">
            <label>Gender :</label>
            <input className=" dark:text-black" defaultValue="Female"></input>
          </div>
          <div className="mt-10 flex flex-row justify-around mb-2 text-2xl font-bold tracking-tight dark:text-white">
            <label>DOB :</label>
            <input
              className=" dark:text-black"
              defaultValue="29/6/2002"
            ></input>
          </div>
          <a
            href="/profile"
            className="mt-8 relative left-[16rem] inline-flex items-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </a>
          <div></div>
        </div>
        <div className="mt-10 flex flex-col justify-between">
          <div className="items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl  dark:border-pink-700 dark:bg-pink-800 dark:hover:bg-pink-700 h-[350px] w-[600px]">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight dark:text-white">
              Activity
            </h5>
            <Pie className="" />
          </div>
          <div className="items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-orange-700 dark:bg-orange-800 dark:hover:bg-orange-700 h-[300px] w-[600px]">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight dark:text-white">
              Achievements
            </h5>
            <div className="my-5 ml-5 text-xl font-bold tracking-tight dark:text-white">
              {arr.map((e) => {
                // cnt += 0;
                return <li>{e}</li>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default profile;
