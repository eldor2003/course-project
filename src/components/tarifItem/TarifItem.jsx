import React from "react";
import Image from "next/image";
import "./tarifItem.scss";
const TarifItem = ({ item }) => {
	return (
		<div className='tarif_item'>
			<p className='tarif_name'>{item.tarif}</p>
			<div className='tarif_price'>
				<p className='price_count'>{item.price}</p>
				<span>{item.month}</span>
			</div>
			<ul className='tarif_lists'>
				<li>
					<Image
						src='./images/tarif_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_disabled_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_disabled_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_disabled_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_disabled_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_disabled_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_disabled_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
				<li>
					<Image
						src='./images/tarif_disabled_icon.svg'
						width={18}
						height={18}
						alt='image'
					/>
					<p>Текст в одну небольшую строчку</p>
				</li>
			</ul>
			<div className='tarif_btn'>
				<button>Выбрать тариф</button>
			</div>
			<div className='tarif_top_img'>
				<img src='./images/tarif_top1.png' alt='saa' />
			</div>
		</div>
	);
};

export default TarifItem;
