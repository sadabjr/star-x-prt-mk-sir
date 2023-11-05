import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { editStudent, getAllStudents } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const UpdateStudent = () => {
  const location = useLocation();
  const bid = location.pathname.split("/").pop();

  const [updatedStudent, setUpdatedStudent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      const result = await getAllStudents();
      if (result) {
        const studentToEdit = result.find((item) => item.bid === bid);
        setUpdatedStudent(studentToEdit);
      }
    };
    fetchStudent();
  }, [bid]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    await editStudent(bid, updatedStudent);
    navigate("/admin");
  };
  
  return (
    <div className="min-h-screen">
      <div>
        <div className="p-5">
          <h1 className="text-2xl text-center">Student Admission Update</h1>
        </div>
        <form>
          <div className="grid md:grid-cols-4 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.name}
                onChange={handleInputChange}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="father_name"
                id="floating_father"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.father_name}
                onChange={handleInputChange}
              />
              <label
                htmlFor="floating_father"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Father Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="mother_name"
                id="floating_father"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.mother_name}
                onChange={handleInputChange}
              />
              <label
                htmlFor="floating_father"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mother Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="mob"
                id="floating_father"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.mob}
                onChange={handleInputChange}
              />
              <label
                htmlFor="floating_father"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contact Number
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-4 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="enrolled_course"
                id="floating_father"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.enrolled_course}
                onChange={handleInputChange}
              />
              <label
                htmlFor="floating_father"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Enrolled Course
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="doa"
                id="floating_father"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.doa}
                onChange={handleInputChange}
              />
              <label
                htmlFor="floating_father"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date of Enrollment
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="doa"
                id="floating_father"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.batch}
                onChange={handleInputChange}
              />
              <label
                htmlFor="floating_father"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Batch
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="floating_father"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.email}
                onChange={handleInputChange}
              />
              <label
                htmlFor="floating_father"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-4 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="sid"
                id="sid"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.sid}
                onChange={handleInputChange}
              />
              <label
                htmlFor="sid"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Student ID
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="max_mark"
                id="max_mark"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.max_mark}
                onChange={handleInputChange}
              />
              <label
                htmlFor="max_mark"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Max Mark
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="test_month"
                id="test_month"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.test_month}
                onChange={handleInputChange}
              />
              <label
                htmlFor="max_mark"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Month Name
              </label>
            </div>
           
           
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="file"
                // Add the file input handler here if needed
                name="image"
                id="floating_image"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark-text-white dark-border-gray-600 dark-focus-border-blue-500 focus-outline-none focus-ring-0 focus-border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="floating_image"
                className="peer-focus-font-medium absolute text-sm text-gray-500 dark-text-gray-400 duration-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus-left-0 peer-focus-text-blue-600 peer-focus-dark-text-blue-500 peer-placeholder-shown-scale-100 peer-placeholder-shown-translate-y-0 peer-focus-scale-75 peer-focus-translate-y-6"
              >
                Image
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <textarea
                name="address"
                id="floating_address"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark-text-white dark-border-gray-600 dark-focus-border-blue-500 focus-outline-none focus-ring-0 focus-border-blue-600 peer"
                placeholder=""
                required
                value={updatedStudent.address}
                onChange={handleInputChange}
              ></textarea>
              <label
                htmlFor="floating_address"
                className="peer-focus-font-medium absolute text-sm text-gray-500 dark-text-gray-400 duration-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus-left-0 peer-focus-text-blue-600 peer-focus-dark-text-blue-500 peer-placeholder-shown-scale-100 peer-placeholder-shown-translate-y-0 peer-focus-scale-75 peer-focus-translate-y-6"
              >
                Address
              </label>
            </div>
          </div>
          <button
            onClick={handleUpdate}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
