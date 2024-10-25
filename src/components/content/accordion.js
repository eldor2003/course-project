"use client";
import Image from "next/image";
import "./accordion.css";
import image from "@/assets/top.png";
import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={toggleAccordion}
        style={{ marginBottom: isOpen ? "16px" : "0px" }}
      >
        <span>Любой заголовок фильтра</span>
        <Image
          src={image}
          alt="Accordion toggle"
          style={{
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
          }}
        />
      </div>
      <ul className={`accordion-content ${isOpen ? "open" : ""}`}>
        <li className="accordion-item">
          <input type="checkbox" className="checkbox" id="check-1" />
          <label htmlFor="check-1">Любое название фильтра</label>
        </li>
        <li className="accordion-item">
          <input type="checkbox" className="checkbox" id="check-2" />
          <label htmlFor="check-2">Активный фильтр</label>
        </li>
        <li className="accordion-item">
          <input type="checkbox" className="checkbox" id="check-3" />
          <label htmlFor="check-3">Любое название фильтра</label>
        </li>
      </ul>
      <div className="line"></div>
    </div>
  );
};

export default Accordion;
