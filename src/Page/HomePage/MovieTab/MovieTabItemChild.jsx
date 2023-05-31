import moment from "moment";
import React from "react";
import ButtonDatVe from "../../../components/DatVe/ButtonDatVe";

export default function MovieTabItemChild(props) {
  let renderMovieSchedule = () => {
    return (
      <div className="py-6">
        <h1 className="mb-6">
          <span className="bg-purple-700 text-lg text-white px-1 py-1 rounded-md">
            C18
          </span>
          <span className="text-xl font-medium"> {props.dataPhim.tenPhim}</span>
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-2 px-3">
          {props.dataPhim.lstLichChieuTheoPhim.slice(0, 6).map((schedule) => {
            // Lịch chiếu phòng phim----------------------------
            return (
              <ButtonDatVe
                key={schedule.maLichChieu}
                maLichChieu={schedule.maLichChieu}
                ngayChieuGioChieu={schedule.ngayChieuGioChieu}
                tenCumRap={props.tenCumRap}
                diaChiCumRap={props.diaChi}
                tenPhim={props.dataPhim.tenPhim}
                hinhAnh={props.dataPhim.hinhAnh}
                maPhim={props.dataPhim.maPhim}
              />
            );
          })}
        </div>
      </div>
    );
  };
  let renderMovie = () => {
    return (
      <div className="grid md:grid-cols-3 xl:grid-cols-3 px-3 py-6 border-b-2 ">
        <div className="flex items-center justify-center ">
          <div className="flex  items-center justify-center w-5/6 xl:h-80 md:h-80 h-56 rounded-md overflow-hidden">
            <img
              className="w-2/4 md:w-full xl:w-5/6 h-full object-cover  duration-300 rounded-lg"
              src={props.dataPhim.hinhAnh}
              alt=""
            />
          </div>
        </div>
        <div className="xl:col-span-2 md:col-span-2">
          {renderMovieSchedule()}
        </div>
      </div>
    );
  };
  return <div>{renderMovie()}</div>;
}
