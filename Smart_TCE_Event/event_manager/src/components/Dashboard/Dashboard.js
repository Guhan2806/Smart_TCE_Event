import React from "react";
import Upcoming from "./Upcoming/upcoming";
import Welcome from "./Welcome/welcome";
import Calendar from "./Calender/calendar";

function App() {
 
  return (
    <div className="bg-rose-200">
      <div className="flex flex-row justify-around">
        <div className="flex flex-col ">
          <div className="relative bottom-[7rem]">
            <Welcome />
          </div>
          <div className="relative bottom-[15rem]">
            <Calendar />
          </div>
        </div>
        <div className="relative bottom-[3rem]">
          <Upcoming />
        </div>
      </div>
    </div>
  );
}

export default App;
