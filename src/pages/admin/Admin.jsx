import React, { useEffect, useState } from "react";
import {
  getAllStudents,
  deleteBlog,
  deleteTestimonial,
  getAllTestimonial,
  getAllDemoNotes,
  deleteDemoNotes,
} from "../../Firebase";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Admin = () => {
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

  const handleDeletion = async (bid, title) => {
    await deleteBlog(bid);
    fetchAllStudents();
  };

  // for testimonial
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialLoaded, setteStimonialLoaded] = useState(false);
  const [demoNotes, setDemoNotes] = useState([]);
  const [demoNotesLoaded, setDemoNotesLoaded] = useState(false);
  const [filteredDemoNotes, setFilteredDemoNotes] = useState(false);
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

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearchInput(searchQuery);

    const filteredStudents = blogs.filter((student) => {
      return student.sid.toLowerCase().includes(searchQuery);
    });

    setFilteredBlogs(filteredStudents);
  };

  const fetchAllDemoNotes = async () => {
    const result = await getAllDemoNotes();
    setDemoNotesLoaded(true);
    if (!result) {
      return;
    }
    const tempDemoNotes = [];
    result.forEach((doc) => tempDemoNotes.push({ ...doc.data(), tid: doc.id }));
    setDemoNotes(tempDemoNotes);
    setFilteredDemoNotes(tempDemoNotes);
  };
  const handleDemoNotes = async (tid, title) => {
    await deleteDemoNotes(tid);
    fetchAllDemoNotes();
  };

  useEffect(() => {
    fetchAllStudents();
    fetchAllTestimonial();
    fetchAllDemoNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="p-5 font-semibold flex flex-col sm:flex-row justify-center items-center">
        <div className="mb-3 sm:mb-0 sm:mr-4 sm:order-1">
          <div className="inline-flex flex-col relative text-gray-500">
            <div className="relative">
              <input
                type="text"
                className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                placeholder="Search by SID..."
                value={searchInput}
                onChange={handleSearch}
              />
              <svg
                className="w-4 h-4 absolute left-2.5 top-3.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-center font-bold text-2xl mb-3 sm:mb-0 sm:order-2 sm:mx-auto">
          STUDENT LIST
        </h1>
        <div className="flex justify-center items-center mt-3 sm:mt-0 sm:order-3">
          <Link
            to="/create-admit-card"
            className="btn btn-xs btn-active btn-secondary sm:mr-4"
          >
            New Admit Card
          </Link>
          <Link
            to="/create-testimonial"
            className="btn btn-xs btn-active btn-secondary sm:mr-4"
          >
            New Testimonial
          </Link>
          <Link
            to="/new-admission"
            className="btn btn-xs btn-active btn-secondary sm:mr-4"
          >
            New Student
          </Link>
          <Link
            to="/upload-demo-note"
            className="btn btn-xs btn-active btn-secondary"
          >
            Demo-Notes
          </Link>
        </div>
      </div>

      <div className="">
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
                    <th>Email</th>
                    <th>Date of Joining</th>
                    <th>Month Name</th>
                    <th>Max Mark</th>
                    <th>Edit</th>
                    <th>Delete</th>
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
                      <td className="font-semibold">{item.enrolled_course}</td>
                      <td className="font-semibold">{item.email}</td>
                      <td className="font-semibold">{item.doa}</td>
                      <td className="font-semibold">{item.test_month}</td>
                      <td className="font-semibold">{item.max_mark}</td>
                      <td>
                        <Link
                          to={`/update-student/${item.bid}`}
                          className="btn btn-success btn-xs"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-error btn-xs"
                          onClick={() => handleDeletion(item.bid, item.title)}
                        >
                          Delete
                        </button>
                      </td>
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

      {/* testimonial data */}
      <div className="">
        <div className="flex justify-center items-center m-4 font-semibold">
          <h1 className="text-[2rem]"></h1>
          <h1 className="text-center font-bold text-2xl mb-3 sm:mb-0 sm:order-2 sm:mx-auto">
            TOPPER STUDENT LIST
          </h1>
        </div>
        {filteredTestimonial && testimonialLoaded ? (
          filteredTestimonial.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-gray-200">
                  <tr className="text-[1rem]">
                    <th>Sr. No.</th>
                    <th>Image</th>
                    <th>Student Name</th>
                    <th>Description</th>
                    <th>Max Mark</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTestimonial.map((item, index) => (
                    <tr key={item.tid}>
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

                      <td className="font-semibold">{item.desc}</td>
                      <td className="font-semibold">{item.max_mark}</td>

                      <td>
                        <button
                          className="btn btn-error btn-xs"
                          onClick={() =>
                            handleTestimonial(item.tid, item.title)
                          }
                        >
                          Delete
                        </button>
                      </td>
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

      {/*demo notes list */}
      <div className="">
        <div className="flex justify-center items-center m-4 font-semibold">
          <h1 className="text-[2rem]"></h1>
          <h1 className="text-center font-bold text-2xl mb-3 sm:mb-0 sm:order-2 sm:mx-auto">
            Demo Notes List
          </h1>
        </div>
        {filteredDemoNotes && demoNotesLoaded ? (
          filteredDemoNotes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-gray-200">
                  <tr className="text-[1rem]">
                    <th>Sr. No.</th>
                    {/* <th>file</th> */}
                    <th>file Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDemoNotes.map((item, index) => (
                    <tr key={item.tid}>
                      <td className="flex items-center space-x-3">
                        <div className="font-bold">{index + 1}.</div>
                      </td>
                      {/* <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.thumbnail} alt="Thumbnail" />
                            </div>
                          </div>
                        </div>
                      </td> */}
                      <td>
                        <div className="font-semibold">{item.name}</div>
                      </td>

                      <td className="font-semibold">{item.desc}</td>
                      <td className="font-semibold">Rs. {item.price}</td>

                      <td>
                        <button
                          className="btn btn-error btn-xs"
                          onClick={() => handleDemoNotes(item.tid, item.title)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert">
              <div className="text-red-500">
                <strong>No Data Found!</strong>
              </div>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Admin;
