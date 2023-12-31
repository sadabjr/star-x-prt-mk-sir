// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import { updateDoc } from "firebase/firestore";
import {doc, getFirestore, setDoc, getDoc, addDoc, collection, getDocs, query, where, deleteDoc,} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIP9ktaH5ougYWCJh-nu6SLsUqTxqB4Rk",
  authDomain: "auth-ef5a1.firebaseapp.com",
  projectId: "auth-ef5a1",
  storageBucket: "auth-ef5a1.appspot.com",
  messagingSenderId: "67474335718",
  appId: "1:67474335718:web:dbc95765624011447c1827",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const authentication = getAuth();


// --------------------Add Blogs----------------

const addStudentInDb = async (blog) => {
  if (typeof blog !== "object") return;
  const collectionRef = collection(db, "blogs");
  await addDoc(collectionRef, { ...blog });
};

const addTestimonial = async (testimonial) => {
  const collectionTesti = collection(db, "testimonials");
  await addDoc(collectionTesti, {...testimonial})
}

//-----------Get All Blogs --------------

const getAllStudents = async () => {
  return await getDocs(collection(db, "blogs"));
};

const getAllTestimonial = async () => {
  return await getDocs(collection(db, "testimonials"));
};

// -----------Delete Blogs-------------
const deleteBlog = async (bid) => {
  const docRef = doc(db, "blogs", bid);
  await deleteDoc(docRef);
};

const deleteTestimonial = async (tid) => {
  const docRef = doc(db, "testimonials", tid);
  await deleteDoc(docRef);
};

// Function to edit a blog
const editStudent = async (bid, updatedBlogData) => {
  try {
    const docRef = doc(db, "blogs", bid);
    // Update the blog document with the new data
    await updateDoc(docRef, updatedBlogData);

    console.log("Blog updated successfully");
  } catch (error) {
    console.error("Error updating blog:", error);
  }
};



// --------------------------------------------------------------

export {
  db,
  auth,
  authentication,
  addStudentInDb,
  getAllStudents,
  deleteBlog,
  editStudent,
  storage,
  addTestimonial,
  getAllTestimonial,
  deleteTestimonial,
};


