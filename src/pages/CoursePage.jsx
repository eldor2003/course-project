import React from "react";
import Link from "next/link";
import "./course.scss";
import Header from "@/components/header/header";
import Accordion from "@/components/accordion/Accordion";

const data = [
	{
		title: "Глава 1. С чего начать?",
		items: [
			{
				title:
					"Как проходить курс. Знакомимся с дизайном интерьеров и декорированием",
				number: "1.1",
				duration: "11 мин.",
				image: "./images/chapter6.png",
			},
			{
				title:
					"Как быстро сделать дом уютным без ремонта: декор, текстиль и растения",
				number: "1.2",
				duration: "7 мин.",
				image: "./images/chapter2.png",
			},
			{
				title: "Стили в интерьере",
				number: "1.3",
				duration: "9 мин.",
				image: "./images/chapter3.png",
			},
			{
				title: "Правила смешивания стилей",
				number: "1.4",
				duration: "11 мин.",
				image: "./images/chapter4.png",
			},
			{
				title: "Работа с цветом",
				number: "1.5",
				duration: "11 мин.",
				image: "./images/chapter5.png",
			},
			{
				title: "Работа с цветом",
				number: "1.6",
				duration: "9 мин.",
				image: "./images/chapter6.png",
			},
			// more items...
		],
	},
	{
		title: "Глава 2. Мебель и отделочные материалы ",
		items: [
			{
				title: "Подбор мебели для гостиной (практика составления коллажей)",
				number: "2.1",
				duration: "11 мин.",
				image: "./images/furniture1.png",
			},
			{
				title:
					"Подбор материалов для гостиной (практика на примере загородного дома)",
				number: "2.2",
				duration: "7 мин.",
				image: "./images/furniture2.png",
			},
			{
				title:
					"Все, что нужно знать об отделочных материалах: декоративная штукатурка, обои",
				number: "2.3",
				duration: "9 мин.",
				image: "./images/furniture3.png",
			},
			{
				title:
					"Отделочные материалы: краска, натуральный и искусственный камень, плитка",
				number: "2.4",
				duration: "11 мин.",
				image: "./images/furniture4.png",
			},
			{
				title: "Отделочные материалы: напольные покрытия",
				number: "2.5",
				duration: "7 мин.",
				image: "./images/furniture5.png",
			},
			// more items...
		],
	},
];

const CoursePage = () => {
	return (
		<>
			<Header />

			{/* Course top */}
			<section className='courses'>
				<div className='container'>
					<div className='course_top'>
						<Link href={"/"} className='return_btn'>
							<img src='./images/arrow_left_alt.svg' alt='' />
							<span>К списку курсов</span>
						</Link>
						<h1 className='course_title'>
							Сделай свой дом уютным и красивым без дизайнера
						</h1>
						<div className='course_details'>
							<img src='./images/video_icon.svg' alt='' />
							<p className='couse_detail'>Пройдено: 1 из 16 видео</p>
						</div>
					</div>
					{/* course  accordions */}
					<div className='accordion_block'>
						{data.map((section, index) => (
							<Accordion
								key={index}
								title={section.title}
								items={section.items}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default CoursePage;
