import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemMovie({ dataMovie, index }) {
  let navigate = useNavigate();
  return (
    <div className="p-2 h-96 cursor-pointer">
      <div
        onClick={() => {
          navigate(`/detail/${dataMovie.maPhim}`);
        }}
        className="xl:h-5/6 md:h-4/6 h-3/6 flex items-center justify-center relative overflow-hidden rounded-xl border border-gray-400"
      >
        <h1 className="xl:text-5xl md:text-4xl text-3xl absolute bottom-0 left-0 font-bold text-white">
          {index + 1}
        </h1>
        <img
          className="object-cover h-full hover:h-[120%] w-[120%] duration-300"
          src={dataMovie.hinhAnh}
          alt=""
        />
      </div>
      <div className="h-1/6 py-3 text-white  font-bold xl:text-xl md:text-base text-xs">
        {dataMovie.tenPhim}
      </div>
    </div>
  );
}
