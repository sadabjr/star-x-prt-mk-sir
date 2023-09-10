import homeImg from "../../asssets/images/Home.png";
import "./home.css";
import mk from "../../asssets/images/mk.jpg";
import youtube from "../../asssets/images/youtube.png";
import telegram from "../../asssets/images/telegram.png";
import whatsapp from "../../asssets/images/whatsapp.png";
import facebook from "../../asssets/images/facebook.png";
import instagram from "../../asssets/images/instagram.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import img1 from "../../asssets/images/4.jpg";
import img2 from "../../asssets/images/7.jpg";
import img3 from "../../asssets/images/1-compressed.jpg";
import img4 from "../../asssets/images/6.jpg";
import img5 from "../../asssets/images/10-compressed.jpg";
import img6 from "../../asssets/images/12-compressed.jpg";
import img7 from "../../asssets/images/13-compressed.jpg";
import img8 from "../../asssets/images/8.jpg";
import img9 from "../../asssets/images/9.jpg";
import img10 from "../../asssets/images/7-compressed.jpg";
import img11 from "../../asssets/images/8-compressed.jpg";
import img12 from "../../asssets/images/9-compressed.jpg";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={homeImg} alt="img" className="max-w-xl cursor-pointer" />
          <div className="">
            <h1 className="typeWriter font-bold md:text-6xl text-4xl cursor-pointer">
              <span className="text-[#5b67a5]">Learn </span>
              <span className="">With Mukesh Sir</span>
            </h1>
            <h4 className="py-6 md:text-[2rem] text-[1rem] font-medium">
              Master demanding Skills in Computer and More with an Exceptional
              Teacher at Star X-Prt Computer Technical Institute
            </h4>
          </div>
        </div>
      </div>
      {/* course */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <h4 className="font-bold md:text-4xl text-3xl text-center">
          Making learning easier and more convenient for you.
        </h4>
        <h4
          className="font-bold md:text-3xl text-3xl text-center pt-8"
          style={{ textDecoration: "underline" }}
        >
          Our Services
        </h4>

        {/* card-container */}
        <div class="flex flex-wrap justify-center align-middle gap-10 py-10 ">
          {/* card start*/}
          <div className="card w-96 bg-base-100 shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="card-body">
              <div className="text-center py-4">
                <i class="fa-solid fa-computer fa-4x"></i>
              </div>
              <h2 className="card-title text-center mx-auto">
                Computer Skills Training
              </h2>
              <p className="text-justify">
                At Star X-Prt Computer Institute, we offer comprehensive
                computer skills training, guided by our expert instructor. Our
                courses cover a wide range of topics, including: Microsoft
                Office, Tally Desktop Publishing Software(DTP), Web Designing
                etc.
              </p>
            </div>
          </div>
          {/* card end*/}
          {/* card start*/}
          <div className="card w-96 bg-base-100 shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="card-body">
              <div className="text-center py-4">
                <i class="fa-solid fa-users-gear fa-4x"></i>
              </div>
              <h2 className="card-title text-center mx-auto">
                Tech Support & Sales
              </h2>
              <p className="text-justify">
                Teaching and provides hands-on support: PC, Laptop, and Printer
                Repairs: Count on us for quick and reliable fixes. Refurbished
                Laptop Sales: Explore our range of budget-friendly, quality
                laptops.
              </p>
            </div>
          </div>
          {/* card end*/}
          {/* card start*/}
          <div className="card w-96 bg-base-100 shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="card-body">
              <div className="text-center py-4">
                <i class="fa-solid fa-paintbrush fa-4x"></i>
              </div>
              <h2 className="card-title text-center mx-auto">
                Creative Services
              </h2>
              <p className="text-justify">
                {" "}
                In addition to training and tech support, we offer creative
                services to meet your needs. Get eye-catching banners for your
                events and promotions. YouTube channel for tech tips and
                insights. We design custom ID cards for your business or
                organization.
              </p>
            </div>
          </div>
          {/* card end*/}
        </div>
      </div>
      {/* carousel start */}
      <div className="carouselCC container p-[5rem] m-auto">
        <div className="">
          <div>
            <h4
              className="font-bold md:text-3xl text-3xl text-center pt-8 pb-8"
              style={{ textDecoration: "underline" }}
            >
              Our Family
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
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img1}
                alt=" slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img2}
                alt=" slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img3}
                alt="slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img4}
                alt=" slide 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img5}
                alt="slide 5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img6}
                alt="slide 6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img7}
                alt="slide 7"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img8}
                alt="slide 8"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img9}
                alt="slide 9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img10}
                alt="slide 10"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img11}
                alt="slide 11"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-100 rounded-xl"
                src={img12}
                alt="slide 12"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* carousel end */}
      {/* meet your instructor */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row border-b-2 pb-5 border-blue-900">
          <h1 className="font-bold md:text-4xl text-2xl">
            <span className="">Meet your</span>
            <span className="text-[#5b67a5]"> instructor </span>
          </h1>
        </div>
        <div className="flex flex-col pt-10 justify-center items-center">
          <div class="h-40 w-40 rounded-full overflow-hidden">
            <img src={mk} alt="Profile" class="object-cover h-full w-full" />
          </div>
          <h5 className="font-bold md:text-xl text-xl">Mukesh Kumar</h5>
          <h6 className="font-bold md:text-xl text-xl">Founder, Star X-Prt</h6>
        </div>
      </div>

      <div className="flex justify-center items-center mx-20 my-20">
        <q className="text-[1.5rem] text-center font-semibold">
          <i>
            At Star X-Prt Computer Institute, we are your one-stop destination
            for all things tech-related. Whether you're a learner, a business
            owner, or simply looking for tech solutions, we've got you covered!
          </i>
        </q>
      </div>

      {/* youtube family */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-20 pb-20">
        <h4 className="font-bold md:text-4xl text-3xl text-center">
          Join our YouTube family
        </h4>
        <p className="font-bold md:text-xl text-xl text-center text-slate-500">
          If you would like to keep up on the latest posts and courses, come by
          and connect with us on the following links.
        </p>
        <div className="flex flex-center justify-center items-center">
          <a href="https://www.youtube.com/@starxprt">
            <img src={youtube} alt="" />
          </a>
          <a href="https://www.youtube.com/@starxprt">
            <img src={telegram} alt="" />
          </a>
          <a href="https://chat.whatsapp.com/JX3GZih69uo2tNIhGGTRyA">
            <img src={whatsapp} alt="" />
          </a>
          <a href="https://www.instagram.com/mukeshyadav5635/">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100090111807605">
            <img src={facebook} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
