import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.css";
import { addTestimonial, storage } from "../../Firebase";
import { uploadBytes } from "firebase/storage";


import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const NewTestimonial = () => {
    const [file, setFile] = useState("");
    const [values, setValues] = useState({
      desc: "",
      name: "",
      max_mark: "",
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
      const navigate = useNavigate();

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
            const dataWithImage = { ...values, thumbnail: imageUrl };
            return addTestimonial(dataWithImage);
          })
          .then(() => {
            // Navigation or any other further actions
            navigate("/about");
          })
          .catch((error) => {
            console.error("Error uploading image or saving data:", error);
          });
      };
  return (
    <div className={styles.masterCont}>
    <div className="p-5">
      <div className="p-5">
        <h1 className="text-2xl text-center">Topper Student Data</h1>
      </div>
      <form>
        <div className="grid md:grid-cols-4 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              value={values.name}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
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
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              value={values.desc}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  desc: event.target.value,
                }))
              }
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="floating_max_mark"
              id="floating_max_mark"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              value={values.max_mark}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  max_mark: event.target.value,
                }))
              }
            />
            <label
              htmlFor="floating_max_mark"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Max Mark
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              name="floating_image"
              id="floating_image"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="floating_image"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmission}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default NewTestimonial