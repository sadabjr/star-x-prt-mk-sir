import React from "react";
import "./style.css";
import heroImg from "../../asssets/images/mk.jpg";
import about from "../../asssets/images/about.png";
import about2 from "../../asssets/images/about2.jpg";
import rahul from "../../asssets/images/rahul.jpg";
import ranjeet from "../../asssets/images/Ranjeet.jpg";
import deepak from "../../asssets/images/deepak.jpg";
import Sujay from "../../asssets/images/Sujay.jpg";
import Mohan from "../../asssets/images/mohan.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const About = () => {
  return (
    <div className="min-h-screen z-0">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
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

          {/* testimonials */}

          <div className="carouselCC container p-[5rem] m-auto">
            <div className="">
              <div>
                <h4
                  className="font-bold md:text-3xl text-3xl text-center pt-8 pb-8"
                  
                >
                  Our brilliant Students
                </h4>
              </div>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center py-5">
                    <img
                      src={Sujay}
                      alt=""
                      className="w-20 h-20 rounded-full dark:bg-gray-500 rounded-circle"
                    />
                    <blockquote className="max-w-lg text-lg italic font-medium text-center">
                      "Topper of the CCC Exam August 2023"
                    </blockquote>
                    <div className="text-center dark:text-gray-400">
                      <p>Sujay</p>
                      <p>Marks:  CCC 100/86</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex flex-col justify-center items-center py-5">
                    <img
                      src={Mohan}
                      alt=""
                      className="w-20 h-20 rounded-full dark:bg-gray-500 rounded-circle"
                    />
                    <blockquote className="max-w-lg text-lg italic font-medium text-center">
                    "Topper of the CCC Exam August 2023"
                    </blockquote>
                    <div className="text-center dark:text-gray-400">
                    <p>Mohan</p>
                      <p>Marks:  ADCA 100/88</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
