"use client";
import React from "react";
import { useState } from "react";
import "./accordion.scss";

const Accordion = ({ title, items }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className='accordion'>
			<div className='accordion_header' onClick={toggleAccordion}>
				<h2>{title}</h2>
				<img
					className={`arrow ${isOpen ? "opened" : ""}  `}
					src='./images/accordion_arrow.svg'
					alt='img'
				/>
			</div>
			{isOpen && (
				<div className='accordion-content'>
					<div className='item-list'>
						{items.map((item, index) => (
							<div key={index} className='item'>
								<img src={item.image} alt={item.title} className='image' />
								<div className='details'>
									<h3>{item.title}</h3>
									<p>{item.duration}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Accordion;
