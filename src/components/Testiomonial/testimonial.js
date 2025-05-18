import React, { useState } from "react";
import "./testimonial.css";
import img1 from '../../images/rev1.jpg';
import img2 from '../../images/rev2.jpg';
import img3 from '../../images/rev3.jpg';

const testimonials = [
  {
    name: "Muhammad Ishaq",
    title: "Director | Dux PenWorld",
    image: img1,
    message: "OneClick POS by Eyecon Consultant has truly been a game-changer for us. Thanks to its seamless inventory management, smooth billing, and real-time reporting, everything just works. Furthermore, managing multiple branches has never been easier.",
    time: "1 Day Ago"
  },
  {
    name: "Sarah Ahmed",
    title: "Manager | BloomTech",
    image: img2,
    message: "We’ve been using OneClick POS for years. Their support is top-notch, and the system continues to evolve with smart features. Highly recommended!",
    time: "2 Days Ago"
  },
  {
    name: "Ali Raza",
    title: "Owner | Ali Mart",
    image: img3,
    message: "Easy to use, customizable, and super-efficient for retail. We've saved time and money by switching to OneClick POS.",
    time: "4 Days Ago"
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[index];

  return (
    <div className="testimonial-container">
      <p className="testimonial-subtitle">Testimonial</p>
      <h1 className="testimonial-title">What People Think and Experienced</h1>

      <div className="testimonial-content">
        <button onClick={prevTestimonial} className="arrow-btn">❮</button>

        <div className="testimonial-card">
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
          <h3>{testimonial.name}</h3>
          <p className="testimonial-role">{testimonial.title}</p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="testimonial-message">{testimonial.message}</p>
          <p className="testimonial-date">{testimonial.time}</p>
        </div>

        <button onClick={nextTestimonial} className="arrow-btn">❯</button>
      </div>
    </div>
  );
};

export default Testimonial;
