import React, { useState, useEffect, useNavigate } from "react";
import {
  storage,
  addAdmitCard,
  getAllAdmitCard,
  deleteAdmitCard,
} from "../../Firebase";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Loader from "../../components/loader/Loader";

const CreateAdmitCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    appNo: "",
    studentName: "",
    fatherName: "",
    dob: "",
    course: "",
    center: "",
    examDate: "",
    reportingTime: "",
  });

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);
    // const navigate = useNavigate();

  const handleSubmission = async (event) => {
    event.preventDefault();
    // First, upload the image
    const imageRef = ref(
      storage,
      `images/${new Date().getTime()}-${file.name}`
    );
    const uploadTask = uploadBytes(imageRef, file);
    uploadTask
      .then((snapshot) => getDownloadURL(imageRef))
      .then((imageUrl) => {
        // Once the image is uploaded, add the data and image URL to the database
        const dataWithImage = { ...formData, thumbnail: imageUrl };
        return addAdmitCard(dataWithImage);
      })
      .then(() => {
        // Navigation or any other further actions
        
        alert("admit Card is generated successfully");
        // navigate("/admit-card-list");
        window.location.replace("/admit-card-list");
      })
      .catch((error) => {
        console.error("Error uploading image or saving data:", error);
      });
  };

  //   fetch list of admit card

  const [admitCards, setAdmitCards] = useState([]);
  const [admitCardLoaded, setAdmitCardLoaded] = useState(false);
  const [filteredAdmitCard, setFilteredAdmitCard] = useState([]);

  const fetchAllAdmitCards = async () => {
    const result = await getAllAdmitCard();
    setAdmitCardLoaded(true);
    if (!result) {
      return;
    }
    const tempTestimonial = [];
    result.forEach((doc) =>
      tempTestimonial.push({ ...doc.data(), tid: doc.id })
    );
    setAdmitCards(tempTestimonial);
    setFilteredAdmitCard(tempTestimonial);
  };

  const handleAdmitCard = async (aid, title) => {
    await deleteAdmitCard(aid);
    fetchAllAdmitCards();
  };

  useEffect(() => {
    fetchAllAdmitCards();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAdmitCard.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className=" py-5 px-[10rem] border-gray-300 rounded-md h-[90rem]">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Admit Card
        </h2>

        <form>
          <div className="flex justify-start  gap-2">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Application Number:
              </label>
              <input
                type="Number"
                name="applicationNo"
                value={formData.appNo}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    appNo: event.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Center Name:
              </label>
              <input
                type="text"
                name="center"
                value={formData.center}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    center: event.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Student Name:
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    studentName: event.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Father Name:
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    fatherName: event.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Date of Birth:
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dob}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    dob: event.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-start gap-2">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Course Name:
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    course: event.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Exam Date:
              </label>
              <input
                type="date"
                name="examDate"
                value={formData.examDate}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    examDate: event.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Reporting Time:
              </label>
              <input
                type="time"
                name="reportingTime"
                value={formData.reportingTime}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    reportingTime: event.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Image</label>
              <input
                type="File"
                name="image"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">{/* Add other input fields similarly */}</div>

          <div className="flex justify-start mt-5">
            <button
              onClick={handleSubmission}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Generate Admit Card
            </button>
          </div>
        </form>

        
      </div>
    </>
  );
};

export default CreateAdmitCard;
