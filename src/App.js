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
import Admin from "./pages/admin/Admin";
import NewStudent from "./pages/newStudent/NewStudent";
import Login from "./pages/login/Login";
import UpdateStudent from "./pages/updateStudent/UpdateStudent";
import NewTestimonial from "./pages/newTest/NewTestimonial";
import NotesList from "./pages/note-list/NotesList";
import PdfViewer from "./pages/PdfViewer/PdfViewer";
import UploadDemoNotes from "./pages/upload-demo-note/UploadDemoNotes";
import PdfList from "./pages/PdfList/PdfList";
import AdmitCard from "./pages/adminCard/AdmitCard";
import CreateAdmitCard from "./pages/createAdmitCard/CreateAdmitCard";
import AdmitCardList from "./pages/admitCardList/AdmitCardList";
import DownloadAdmitCard from "./pages/downloadAdmitCard/DownloadAdmitCard";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/course-page" element={<CoursePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/new-admission" element={<NewStudent />} />
          <Route path="/update-student/:bid" element={<UpdateStudent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-testimonial" element={<NewTestimonial/>} />
          {/* upload notes */}
          <Route path="/upload-demo-note" element={<UploadDemoNotes/>} />
          <Route path="/pdf-list" element={<PdfList />} />
          <Route path="/admit-card" element={<AdmitCard />} />
          <Route path="/pdf-viewer/:pdfId" element={<PdfViewer/>} />
          <Route path="/create-admit-card" element={<CreateAdmitCard/>} />
          <Route path="/admit-card-list" element={<AdmitCardList/>} />
          <Route path="/download-admit-card" element={<DownloadAdmitCard/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
