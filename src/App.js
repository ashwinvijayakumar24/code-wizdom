import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import ScrollToTop from "./components/global/ScrollToTop";
import Navbar from "./components/global/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/global/Footer";
import Error from "./components/error/error";
import Courses from "./components/routes/courses/Courses";
import SingleCourse from "./components/routes/courses/SingleCourse";
import courses from "./components/routes/courses/CourseData";
import Tutors from "./components/routes/tutors/Tutors";
import SignUp from "./components/routes/signup/SignUp";
import SignUpCompleted from "./components/routes/signup/SignUpCompleted";



const App = () => {
  return (
    <Router>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tutors" element={<Tutors/>} />
          <Route exact path="/courses" element={<Courses/>} />
          {courses.map((course, index) => (
            <Route key={index} exact path={`/courses${course.link}`} element={<SingleCourse course={course}/>} />
          ))}
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/signup-completed" element={<SignUpCompleted/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
