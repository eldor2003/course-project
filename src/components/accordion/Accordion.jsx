"use client";
import React from "react";
import { useState } from "react";
import "./accordion.scss";

const Accordion = ({ title, items }) => {
	const [isOpen, setIsOpen] = useState(true);
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
				<div className='accordion_content'>
					<div className='item_list'>
						{items.map((item, index) => (
							<div key={index} className='item'>
								<img src={item.image} alt={item.title} className='image' />
								<div className='details'>
									<div className='detail_top'>
										<p className='detail_number'># {item.number} </p>
										<div className='detail_time'>
											<img src='./images/history.svg' alt='' />
											<span>{item.duration}</span>
										</div>
									</div>
									<h3 className='detail_title'>{item.title}</h3>
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
