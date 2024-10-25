"use client"
import "./modal.css"
import Image from "next/image";
import Accordion from "./accordion";
import { useState } from "react";
import X from "@/assets/close.svg";

const Filter = ({ last }) => {
  return (
    <>
      <ul className="filter">
        <li className="filter-title">Любой заголовок фильтра</li>
        <li className="filter-item">
          <input type="checkbox" className="checkbox" id="check-1" />
          <label htmlFor="check-1">Любое название фильтра</label>
        </li>
        <li className="filter-item">
          <input type="checkbox" className="checkbox" id="check-2" />
          <label htmlFor="check-2">Активный фильтр</label>
        </li>
        <li className="filter-item">
          <input type="checkbox" className="checkbox" id="check-3" />
          <label htmlFor="check-3">Любое название фильтра</label>
        </li>
      </ul>
      {!last && <div className="line"></div>}

    </>
  );
};

const Filters = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleModal = () => {
    setIsOpen(!isOpen);
};
  return (
    <>
      <div className="filter-container">
        <Filter />
        <Filter />
        <Filter />
        <Filter last={true} />
      </div>
      <button className="filter-btn">Открыть фильтры</button>

      <div className="modal">
        <Image src={X} className={`close-btn`} onClick={toggleModal}/>
        <Accordion/>
      </div>

    </>
  );
};

export default Filters;
