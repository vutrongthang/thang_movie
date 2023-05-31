import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserOutlined,
  MenuOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Drawer } from "antd";

export default function UserNavLogOutMobile() {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-end space-x-5">
      <button
        className="text-2xl  pb-1 text-purple-700 hover:text-purple-800  font-bold "
        onClick={showDrawer}
      >
        <MenuOutlined />
      </button>
      <Drawer
        width={300}
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        drawerStyle={{ backgroundColor: "#18191A" }}
      >
        {/* // Lịch sử mua vé  */}
        <hr className="bg-gray-300" />
        <div
          onClick={() => {
            navigate("/login");
          }}
          className="flex items-center space-x-4 py-3 px-2 mt-2 hover:bg-[#3A3B3C] transition rounded-lg cursor-pointer"
        >
          <UserOutlined className="h-8 w-8 leading-7 text-2xl  text-white text-center  bg-[#4E4F50] rounded-full" />{" "}
          <span className=" text-xl text-[#C6C7CC] ">Đăng nhập</span>
        </div>
        {/* // LogOut  */}
        <div
          onClick={() => {
            navigate("/register");
          }}
          className="flex items-center space-x-4 py-3 px-2 mt-2 hover:bg-[#3A3B3C] transition rounded-lg cursor-pointer"
        >
          <UsergroupAddOutlined className="h-8 w-8 leading-7 text-2xl  text-white text-center  bg-[#4E4F50] rounded-full" />{" "}
          <span className=" text-xl text-[#C6C7CC] ">Đăng ký</span>
        </div>
      </Drawer>
    </div>
  );
}
