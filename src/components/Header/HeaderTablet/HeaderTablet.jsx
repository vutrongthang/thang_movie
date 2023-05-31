import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollHeader from "../../../HOC/Scroll/ScrollHeader";
import UserNavTablet from "./UserNavTablet/UserNavTablet";
import logo from "../../../asset/img/logo_beflox.png";

export default function HeaderTablet() {
  let navigate = useNavigate();
  const scrollDirection = ScrollHeader();
  return (
    <div
      style={{
        transition: "0.5s",
        background: "rgba(0, 0, 0, 0.9)",
      }}
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } py-2 z-30 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center  px-10">
        <div
          onClick={() => {
            {
              navigate("/");
            }
          }}
          className="text-5xl text-purple-700  font-extrabold cursor-pointer"
        >
          <img src={logo}></img>
        </div>
        <div>
          <UserNavTablet />
        </div>
      </div>
    </div>
  );
}
