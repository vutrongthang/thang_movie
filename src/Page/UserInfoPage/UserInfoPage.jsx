import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backGroundLogin } from "../../asset/img/linkImg";
import HeaderPage from "../../components/Header/HeaderPage";
import FormInputCustom from "../../components/Input/FormInputCustom";
import { SET_LOGIN } from "../../redux/constant/UserConstant";
import { userLocal } from "../../Service/localService";
import { userService } from "../../Service/UserService";

export default function UserInfoPage() {
  let dispatch = useDispatch();
  let [valueInput, setValueInput] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    hoTen: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  });
  let [errValueInput, setErrValueInput] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    hoTen: "",
  });
  useEffect(() => {
    fecthInfoUser();
  }, []);
  let fecthInfoUser = async () => {
    try {
      let res = await userService.getInfoUser();
      console.log("res: ", res.data.content);
      let { taiKhoan, matKhau, email, hoTen, soDT, maNhom, maLoaiNguoiDung } =
        res.data.content;
      setValueInput({
        taiKhoan: taiKhoan,
        matKhau: matKhau,
        email: email,
        soDT: soDT,
        hoTen: hoTen,
        maNhom: maNhom,
        maLoaiNguoiDung: maLoaiNguoiDung,
      });
    } catch (err) {
      console.log(err);
    }
  };

  let handleChangeValueInput = (e) => {
    let { value, name } = e.target;
    // Model check regex
    let checkRegex = (regex, message) => {
      if (regex.test(value)) {
        setErrValueInput({ ...errValueInput, [name]: "" });
      } else {
        setErrValueInput({ ...errValueInput, [name]: message });
      }
    };
    //Check Để Trống
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
    //Check tài khoản
    if (value.length >= 1) {
      switch (name) {
        case "matKhau":
          {
            checkRegex(
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              "Tối thiểu tám ký tự, ít nhất một chữ cái và một số, không chứa kí tự đặc biệt"
            );
          }
          break;
        case "email":
          {
            checkRegex(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              "Email chưa đúng định dạng"
            );
          }
          break;
        case "soDT":
          {
            checkRegex(
              /(84|0[3|5|7|8|9])+([0-9]{8})+$\b/,
              "Vui lòng nhập đúng số điện thoại"
            );
          }
          break;
        case "hoTen": {
          checkRegex(
            /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
            "Họ tên phải là chữ"
          );
        }
      }
    }
    // end Check
    setValueInput({ ...valueInput, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    for (let key in valueInput) {
      if (valueInput[key] == "") {
        isValid = false;
      }
    }
    for (let key in errValueInput) {
      if (errValueInput[key] != "") {
        isValid = false;
      }
    }
    // Kiểm tra từ sever
    if (isValid) {
      let handleRegisterUser = async (user) => {
        try {
          let res = await userService.putUpdateInfo(user);
          console.log("res: ", res);
          message.success("Cập nhật thành công");
          let updateInfo = await userService.postUser({
            taiKhoan: res.data.content.taiKhoan,
            matKhau: res.data.content.matKhau,
          });
          userLocal.set(updateInfo.data.content);
          dispatch({
            type: SET_LOGIN,
            payload: updateInfo.data.content,
          });
        } catch (err) {
          console.log(err);
          message.error("Cập nhật thất bại");
        }
      };
      handleRegisterUser(valueInput);
    } else {
      message.error("Cập nhật thất bại");
    }
  };
  return (
    <div>
      <HeaderPage />
      <div
        style={{
          backgroundImage: `url(${backGroundLogin})`,
          backgroundSize: "150%",
          backgroundPosition: "center",
        }}
        className="relative h-screen"
      >
        {/* //LOGO LOGIN  */}
        <div className="flex items-center justify-center w-full h-full xl:scale-90 md:scale-125">
          <form className="flex items-center justify-center xl:w-1/2 md:w-1/2 w-5/6 py-8  bg-[rgba(0,0,0,.75)] z-10">
            {/* ///----------- LOTIE GIF -----  */}
            {/* // form Input ---------------------- */}
            <div className="w-2/3 space-y-5">
              <h1 className="xl:text-4xl md:text-4xl text-xl  mb-10 text-white  font-sans">
                Thông tin cá nhân{" "}
                <span className="text-orange-600 xl:text-lg md:text-lg text-sm">
                  <br /> (Có thể chỉnh sửa được)
                </span>
              </h1>

              {/* USER NAME  */}
              <FormInputCustom
                disable={true}
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
              />
              {/* //EMAIL  */}
              <FormInputCustom
                name="email"
                label="Email"
                valueInput={valueInput.email}
                valueErr={errValueInput.email}
                handleChangeValueInput={handleChangeValueInput}
              />
              {/* //SỐ ĐIỆN THOẠI */}
              <FormInputCustom
                name="soDT"
                label="Số điện thoại"
                valueInput={valueInput.soDT}
                valueErr={errValueInput.soDT}
                handleChangeValueInput={handleChangeValueInput}
              />
              {/* //HỌ TÊN  */}
              <FormInputCustom
                name="hoTen"
                label="Họ Tên"
                valueInput={valueInput.hoTen}
                valueErr={errValueInput.hoTen}
                handleChangeValueInput={handleChangeValueInput}
              />
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className=" xl:w-full md:w-full  text-lg  xl:px-4 md:px-3 px-2 xl:py-4 md:py-3 py-2 w-1/2   text-white hover:text-white  bg-purple-700  hover:bg-purple-800  transition rounded-xl"
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
