import React from "react";
import { useSelector } from "react-redux";
import UserNavLoginMobile from "./UserNavLoginMobile";
import UserNavLogOutMobile from "./UserNavLogOutMobile";
export default function UserNavMobile() {
  let userInfor = useSelector((state) => {
    return state.UserReducer.userInfor;
  });

  let renderUserNavMobile = () => {
    if (userInfor) {
      return <UserNavLoginMobile userInfor={userInfor} />;
    } else {
      return <UserNavLogOutMobile />;
    }
  };
  return <div className="flex">{renderUserNavMobile()}</div>;
}
