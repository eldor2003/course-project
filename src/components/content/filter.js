"use client";
import "./modal.css";
import Image from "next/image";
import Accordion from "./accordion";
import { useState } from "react";
import X from "@/assets/close.svg";

const Filter = ({ last, inputkey }) => {
	return (
		<>
			<ul className='filter'>
				<li className='filter-title'>Любой заголовок фильтра</li>
				<li className='filter-item'>
					<input
						type='checkbox'
						className='checkbox'
						id={`check-${inputkey[0]}`}
					/>
					<label htmlFor={`check-${inputkey[0]}`}>Любое название фильтра</label>
				</li>
				<li className='filter-item'>
					<input
						type='checkbox'
						className='checkbox'
						id={`check-${inputkey[1]}`}
					/>
					<label htmlFor={`check-${inputkey[1]}`}>Активный фильтр</label>
				</li>
				<li className='filter-item'>
					<input
						type='checkbox'
						className='checkbox'
						id={`check-${inputkey[2]}`}
					/>
					<label htmlFor={`check-${inputkey[2]}`}>Любое название фильтра</label>
				</li>
			</ul>
			{!last && <div className='line'></div>}
		</>
	);
};

const Filters = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className='filter-container'>
				<Filter inputkey={[1, 2, 3]} />
				<Filter inputkey={[4, 5, 6]} />
				<Filter inputkey={[7, 8, 9]} />
				<Filter inputkey={[10, 11, 12]} last={true} />
			</div>
			<button className='filter-btn' onClick={toggleModal}>
				Открыть фильтры
			</button>

			<div className={`modal ${isOpen ? "open-modal" : "close-modal"}`}>
				<Image src={X} alt='X' className={`close-btn`} onClick={toggleModal} />
				<h1 className='modal-title'>Фильтры</h1>

				<Accordion inputKey={[1, 2, 3]} />
				<Accordion inputKey={[4, 5, 6]} />
				<Accordion inputKey={[7, 8, 9]} />
				<div className='btn-group'>
					<button className='clear-btn'>Очистить</button>
					<button className='submit-btn'>Применить</button>
				</div>
			</div>
		</>
	);
};

export default Filters;
