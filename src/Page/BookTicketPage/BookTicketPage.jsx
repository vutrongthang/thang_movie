import React, { useEffect } from "react";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import HeaderPage from "../../components/Header/HeaderPage";
import BookTicketLeft from "./BooketTicketLeft/BookTicketLeft";
import BookTicketRight from "./BookTicketRight/BookTicketRight";
import { setInfoBookingMovieAction } from "../../redux/Action/BookingAction";

export default function BookTicketPage() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let userInfor = useSelector((state) => state.UserReducer.userInfor);
  useEffect(() => {
    if (!userInfor) {
      navigate("/");
      setTimeout(() => {
        Swal.fire({
          icon: "error",
          title: "Vui lòng đăng nhập để được mua vé",
          showConfirmButton: false,
          timer: 2000,
        });
      }, 500);
    }
  }, [userInfor]);
  useEffect(() => {
    dispatch(setInfoBookingMovieAction({ id }));
  }, []);
  return (
    <div>
      <HeaderPage />
      <div
        className="py-6"
        style={{
          backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)",
        }}
      >
        <div className="grid xl:grid-cols-7 xl:gap-5 xl:container xl:mx-auto">
          <div className="xl:col-span-5  rounded-xl ">
            <BookTicketLeft />
          </div>
          <div className="xl:col-span-2 flex justify-center  rounded-xl overflow-hidden">
            <BookTicketRight />
          </div>
        </div>
      </div>
    </div>
  );
}
