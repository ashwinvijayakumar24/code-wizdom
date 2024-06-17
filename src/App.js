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
          <Route exact path={courses[0].link} element={<SingleCourse course={courses[0]}/>} />
          <Route exact path={courses[1].link} element={<SingleCourse course={courses[1]}/>} />
          <Route exact path={courses[2].link} element={<SingleCourse course={courses[2]}/>} />
          <Route exact path={courses[3].link} element={<SingleCourse course={courses[3]}/>} />
          <Route exact path={courses[4].link} element={<SingleCourse course={courses[4]}/>} />
          <Route exact path={courses[5].link} element={<SingleCourse course={courses[5]}/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/signup-completed" element={<SignUpCompleted/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
