"use client";
import Image from "next/image";
import "./accordion.scss";
import image from "@/assets/top.png";
import { useState } from "react";

const Accordion = ({ inputKey }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className='accordion'>
			<div
				className='accordion-header'
				onClick={toggleAccordion}
				style={{ marginBottom: isOpen ? "16px" : "0px" }}
			>
				<span>Любой заголовок фильтра</span>
				<Image
					src={image}
					alt='Accordion toggle'
					style={{
						transition: "transform 0.3s ease",
						transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
					}}
				/>
			</div>
			<ul className={`accordion-content ${isOpen ? "open" : ""}`}>
				<li className='accordion-item'>
					<input
						type='checkbox'
						className='checkbox'
						id={`checked-${inputKey[0]}`}
					/>
					<label htmlFor={`checked-${inputKey[0]}`}>
						Любое название фильтра
					</label>
				</li>
				<li className='accordion-item'>
					<input
						type='checkbox'
						className='checkbox'
						id={`checked-${inputKey[1]}`}
					/>
					<label htmlFor={`checked-${inputKey[1]}`}>Активный фильтр</label>
				</li>
				<li className='accordion-item'>
					<input
						type='checkbox'
						className='checkbox'
						id={`checked-${inputKey[2]}`}
					/>
					<label htmlFor={`checked-${inputKey[2]}`}>
						Любое название фильтра
					</label>
				</li>
			</ul>
			<div className='line'></div>
		</div>
	);
};

export default Accordion;
