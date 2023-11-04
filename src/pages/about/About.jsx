import React, { useEffect, useState } from "react";
import "./style.css";
import heroImg from "../../asssets/images/mk.jpg";
import about from "../../asssets/images/about.png";
import about2 from "../../asssets/images/about2.jpg";
import rahul from "../../asssets/images/rahul.jpg";
import ranjeet from "../../asssets/images/Ranjeet.jpg";
import deepak from "../../asssets/images/deepak.jpg";
import Sujay from "../../asssets/images/Sujay.jpg";
import Mohan from "../../asssets/images/mohan.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loader from "../../components/loader/Loader";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import {
  getAllStudents,
  deleteTestimonial,
  getAllTestimonial,
} from "../../Firebase";

// import required modules

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const About = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [blogsLoaded, setBlogsLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // Fetch Students
  const fetchAllStudents = async () => {
    const result = await getAllStudents();
    setBlogsLoaded(true);
    if (!result) {
      return;
    }
    const tempBlogs = [];
    result.forEach((doc) => tempBlogs.push({ ...doc.data(), bid: doc.id }));
    setBlogs(tempBlogs);
    setFilteredBlogs(tempBlogs);
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearchInput(searchQuery);

    const filteredStudents = blogs.filter((student) => {
      return student.sid.toLowerCase().includes(searchQuery);
    });

    setFilteredBlogs(filteredStudents);
  };

  // for testimonial
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialLoaded, setteStimonialLoaded] = useState(false);
  const [filteredTestimonial, setFilteredTestimonial] = useState([]);

  // fetch all testimonial
  const fetchAllTestimonial = async () => {
    const result = await getAllTestimonial();
    setteStimonialLoaded(true);
    if (!result) {
      return;
    }
    const tempTestimonial = [];
    result.forEach((doc) =>
      tempTestimonial.push({ ...doc.data(), tid: doc.id })
    );
    setTestimonials(tempTestimonial);
    setFilteredTestimonial(tempTestimonial);
  };

  const handleTestimonial = async (tid, title) => {
    await deleteTestimonial(tid);
    fetchAllTestimonial();
  };

  useEffect(() => {
    fetchAllStudents();
    fetchAllTestimonial();
  }, []);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="min-h-screen z-0">
      <div className=" mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <h4
          className="font-bold md:text-3xl text-3xl text-center pt-10"
          style={{ textDecoration: "underline" }}
        >
          About Us
        </h4>

        <div class="flex flex-wrap justify-center align-middle gap-10">
          <div className="hero py-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <img
                src={about}
                alt="heroImg"
                className="w-full max-w-sm rounded-lg shadow-2xl"
              />

              <div>
                <h4 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                  About Star X Part Computer Institute
                </h4>
                <p className="py-6 text-justify">
                  At Star X Part Computer Institute, we're not just an
                  educational institution; we're a guiding star on your journey
                  to mastering the world of computers. Led by our dedicated
                  instructor, Mukesh, we empower students with essential
                  computer skills that open doors to endless possibilities.
                </p>
                <p className=" text-justify">
                  Join us on this exciting journey as we explore the boundless
                  horizons of computer skills and innovation. Discover your
                  inner tech wizard and let Star X Part Computer Institute be
                  your guiding star towards a brighter future.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center align-middle gap-10 py-5 ">
          <div className="hero py-10  bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <div>
                <h4 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                  Meet Mukesh: Your Expert Guide
                </h4>
                <p className="py-6 text-[1rem] text-justify">
                  Mukesh, our seasoned instructor, brings a wealth of knowledge
                  and experience to the classroom. With a passion for teaching,
                  he imparts expertise in a range of computer disciplines,
                  including Microsoft Office proficiency, Tally mastery, desktop
                  publishing wizardry, and the art of web designing.
                </p>
                <p className=" text-[1rem] text-justify">
                  But that's not all! Mukesh is also your go-to guru for
                  troubleshooting and repairing PCs, laptops, and printers. His
                  commitment to excellence ensures that you not only learn from
                  the best but also receive top-notch technical support whenever
                  you need it.lines, including Microsoft Office proficiency,
                  Tally mastery, desktop publishing wizardry, and the art of web
                  designing.
                </p>
              </div>
              <img
                src={heroImg}
                alt="heroImg"
                className="w-full max-w-sm rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center align-middle gap-10 py-5 ">
          <div className="hero py-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <img
                src={about2}
                alt="heroImg"
                className="w-full max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h4 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                  Empowering You for Success
                </h4>
                <p className="py-6 text-[1rem] text-justify">
                  At Star X Part Computer Institute, we believe that computer
                  literacy is key to unlocking your potential in today's digital
                  age. Whether you're aiming to excel in the office, start your
                  own business, or enhance your creative skills, our
                  comprehensive courses provide the foundation you need to shine
                  brightly in the world of technology.
                </p>
                <p className=" text-[1rem] text-justify">
                  But that's not all! Mukesh is also your go-to guru for
                  troubleshooting and repairing PCs, laptops, and printers. His
                  commitment to excellence ensures that you not only learn from
                  the best but also receive top-notch technical support whenever
                  you need it.lines, including Microsoft Office proficiency,
                  Tally mastery, desktop publishing wizardry, and the art of web
                  designing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center text-[2rem] font-bold">Our Team</h1>
          <div class="flex flex-wrap justify-center align-middle gap-5 py-5 ">
            {/* card */}

            <div className="relative max-w-md  rounded overflow-hidden shadow-lg">
              <img
                src={rahul}
                alt="name"
                className="w-full h-60 object-cover"
              />
              <div className="bgShadow absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white">
                <div className="font-bold text-xl mb-1 ">Rahul</div>
                <p className="text-gray-300 text-base">Teacher</p>
              </div>
            </div>

            <div className="relative max-w-md  rounded overflow-hidden shadow-lg">
              <img
                src={deepak}
                alt="name"
                className="w-full h-60 object-cover"
              />
              <div className="bgShadow absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white">
                <div className="font-bold text-xl mb-1 ">Deepak</div>
                <p className="text-gray-300 text-base">Trainer</p>
              </div>
            </div>

            <div className="relative max-w-md  rounded overflow-hidden shadow-lg">
              <img
                src={ranjeet}
                alt="name"
                className="w-full h-60 object-cover"
              />
              <div className="bgShadow absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white">
                <div className="font-bold text-xl mb-1 ">Ranjeet</div>
                <p className="text-gray-300 text-base">Trainer</p>
              </div>
            </div>
          </div>

          {/* carsual */}

          {/* student data */}
          <div className="">
            <div className="flex justify-center items-center m-4 font-semibold">
              <h1 className="text-[2rem] text-center">Monthly Exam List</h1>
            </div>
            {filteredBlogs && blogsLoaded ? (
              filteredBlogs.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead className="bg-gray-200">
                      <tr className="text-[1rem]">
                        <th>Sr. No.</th>
                        <th>Image</th>
                        <th>Student Name</th>
                        <th>SID</th>
                        <th>Batch</th>
                        <th>Enrolled course</th>

                        <th>Month Name</th>
                        <th>Max Mark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBlogs.map((item, index) => (
                        <tr key={item.bid}>
                          <td className="flex items-center space-x-3">
                            <div className="font-bold">{index + 1}.</div>
                          </td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img src={item.thumbnail} alt="Thumbnail" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="font-semibold">{item.name}</div>
                          </td>
                          <td className="font-semibold">{item.sid}</td>
                          <td className="font-semibold">{item.batch}</td>
                          <td className="font-semibold">
                            {item.enrolled_course}
                          </td>

                          <td className="font-semibold">{item.test_month}</td>
                          <td className="font-semibold">{item.max_mark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="alert">
                  <div className="text-red-500">
                    <strong>No Students Found!</strong>
                  </div>
                </div>
              )
            ) : (
              <Loader />
            )}
          </div>

          {/* testimonials */}
        </div>
      </div>

     
    </div>
  );
};

export default About;
