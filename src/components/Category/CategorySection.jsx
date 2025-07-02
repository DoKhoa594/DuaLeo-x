import React from "react";
import "./CategorySection.css";

const CategorySection = () => {
  const categories = [
    {
      title: "Rau củ tươi",
      subtitle: "Được kiểm định rõ ràng",
      image: "./images/rau-cu.jpg",
    },
    {
      title: "Thực phẩm sạch",
      subtitle: "Quy trình sản xuất kín",
      image: "./images/thuc-pham.jpg",
    },
    {
      title: "Trái cây tươi",
      subtitle: "Nhập khẩu và trong nước",
      image: "./images/trai-cay.jpg",
    },
  ];

  return (
    <div className="category-container">
      {categories.map((item, index) => (
        <div
          className="category-card"
          key={index}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="category-label">
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
