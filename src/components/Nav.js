import React from "react";
import LoginBtn from "./LoginBtn";

export default function Nav() {
  return (
    <div id="NavBox" className="flex justify-between">
      <div className="font-extrabold text-2xl">
        <span>my</span>
        <span className="text-nextRed">D</span>
        <span className="text-nextYellow">a</span>
        <span className="text-nextGreen">y</span>
        <span className="text-nextBlue">24</span>
      </div>
      <div className="flex items-center gap-3">
        <LoginBtn />
      </div>
    </div>
  );
}
