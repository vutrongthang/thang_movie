import React from "react";

export default function NewChild({ dataContent }) {
  return (
    <div className="xl:grid md:grid xl:grid-cols-6 md:grid-cols-2 gap-10 xl:px-20 py-6">
      {/* // ẢNH 1  */}
      <div className="xl:col-span-3 md:h-96 h-96 xl:h-96">
        <div className="xl:h-2/3 md:h-2/5 h-2/5">
          <img
            className="h-full w-full object-cover"
            src={dataContent[0].hinhAnh}
            alt=""
          />{" "}
        </div>
        <div className="font-medium text-xl mt-2">{dataContent[0].title}</div>
        <p className="mt-3">{dataContent[0].content}</p>
      </div>
      {/* // ẢNH 2  */}

      <div className="xl:col-span-3 md:h-96 h-96 xl:h-96">
        <div className="xl:h-2/3 md:h-2/5 h-2/5">
          <img
            className="h-full w-full object-cover"
            src={dataContent[1].hinhAnh}
            alt=""
          />{" "}
        </div>
        <div className="font-medium text-xl mt-2">{dataContent[1].title}</div>
        <p className="mt-3">{dataContent[1].content}</p>
      </div>
      {/* // ẢNH 3  */}

      <div className="xl:col-span-2 md:h-96 h-96 xl:h-96">
        <div className="xl:h-2/3 md:h-2/5 h-2/5">
          <img
            className="h-full w-full object-cover"
            src={dataContent[2].hinhAnh}
            alt=""
          />{" "}
        </div>
        <div className="font-medium text-xl mt-2">{dataContent[2].title}</div>
        <p className="mt-3">{dataContent[2].content}</p>
      </div>
      {/* // ẢNH 4  */}

      <div className="xl:col-span-2 md:h-96 h-96 xl:h-96">
        <div className="xl:h-2/3 md:h-2/5 h-2/5">
          <img
            className="h-full w-full object-cover"
            src={dataContent[3].hinhAnh}
            alt=""
          />{" "}
        </div>
        <div className="font-medium text-xl mt-2">{dataContent[3].title}</div>
        <p className="mt-3">{dataContent[3].content}</p>
      </div>
      {/* 4 ẢNH NHỎ */}
      <div className="xl:col-span-2 xl:block md:hidden hidden md:h-52  xl:h-96 p-3 space-y-4">
        <div className="flex space-x-2 h-1/4">
          <img
            className="rounded-lg h-3/4"
            width={70}
            src={dataContent[4].hinhAnh}
            alt=""
          />
          <span className=" font-medium">{dataContent[4].title}</span>
        </div>
        <div className="flex space-x-2 h-1/4">
          <img
            className="rounded-lg h-3/4"
            width={70}
            src={dataContent[5].hinhAnh}
            alt=""
          />
          <span className=" font-medium">{dataContent[5].title}</span>
        </div>
        <div className="flex space-x-2 h-1/4">
          <img
            className="rounded-lg h-3/4"
            width={70}
            src={dataContent[6].hinhAnh}
            alt=""
          />
          <span className=" font-medium">{dataContent[6].title}</span>
        </div>
        <div className="flex space-x-2 h-1/4">
          <img
            className="rounded-lg h-3/4"
            width={70}
            src={dataContent[7].hinhAnh}
            alt=""
          />
          <span className=" font-medium">{dataContent[7].title}</span>
        </div>
      </div>
    </div>
  );
}
