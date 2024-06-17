import React from "react";
import CourseCard from "./CourseCard";
import courses from "./CourseData";

  const CoursesGrid = () => {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:max-xl:grid-cols-2 lg:grid-cols-3 gap-8 text-center overflow-y-hidden mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.name} course={course} />
          ))}
        </div>
      </div>
    );
  };

  export default CoursesGrid;

