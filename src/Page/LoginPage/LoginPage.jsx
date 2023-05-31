import { message } from "antd";
import React, { useEffect, useState } from "react";
import LottieLogin from "./LottieLogin";
import { useDispatch } from "react-redux";
import { setLoginUserAction } from "../../redux/Action/UserAction";
import { useNavigate } from "react-router-dom";
import { userLocal } from "../../Service/localService";
import { backGroundLogin } from "../../asset/img/linkImg";
import FormInputCustom from "../../components/Input/FormInputCustom";
export default function LoginPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [valueInput, setValueInput] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  let [errValueInput, setErrValueInput] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  useEffect(() => {
    if (userLocal.get()) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, []);
  let handleChangeValueInput = (e) => {
    let { value, name } = e.target;
    if (value.trim() == "") {
      setErrValueInput({
        ...errValueInput,
        [name]: ` * Vui lòng điền thông tin`,
      });
    } else {
      setErrValueInput({
        ...errValueInput,
        [name]: ``,
      });
    }
    setValueInput({ ...valueInput, [name]: value });
  };
  // Submit-------------------------
  let handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    for (let key in errValueInput) {
      if (errValueInput[key] != "") {
        isvalid = false;
      }
    }
    for (let key in valueInput) {
      if (valueInput[key] == "") {
        isvalid = false;
      }
    }
    //  Call API ---------------
    if (isvalid) {
      let handleNextPage = () => {
        navigate("/");
      };
      dispatch(setLoginUserAction(valueInput, handleNextPage));
    } else {
      message.error("Tài Khoản Hoặc Mật Khẩu Không Đúng");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backGroundLogin})`,
        backgroundSize: "150%",
        backgroundPosition: "center",
      }}
      className="relative w-screen h-screen"
    >
      {/* //LOGO LOGIN  */}
      <div
        onClick={() => {
          setTimeout(() => {
            navigate("/");
          }, 500);
        }}
        className="absolute  top-5 left-5  xl:text-5xl md:text-3xl text-4xl text-purple-700 font-extrabold cursor-pointer opacity-70"
      >
        BeFlox
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <form className="xl:flex md:flex flex items-center justify-center xl:w-2/3 md:w-2/3 w-3/4  xl:pr-16 md:pr-10 xl:pb-20 md:pb-12 pb-10  xl:pt-12 md:pt-7 pt-10 bg-[rgba(0,0,0,.75)] z-10">
          {/* ///----------- LOTIE GIF -----  */}
          <LottieLogin />
          {/* // form Input ---------------------- */}
          <div className="xl:w-2/3 md:w-2/3  xl:space-y-5 md:space-y-5 space-y-7 w-3/4">
            <h1 className="xl:text-4xl md:text-3xl text-3xl  xl:mb-10 md:mb-5 mb-4 text-white  font-sans">
              Đăng nhập
            </h1>
            {/* USER NAME  */}
            <FormInputCustom
              name="taiKhoan"
              label="Tài khoản"
              valueInput={valueInput.taiKhoan}
              valueErr={errValueInput.taiKhoan}
              handleChangeValueInput={handleChangeValueInput}
            />
            {/* PASSWWORD  */}
            <FormInputCustom
              name="matKhau"
              label="Mật khẩu"
              valueInput={valueInput.matKhau}
              valueErr={errValueInput.matKhau}
              handleChangeValueInput={handleChangeValueInput}
              type="password"
            />
            {/* END PASS  */}
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className=" xl:w-full md:w-full w-full  xl:text-lg md:text-base text-sm  xl:px-4 md:px-2 px-2 xl:py-4 md:py-2 py-1 text-white hover:text-white  bg-purple-700  hover:bg-purple-800  transition rounded-xl"
            >
              Đăng nhập
            </button>
            <div className=" text-right  xl:px-5 md:px-5 px-0 xl:text-base md:text-base text-xs text-gray-400">
              Bạn chưa có tài khoản?{" "}
              <span
                onClick={() => {
                  navigate("/register");
                }}
                className="text-yellow-400 hover:text-yellow-600 font-medium cursor-pointer duration-150"
              >
                Đăng ký ngay
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
