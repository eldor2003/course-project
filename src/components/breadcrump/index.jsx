import Image from "next/image";
import React from "react";
import "./style.scss";
import Link from "next/link";
const Breadcrumps = () => {
	return (
		<div className='breadcrump'>
			<Link href='/'>Главная</Link>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='21'
				viewBox='0 0 20 21'
				fill='none'
			>
				<mask
					id='mask0_505_383'
					style={{ "mask-type": "alpha" }}
					maskUnits='userSpaceOnUse'
					x='0'
					y='0'
					width='20'
					height='21'
				>
					<rect y='0.5' width='20' height='20' fill='#D9D9D9' />
				</mask>
				<g mask='url(#mask0_505_383)'>
					<path
						d='M10.5003 10.5L6.66699 6.66667L7.83366 5.5L12.8337 10.5L7.83366 15.5L6.66699 14.3333L10.5003 10.5Z'
						fill='#333333'
					/>
				</g>
			</svg>
			<p>Каталог курсов</p>
		</div>
	);
};

export default Breadcrumps;
