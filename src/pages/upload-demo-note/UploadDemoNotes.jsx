import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import styles from "./style.css";
import { addDemoNotes, storage } from "../../Firebase";
import { uploadBytes } from "firebase/storage";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const UploadDemoNotes = () => {

  const [file, setFile] = useState("");
    const [values, setValues] = useState({
      desc: "",
      name: "",
      price: "",
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
        // First, upload the file
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
            return addDemoNotes(dataWithImage);
          })
          .then(() => {
            // Navigation or any other further actions
            navigate("/admin");
          })
          .catch((error) => {
            console.error("Error uploading image or saving data:", error);
          });
      };
  return (
    <div className={styles.masterCont}>
    <div className="p-5">
      <div className="p-5">
        <h1 className="text-2xl text-center">Upload demo notes</h1>
      </div>
      <form>
        <div className="grid md:grid-cols-4 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
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
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Note Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="notes_desc"
              id="notes_desc"
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
              htmlFor="desc_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              value={values.price}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  price: event.target.value,
                }))
              }
            />
            <label
              htmlFor="floating_max_mark"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              name="floating_Notes"
              id="floating_notes"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="floating_notes"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              File
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

export default UploadDemoNotes

