'use client'
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
      <h1 className="accordion-title">Фильтры</h1>
      <div className="accordion-body">
        <div className="accordion-button" onClick={toggleAccordion} style={{ marginBottom: isOpen ? '16px' : '0px' }}>
          <span>Любой заголовок фильтра</span>
          <Image src={image} alt="Accordion toggle" style={{ transition:"transform 0.3s ease", transform: isOpen ? 'rotate(0deg)':'rotate(180deg)' }}/>
        </div>
        <ul className={`accordion-items ${isOpen ? 'open' : ''}`}>
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
      
      <div className="accordion-body">
        <div className="accordion-button" onClick={toggleAccordion} style={{ marginBottom: isOpen ? '16px' : '0px' }}>
          <span>Любой заголовок фильтра</span>
          <Image src={image} alt="Accordion toggle" style={{ transition:"transform 0.3s ease", transform: isOpen ? 'rotate(0deg)':'rotate(180deg)' }}/>
        </div>
        <ul className={`accordion-items ${isOpen ? 'open' : ''}`}>
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

      <div className="accordion-body">
        <div className="accordion-button" onClick={toggleAccordion} style={{ marginBottom: isOpen ? '16px' : '0px' }}>
          <span>Любой заголовок фильтра</span>
          <Image src={image} alt="Accordion toggle" style={{ transition:"transform 0.3s ease", transform: isOpen ? 'rotate(0deg)':'rotate(180deg)' }}/>
        </div>
        <ul className={`accordion-items ${isOpen ? 'open' : ''}`}>
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
      <div className="btn-group">
        <button className="clear-btn">Очистить</button>
        <button className="submit-btn">Применить</button>
      </div>
    </div>
  );
};

export default Accordion;
