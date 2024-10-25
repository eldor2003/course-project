import React from 'react'
import "./style.css";
import Tags from './tags';

const CourseHeader = () => {
  return (
    <section className='courses-header-container'>
      <h1 className='course-header'>Каталог онлайн-курсов</h1>
      <Tags/>
    </section>
  )
}
export default CourseHeader
