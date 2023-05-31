import React from "react";
import { useSelector } from "react-redux";
import UserNavLoginDesktop from "./UserNavLoginDesktop";
import UserNavLogOutDesktop from "./UserNavLogOutDesktop";
export default function UserNavDesktop() {
  let userInfor = useSelector((state) => {
    return state.UserReducer.userInfor;
  });

  let renderUserNavDesktop = () => {
    if (userInfor) {
      return <UserNavLoginDesktop userInfor={userInfor} />;
    } else {
      return <UserNavLogOutDesktop />;
    }
  };
  return <div className="flex">{renderUserNavDesktop()}</div>;
}
