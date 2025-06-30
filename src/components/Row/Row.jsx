// src/components/HomeSection.jsx
import React, { useState } from "react";
import "./Row.css";

const Slider = () => {
  const images = ["./slider_1.png", "./slider_1.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-box" style={{ position: "relative" }}>
      <img
        src={"./slider_1.png"}
        alt="Banner"
        style={{ width: "100%", display: "block" }}
      />

      <button className="slider-btn btn-left" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
      </button>

      <button className="slider-btn btn-right" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="category-box">
        <div className="category-title">DANH MỤC</div>
        <ul className="category-list">
          <li>
            <i className="fas fa-chevron-circle-right"></i> Rau tươi sạch
          </li>
          <li>
            <i className="fas fa-chevron-circle-right"></i> Thịt tươi sạch
          </li>
          <li>
            <i className="fas fa-chevron-circle-right"></i> Hải sản tươi sống
          </li>
          <li>
            <i className="fas fa-chevron-circle-right"></i> Hải sản nhập khẩu
          </li>
          <li>
            <i className="fas fa-chevron-circle-right"></i> Trái cây miền nam
          </li>
          <li>
            <i className="fas fa-chevron-circle-right"></i> Hoa quả sạch
          </li>
          <li>
            <i className="fas fa-chevron-circle-right"></i> Hàng nhập khẩu
          </li>
          <li>
            <i className="fas fa-chevron-circle-right"></i> Rau quả Đà Lạt
          </li>
          <li>
            <i className="fas fa-chevron-circle-right"></i> Xem thêm
          </li>
        </ul>
      </div>

      {/* Nhúng slider vào đây */}
      <Slider />
    </div>
  );
};

export default HomeSection;
