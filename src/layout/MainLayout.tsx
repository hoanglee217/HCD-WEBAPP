import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarContext from "../store/sidebarContext";
import classes from "./MainLayout.module.scss";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

import SiderCustom from "../components/sidebar/SiderCustom";
import HeaderCustom from "../components/topnav/rightBox/HeaderCustom";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarCtx = useContext(SidebarContext);

  useEffect(() => {
    if (document.body.classList.contains("sidebar__open"))
      document.body.classList.remove("sidebar__open");
  }, []);

  return (
    <Layout className={classes.container}>
      <SiderCustom collapsed={collapsed} />
      <Layout className={classes.main}>
        <Header className={classes.main__header}>
          <HeaderCustom collapsed={collapsed} setCollapsed={setCollapsed}/>
        </Header>
        <Content
          className={`${classes.main__content} ${
            !sidebarCtx.isOpen ? classes.close_sidebar : ""
          } main_wrapper`}
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
