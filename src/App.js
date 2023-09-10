import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Tutorials from "./pages/tutorials/Tutorials";
import CoursePage from "./pages/coursePage/CoursePage";


function App() {
  return (
  <>
  <Router>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/tutorials" element={<Tutorials/>}/>
      <Route path="/course-page" element={<CoursePage/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
