import React from "react";
import "./style.css";
import CourseCard from "../../components/CourseCard";

const Courses = () => {
  return (
    <div className="min-h-screen z-0">
      <div className=" mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <h4
          className="font-bold md:text-3xl text-3xl text-center pt-10"
          style={{ textDecoration: "underline" }}
        >
          Our Courses
        </h4>
        {/* card-container */}
        <div class="flex flex-wrap justify-center align-middle gap-10 py-10 ">
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Courses;
