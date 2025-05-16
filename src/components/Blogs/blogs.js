import React, { useState } from "react";
import "./blogs.css";
import blog1 from '../../images/fbr-pos-software.jpg';
import blog2 from '../../images/pos-software-grocery-store.jpg';
import blog3 from '../../images/barcode-scanning-with-pos-system.jpg';
import blog4 from '../../images/manage-medicine-with-pos-system.jpg';
import blog5 from '../../images/retail-pos-software-2025.jpg';
import blog6 from '../../images/pos-system-for-autoparts-store.jpg';

const blogData = [
  {
    image: blog1,
    description: "What Is FBR-Integrated POS Software and Why Is It..",
    link: "https://oneclickpos.pk/auto-parts-billing-system/fbr-integrated-pos-software-pakistan/"
  },
  {
    image: blog2,
    description: "POS Software for Grocery Stores: Speed Up Billing &..",
    link: "https://oneclickpos.pk/auto-parts-billing-system/pos-software-for-grocery-stores/"
  },
  {
    image: blog3,
    description: "How Barcode Integration Improves POS Accuracy &..",
    link: "https://oneclickpos.pk/pos-software-features-updates/barcode-integration-in-pos/"
  },
  {
    image: blog4,
    description: "Managing Medicine Stock with POS Software: A Game-",
    link: "https://oneclickpos.pk/healthcare-pharmacy-systems/managing-medicine-stock-with-pos-software/"
  },
  {
    image: blog5,
    description: "Retail POS Software: Must-Have Features for 2025",
    link: "https://oneclickpos.pk/retail-pos-solutions/retail-pos-software-features-2025/"
  },
  {
    image: blog6,
    description: "Benefits of Using POS Software in Auto Parts",
    link: "https://oneclickpos.pk/retail-pos-solutions/pos-software-for-auto-parts-business-benefits/"
  },
  // Add more if needed
];

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="blogs-section">
      <h2 className="blogs-title">Blogs</h2>
      <div className="blogs-grid">
        {blogData.slice(0, visibleCount).map((blog, index) => (
          <div className="blog-card" key={index}>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <img src={blog.image} alt={`Blog ${index + 1}`} className="blog-image" />
            </a>
            <p className="blog-description">{blog.description}</p>
          </div>
        ))}
      </div>
      {visibleCount < blogData.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Blogs;
