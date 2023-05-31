import React, { memo } from "react";
import bg_login from "../../asset/bg_login.json";
import Lottie from "lottie-react";
function LottieLogin() {
  return (
    <div className="xl:w-1/3 md:w-1/3 xl:flex xl:justify-center xl:items-center  md:flex md:justify-center md:items-center hidden">
      <div className="xl:scale-50 md:scale-75 scale-50">
        <Lottie animationData={bg_login} />
      </div>
    </div>
  );
}
export default memo(LottieLogin);
