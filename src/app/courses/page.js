import Content from "@/components/content";
import CourseHeader from "@/components/courses-header";
import Header from "@/components/header/header";

const Courses = () => {
	return (
		<>
			<Header />
			<div className='courses-container'>
				<CourseHeader />
				<Content />
			</div>
		</>
	);
};

export default Courses;
