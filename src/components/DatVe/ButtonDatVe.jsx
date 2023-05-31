import { Button, Modal } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieSerVice } from "../../Service/MovieService";
import { useSelector } from "react-redux";
import { backGroundLogin } from "../../asset/img/linkImg";
import Swal from "sweetalert2";

export default function ButtonDatVe(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let navigate = useNavigate();
  let userInfor = useSelector((state) => state.UserReducer.userInfor);
  let [checkLogin, setCheckLogin] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setCheckLogin(true);
  };
  //DESKTOP AND TABLET
  let confirmBookTicket = () => {
    if (userInfor) {
      window.location.href = `/bookticket/${props.maLichChieu}`;
    } else {
      setCheckLogin(false);
    }
  };
  //MOBILE
  let confirmBookTicketMobile = () => {
    if (userInfor) {
      window.location.href = `/bookticket/${props.maLichChieu}`;
    } else {
      navigate("/login");
      Swal.fire({
        icon: "error",
        title: "Vui lòng đăng nhập để được mua vé",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  let renderContent = () => {
    if (window.innerWidth > 767) {
      return (
        <>
          {/* // ==============================================LEFT  */}
          <div className={checkLogin ? "w-full" : "xl:w-1/2 md:w-3/5"}>
            {/* //Header  */}
            <div className="flex space-x-4 py-8 border-b justify-center">
              <div
                onClick={() => {
                  navigate(`/detail/${props.maPhim}`);
                }}
                className="w-1/4 flex items-center justify-center h-44 overflow-hidden cursor-pointer"
              >
                <img
                  src={props.hinhAnh}
                  className="w-full hover:w-[105%] h-full hover:h-[105%] object-cover rounded duration-200"
                  alt=""
                />
              </div>
              <div className="w-3/4 space-y-3">
                <h1
                  onClick={() => {
                    navigate(`/detail/${props.maPhim}`);
                  }}
                  className="font-bold text-xl cursor-pointer"
                >
                  {props.tenPhim}
                </h1>
                <p className="text-gray-500 w-max break-normal">
                  Tác giả: Trần Hoàng Lâm
                </p>
                <p className="text-gray-500 w-max break-normal">
                  Thời lượng phim : 120 phút
                </p>
              </div>
            </div>
            {/* //body  */}
            <div className="space-y-5 py-6">
              <div className="flex">
                <div className="w-1/2">
                  <div className=" text-purple-700 font-medium">
                    NGÀY CHIẾU :
                  </div>
                  <div className="font-bold text-xl">
                    {moment(props.ngayChieuGioChieu).format("DD/MM/yy")}
                  </div>
                </div>
                <div className="w-1/2">
                  <div className=" text-purple-700 font-medium">
                    GIỜ CHIẾU :
                  </div>
                  <div className="font-bold text-xl">
                    {moment(props.ngayChieuGioChieu).format("HH:MM")}
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h1 className="text-purple-700 font-medium">RẠP CHỌN :</h1>
                <p className="text-xl font-bold">{props.tenCumRap}</p>
                <p className="w-max break-normal">{props.diaChiCumRap}</p>
              </div>
            </div>
            {/* footer  */}
            <div className="flex items-center justify-center h-12">
              {checkLogin ? (
                <button
                  onClick={confirmBookTicket}
                  className="w-2/3 py-2 hover:py-3 bg-purple-700 text-white  duration-150 rounded-xl"
                >
                  Chọn ghế và thanh toán
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* //===============================================RIGHT  */}
          <div
            style={{
              backgroundImage: `url(${backGroundLogin})`,
            }}
            className={
              checkLogin
                ? "w-0"
                : "xl:w-2/5 md:w-1/2 space-y-8 xl:h-full md:h-full  duration-700 bg-cover bg-center rounded text-center"
            }
          >
            <h1 className="text-6xl text-center mt-14 text-purple-700 font-extrabold ">
              BeFlox
            </h1>
            <p className="text-gray-400 text-xl  break-normal w-max mx-auto">
              Bạn cần đăng nhập để chọn <br /> ghế xem phim
            </p>
            <p className="font-bold text-gray-400 text-2xl break-normal w-max mx-auto">
              {props.tenPhim}
            </p>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="w-full py-3 text-lg bg-purple-700 hover:bg-purple-800 text-white hover:text-white rounded duration-150"
            >
              Đăng nhập
            </button>
          </div>
        </>
      );
      /// MOBILE =======================================================================
    } else {
      return (
        <div className="w-full">
          {/* //Header  */}
          <div className="flex space-x-3 py-8 border-b justify-center">
            <div
              onClick={() => {
                navigate(`/detail/${props.maPhim}`);
              }}
              className="w-2/5 flex items-center justify-center h-44 overflow-hidden cursor-pointer"
            >
              <img
                src={props.hinhAnh}
                className="w-full hover:w-[105%] h-full hover:h-[105%] object-cover rounded duration-200"
                alt=""
              />
            </div>
            <div className="w-3/5 space-y-3">
              <h1
                onClick={() => {
                  navigate(`/detail/${props.maPhim}`);
                }}
                className="font-bold text-lg cursor-pointer"
              >
                {props.tenPhim}
              </h1>
              <p className="text-gray-500  break-normal text-xs">
                Tác giả: Trần Hoàng Lâm
              </p>
              <p className="text-gray-500 w-max break-normal text-xs">
                Thời lượng phim : 120 phút
              </p>
            </div>
          </div>
          {/* //body  */}
          <div className="space-y-5 py-6">
            <div className="flex">
              <div className="w-1/2">
                <div className=" text-purple-700 font-medium">NGÀY CHIẾU :</div>
                <div className="font-bold text-xl">
                  {moment(props.ngayChieuGioChieu).format("DD/MM/yy")}
                </div>
              </div>
              <div className="w-1/2">
                <div className=" text-purple-700 font-medium">GIỜ CHIẾU :</div>
                <div className="font-bold text-xl">
                  {moment(props.ngayChieuGioChieu).format("HH:MM")}
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-purple-700 font-medium">RẠP CHỌN :</h1>
              <p className="text-xl font-bold">{props.tenCumRap}</p>
              <p className="w-max break-normal">{props.diaChiCumRap}</p>
            </div>
          </div>
          {/* footer  */}
          <div className="flex items-center justify-center h-12">
            {checkLogin ? (
              <button
                onClick={confirmBookTicketMobile}
                className="w-2/3 py-2 hover:py-3 bg-purple-700 text-white  duration-150 rounded-xl"
              >
                Chọn ghế và thanh toán
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <button
        className="py-3 px-2 mt-2 mx-2 font-bold text-center border border-purple-700  text-purple-700 hover:text-white hover:bg-purple-500 duration-300 rounded-lg"
        onClick={showModal}
      >
        {moment(props.ngayChieuGioChieu).format("DD/MM/yy ~ HH:MM")}
      </button>
      <Modal
        bodyStyle={{ padding: "35px" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={checkLogin ? 500 : 900}
        className="duration-700 overflow-hidden"
        centered
      >
        <div className="flex flex-nowrap justify-around items-center overflow-hidden h-[30rem]">
          {renderContent()}
        </div>
      </Modal>
    </>
  );
}
