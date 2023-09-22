import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import '../Asserts/layout.css';

function Layout() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
      > 
      <div style={{ marginTop: "64px" }}></div>
      <Menu.Item key="/Home" icon={<AppstoreOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="/Dashboard" icon={<AppstoreOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="/inventory" icon={<ShopOutlined />}>
          Inventory
        </Menu.Item>
        <Menu.Item key="/orders" icon={<ShoppingCartOutlined />}>
          Orders
        </Menu.Item>
        <Menu.Item key="/customers" icon={<UserOutlined />}>
          Customers
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Layout;
