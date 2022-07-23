import React from "react";
import CourseCard from "./pages/CourseCard";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Teacher from "./pages/Teacher";
import ContactForm from "./pages/ContactForm";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TeacherDetails from "./pages/TeacherDetails";
import CardDetails from "./pages/CardDetails";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/courses/:name" element={<CardDetails />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:id" element={<TeacherDetails />} />
          //! burada teacherdan sonra ki : id nin degisken oldugunu algilamasi
          //! icin.
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
