import React, { useState } from "react";
import { Badge, Drawer, List, Space } from "antd";
import { Link } from "react-router-dom";
import Layout from "./Layout"; // Import the Layout component
import {
  ShoppingCartOutlined,
  MenuOutlined,
  AppstoreOutlined,
  ShopOutlined,
  
  UserOutlined,
} from "@ant-design/icons";
import "../Asserts/Navbar.css";

function Navbar() {
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Define a state variable to track if the menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="AppHeader">
        <div className="header-left">
          <Space>
            <Badge count={0} dot>
              <MenuOutlined
                style={{ fontSize: 24 }}
                onClick={toggleMenu}
              />
            </Badge>

            <Link
              to="/products"
              onClick={() => toggleMenu()}
            >
              Products
            </Link>

            <Link
              to="/services"
              onClick={() => toggleMenu()}
            >
              Services
            </Link>
          </Space>
        </div>

        <div className="header-right">
          <Badge count={0}>
            <Link to="/cart">
              <ShoppingCartOutlined style={{ fontSize: 24 }} />
            </Link>
          </Badge>
        </div>
        <Drawer
          title="Comments"
          open={commentsOpen}
          onClose={() => {
            setCommentsOpen(false);
          }}
          maskClosable
        >
          <List
            dataSource={[] /* Add your comments data here */}
            renderItem={(item) => {
              return <List.Item>{item.body}</List.Item>;
            }}
          ></List>
        </Drawer>
      </div>
      {menuOpen && <Layout />}
    </div>
  );
}

export default Navbar;
