import { Tabs } from "antd";
import React from "react";
import styled from "styled-components";
import NewChild from "./NewChild";
import {
  contentDa24h,
  contentKhuyenMai,
  contentReview,
} from "./NewsDatacontent";

const CustomTabs = styled(Tabs)`
  .ant-tabs-ink-bar {
    position: absolute;
    background: #7200ca;
    pointer-events: none;
  }
`;
export default function NewsMovie() {
  return (
    <div className="container mx-auto xl:px-20 md:px-10 px-3 pt-20 pb-16">
      <CustomTabs tabBarGutter={50} centered defaultActiveKey="1">
        <Tabs.TabPane
          tab={
            <div className="xl:text-xl md:text-xl text-base  text-black font-bold">
              Điện ảnh 24h
            </div>
          }
          key="1"
        >
          {<NewChild dataContent={contentDa24h} />}
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <div className="xl:text-xl md:text-xl text-base text-black font-bold">
              Khuyến mãi
            </div>
          }
          key="2"
        >
          {<NewChild dataContent={contentKhuyenMai} />}
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <div className="xl:text-xl md:text-xl text-base text-black font-bold">
              Đánh giá
            </div>
          }
          key="3"
        >
          {<NewChild dataContent={contentReview} />}
        </Tabs.TabPane>
      </CustomTabs>
    </div>
  );
}
