import React from "react";
import "./style.css";
import Tags from "./tags";
import Breadcrumps from "../breadcrump";

const CourseHeader = () => {
  return (
    <div>
      <Breadcrumps />
      <section className="courses-header-container">
        <h1 className="course-header">Каталог онлайн-курсов</h1>
        <Tags />
      </section>
    </div>
  );
};
export default CourseHeader;
