import React from "react";
import './model.css';
import retailIcon from '../../images/Icon-1.png';
import pharmacyIcon from '../../images/Icon-2.png';
import restaurantIcon from '../../images/Icon-3.png';
import wholesaleIcon from '../../images/Icon-4.png';
import salonIcon from '../../images/icon-5.jpg';
import bakeryIcon from '../../images/Icon-6.jpg';
import electronicsIcon from '../../images/Icon-7.jpg';
import bookstoreIcon from '../../images/Icon-8.jpg';

function Model() {
  const solutions = [
    {
      title: "Retail POS System",
      description:
        "Manage product catalogs, handle pricing, and streamline checkout with ease. Moreover, our retail POS supports barcode scanning, inventory tracking, and loyalty programs, making it the ideal solution for clothing, electronics, and general merchandise stores. As a result, you can enhance customer satisfaction and improve operational efficiency.",
      icon: retailIcon,
    },
    {
      title: "Pharmacy POS System",
      description:
        "Manage prescriptions, track patients, and stay compliant with ease. In addition, our pharmacy POS supports refills, medication tracking, and patient communication, ultimately simplifying operations and ensuring better service delivery.",
      icon: pharmacyIcon,
    },
    {
      title: "Restaurant POS System",
      description:
        "Optimize order management, streamline kitchen communication, and manage reservations with ease. Our restaurant POS is designed for quick service, fine dining, and cafes, improving accuracy and customer experience.",
      icon: restaurantIcon,
    },
    {
      title: "Wholesale & Retail POS System",
      description:
        "Handle bulk sales, manage inventory efficiently, and support multi-location operations. Our POS is tailored for distributors and wholesale retailers, combining retail flexibility with wholesale functionality.",
      icon: wholesaleIcon,
    },
    {
      title: "Garment & Clothing POS",
      description:
        " Handle size and color variations, manage seasonal collections, and track sales trends effortlessly. Moreover, our garment POS system simplifies inventory management, enhances customer service, and provides valuable insights into fashion trends, helping you stay ahead in the market.",
      icon: salonIcon,
    },
    {
      title: "Grocery Store POS",
      description:
        "Manage perishable inventory, handle bulk sales, and integrate seamlessly with barcode scanners. In addition, our grocery store POS system supports weight scales, loyalty programs, and ensures efficient checkout processes, making it the perfect solution for your business..",
      icon: bakeryIcon,
    },
    {
      title: "Electronics Store POS",
      description:
        "Manage complex parts catalogs, track vehicle compatibility, and handle customer orders efficiently. Moreover, our auto parts POS system simplifies inventory management, enhances customer service, and provides accurate parts information, ensuring seamless operations and customer satisfaction.",
      icon: electronicsIcon,
    },
    {
      title: "FBR integrated (POS) point-of-sale",
      description:
        "Our FBR-integrated POS ensures tax compliance, real-time reporting, and efficient sales management. Additionally, it supports barcode scanning, digital invoicing, and seamless inventory tracking, streamlining your operations and ensuring accurate financial records.",
      icon: bookstoreIcon,
    }
  ];

  const leftSolutions = solutions.slice(0, 4);
  const rightSolutions = solutions.slice(4);

  return (
    <div className="model-section">
      <h2 className="model-heading">Industry-Specific Solutions</h2>
      <p className="model-subheading">Tailored Solutions for Your Unique Business Needs</p>

      <div className="model-container">
        <div className="model-column left-column">
          {leftSolutions.map((solution, index) => (
            <div className="solution-block" key={index}>
              <div className="solution-icon">
                <img src={solution.icon} alt={solution.title} />
              </div>
              <div className="solution-text">
                <h4>{solution.title}</h4>
                <p>{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="vertical-line"></div>

        <div className="model-column right-column">
          {rightSolutions.map((solution, index) => (
            <div className="solution-block" key={index}>
              <div className="solution-icon">
                <img src={solution.icon} alt={solution.title} />
              </div>
              <div className="solution-text">
                <h4>{solution.title}</h4>
                <p>{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Model;
