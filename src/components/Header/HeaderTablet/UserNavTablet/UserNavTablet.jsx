import React from "react";
import { useSelector } from "react-redux";
import UserNavLoginTablet from "./UserNavLoginTablet";
import UserNavLogOutTablet from "./UserNavLogOutTablet";
export default function UserNavTablet() {
  let userInfor = useSelector((state) => {
    return state.UserReducer.userInfor;
  });

  let renderUserNavTablet = () => {
    if (userInfor) {
      return <UserNavLoginTablet userInfor={userInfor} />;
    } else {
      return <UserNavLogOutTablet />;
    }
  };
  return <div className="flex">{renderUserNavTablet()}</div>;
}
