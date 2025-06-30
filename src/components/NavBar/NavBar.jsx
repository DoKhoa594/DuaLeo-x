// src/components/NavBar.jsx
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <a href="#" className="active">
          Trang chủ <i className="fas fa-chevron-right"></i>
        </a>
        <a href="#">
          Sản phẩm <i className="fas fa-chevron-right"></i>
        </a>
        <a href="#">Tin tức</a>
        <a href="#">Giới thiệu</a>
        <a href="#">Liên hệ</a>
        <a href="#">Demo Tuỳ chọn</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Tìm sản phẩm" />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default NavBar;
