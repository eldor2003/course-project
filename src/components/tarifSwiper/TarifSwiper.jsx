import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "./tarifSwiper.scss";
// import required modules
import { Pagination } from "swiper/modules";
import TarifItem from "../tarifItem/TarifItem";

export default function TarifSwiper() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const data = [
		{
			id: 1,
			price: "2 900 ₽",
			month: "/мес",
			tarif: "Basic",
		},
		{
			id: 2,
			price: "12 900 ₽",
			month: "/мес",
			tarif: "Standart",
		},
		{
			id: 3,
			price: "24 900 ₽",
			month: "/мес",
			tarif: "Premium",
		},
	];
	return (
		<>
			<section className='tarif'>
				<div className='container'>
					{isMobile ? (
						<Swiper
							spaceBetween={12}
							pagination={{
								clickable: true,
							}}
							slidesPerView={1.1}
							modules={[Pagination]}
							className='mySwiper'
						>
							{data?.map((item) => (
								<SwiperSlide key={item.id}>
									<TarifItem item={item} />
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<div className='tarif_block'>
							<div className='tarif_item'>
								<p className='tarif_name'>Basic</p>
								<div className='tarif_price'>
									<p className='price_count'>2 900 ₽</p>
									<span>/мес</span>
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
									<img src='./images/tarif_top1.png' alt='' />
								</div>
							</div>

							<div className='tarif_item'>
								<p className='tarif_name'>Standart</p>
								<div className='tarif_price'>
									<p className='price_count'>12 900 ₽</p>
									<span>/мес</span>
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
								</ul>
								<div className='tarif_btn'>
									<button>Выбрать тариф</button>
								</div>
								<div className='tarif_top_img'>
									<img src='./images/tarif_top2.png' alt='' />
								</div>
							</div>

							<div className='tarif_item'>
								<p className='tarif_name'>Premium</p>
								<div className='tarif_price'>
									<p className='price_count'>24 900 ₽</p>
									<span>/мес</span>
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
								</ul>
								<div className='tarif_btn'>
									<button>Выбрать тариф</button>
								</div>
								<div className='tarif_top_img'>
									<img src='./images/tarif_top3.png' alt='' />
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
