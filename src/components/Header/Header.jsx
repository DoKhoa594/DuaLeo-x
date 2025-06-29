import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="topbar">
      <div className="left">
        <img src="./logo.png" alt="Logo" className="logo" />

        <div className="info">
          <i class="fa-solid fa-truck"></i>
          <div>
            <strong>Miễn phí vận chuyển</strong>
            <p>Bán kính 100 km</p>
          </div>
        </div>

        <div className="info">
          <img src="/icons/email.png" alt="Email" />
          <div>
            <strong>Hỗ trợ 24/7</strong>
            <p>
              Hotline: <span className="hotline">19001009</span>
            </p>
          </div>
        </div>

        <div className="info">
          <img src="/icons/clock.png" alt="Clock" />
          <div>
            <strong>Giờ làm việc</strong>
            <p>T2 - T7 Giờ hành chính</p>
          </div>
        </div>
      </div>

      <div className="right">
        <button className="cart-btn">🛍️ Giỏ hàng (1)</button>
      </div>
    </div>
  );
};

export default Header;
