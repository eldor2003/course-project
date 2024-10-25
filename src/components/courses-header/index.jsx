import React from "react";
import "./style.scss";
import Breadcrumps from "../breadcrump";
import Tags from "./tags";

const CourseHeader = () => {
	return (
		<div>
			<Breadcrumps />
			<section className='courses-header-container'>
				<h1 className='course-header'>Каталог онлайн-курсов</h1>
				<Tags />
			</section>
		</div>
	);
};
export default CourseHeader;
