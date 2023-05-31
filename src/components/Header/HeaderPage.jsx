import React from "react";
import {
  DesktopReponsive,
  MobileReponsive,
  TabletReponsive,
} from "../../HOC/reponsive/reponsive";
import HeaderDesktop from "./HeaderDeskTop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderTablet from "./HeaderTablet/HeaderTablet";

export default function HeaderPage() {
  return (
    <>
      <DesktopReponsive>
        <HeaderDesktop />
      </DesktopReponsive>
      <TabletReponsive>
        <HeaderTablet />
      </TabletReponsive>
      <MobileReponsive>
        <HeaderMobile />
      </MobileReponsive>
    </>
  );
}
