import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { backGroundLogin } from "../../asset/img/linkImg";
import { movieSerVice } from "../../Service/MovieService";
import HeaderPage from "../../components/Header/HeaderPage";
import PageDetailShowtime from "./PageDetailShowtime";
import PageDetailVideo from "./PageDetailVideo";
export default function PageDetaillMovie() {
  let scrollRefMuaVe = useRef();
  let { id } = useParams();
  let [showTime, setShowTime] = useState({});
  let [dataMovieDetail, setDataMovieDetail] = useState({});
  let fetchApi = async ({ id }) => {
    let params = {
      MaPhim: id,
    };
    try {
      let res = await movieSerVice.getInforMovieDetail(params);
      setDataMovieDetail(res.data.content);
      let resShowTime = await movieSerVice.getMovieShowTimeById(params);
      setShowTime(resShowTime.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchApi({ id });
  }, []);
  let handelClickScrollMuaVe = () => {
    scrollRefMuaVe.current?.scrollIntoView({ behavior: "smooth" });
  };
  let [isReadMore, setIsReadMore] = useState(true);
  let toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  let readMore = (content) => {
    return (
      <p className="text">
        {isReadMore ? content.slice(0, 300) : content}
        <span
          onClick={toggleReadMore}
          className="cursor-pointer text-slate-300 font-bold"
        >
          {isReadMore ? "...Xem thêm" : " Ẩn bớt"}
        </span>
      </p>
    );
  };
  console.log("dataMovieDetail: ", dataMovieDetail);
  return (
    <div>
      <HeaderPage />
      <div
        style={{
          background:
            "linear-gradient(to right,rgba(0,0,0,1)150px,rgba(0,0,0,.8)100%)",
          backgroundImage: `url(${backGroundLogin})`,
        }}
      >
        <div className="xl:flex md:flex xl:container md:container xl:space-y-0 md:space-y-0 space-y-8   xl:px-10 px-5   xl:mx-auto md:mx-auto  xl:py-12 md:py-12 py-10">
          {/* left ------------------ */}
          <div className="xl:w-1/4 md:w-1/4 w-2/5 relative ">
            {/* // VIDEO TRAILER ============= */}
            <div className="absolute top-0 left-0 w-full h-full">
              <PageDetailVideo dataTrailer={dataMovieDetail.trailer} />
            </div>
            <img
              className="object-cover mx-auto rounded"
              src={dataMovieDetail.hinhAnh}
              alt=""
            />
          </div>
          {/* right--------------------*/}
          <div className="xl:w-3/4 md:w-3/4 w-full xl:pl-16 md:pl-12 xl:space-y-10 md:space-y-7 space-y-5">
            <div className="xl:space-y-3 md:space-y-1 space-y-1">
              <p className="flex items-start xl:space-x-3 md:space-x-2 space-x-2 xl:text-3xl md:text-2xl text-xl font-bold text-white">
                <span className="bg-purple-700 xl:text-lg md:text-base text-sm text-white xl:px-1 md:px-1 px-1 rounded-md">
                  C18
                </span>
                <span>{dataMovieDetail.tenPhim}</span>
              </p>
              <p className="text-gray-400 xl:text-base md:text-sm">
                {dataMovieDetail.tenPhim} - 120 Phút
              </p>
              <p className="text-gray-400 xl:text-base md:text-sm">
                Tác Giả : Vũ Trọng Thắng
              </p>
            </div>
            <div className="xl:space-y-3 md:last:space-y-2">
              <p className="xl:text-xl md:text-lg text-lg text-white font-bold">
                Nội dung
              </p>
              <p className="text-gray-400 xl:text-base md:text-sm">
                {dataMovieDetail.moTa?.length > 300
                  ? readMore(dataMovieDetail.moTa)
                  : dataMovieDetail.moTa}
              </p>
            </div>
            <div>
              <div className="xl:block md:block flex items-center justify-center">
                <button
                  onClick={handelClickScrollMuaVe}
                  className="xl:px-3 md:px-2 px-3 xl:py-2 md:py-1 py-2 xl:text-lg md:text-lg text-base font-bold bg-purple-700 hover:bg-purple-800 text-white hover:text-white duration-200 rounded"
                >
                  Mua vé
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageDetailShowtime
        danhGia={dataMovieDetail.danhGia}
        tenPhim={dataMovieDetail.tenPhim}
        hinhAnh={dataMovieDetail.hinhAnh}
        showTime={showTime}
        scrollRefMuaVe={scrollRefMuaVe}
        maPhim={id}
      />
    </div>
  );
}
