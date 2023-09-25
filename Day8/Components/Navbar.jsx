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
            <h3> Appliance360</h3>
             
            

            
          </Space>
        </div>

        <div className="header-right">
        <Link
              to="/LoginPage"
              onClick={() => toggleMenu()}
            >
              Login
            </Link>
        </div>
        
          
      </div>
      {menuOpen && <Layout />}
    </div>
  );
}

export default Navbar;
