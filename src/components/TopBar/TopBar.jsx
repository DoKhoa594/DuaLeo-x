import "./TopBar.css";
import { FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <span>
          <FaPhone /> Hotline: <strong>0912117494</strong>
        </span>
        <span>
          <FaMapMarkerAlt /> Địa chỉ: 268 Cầu Giấy, Quận Cầu Giấy, Hà Nội,
          Vietnam
        </span>
      </div>
      <div className="top-bar-right">
        <span>
          <FaUser /> Đăng nhập hoặc Đăng ký
        </span>
      </div>
    </div>
  );
}

export default TopBar;
