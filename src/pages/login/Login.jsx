// import React, { useState } from "react";
// import styles from "./style.css";
// import InputControl from "../InputControls/InputControls";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../../Firebase";
// import { async } from "@firebase/util";

// const Login = () => {
//   const Navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     pass: "",
//   });

//   const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmission = () => {
//     if (!values.email || !values.pass) {
//       setErrorMsg("Fill all the fields...");
//       return;
//     }
//     setErrorMsg("");

//     setSubmitBtnDisabled(true);
//     signInWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitBtnDisabled(false);

//         Navigate("/admin");
//       })
//       .catch((err) => {
//         setSubmitBtnDisabled(false);
//         setErrorMsg(err.message);
//       });
//   };

//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const navigate = useNavigate(); // Set this to true when the user is logged in.

//   const handleLogout = () => {
//     setIsLoggedIn(!isLoggedIn);
//     navigate("/");
//    };


//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Login now!</h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//         </div>
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <form className="card-body" onSubmit={handleLogout}>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 value={values.email}
//                 onChange={(event) =>
//                   setValues((prev) => ({ ...prev, email: event.target.value }))
//                 }
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 value={values.pass}
//                 onChange={(event) =>
//                   setValues((prev) => ({ ...prev, pass: event.target.value }))
//                 }
//                 required
//               />
//               <label className="label">
//                 <a href="#" className="label-text-alt link link-hover">
//                   Forgot password?
//                 </a>
//               </label>
//             </div>
//             <div className="form-control mt-6">
//               <button
//                 className="btn btn-primary"
//                 disabled={submitBtnDisabled}
//                 onClick={handleSubmission}
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;







import React, { useState, useEffect } from "react";
import styles from "./style.css";
import InputControl from "../InputControls/InputControls";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase";

const Login = () => {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially not logged in

  // Handle successful login
  const handleLoginSuccess = () => {
    setSubmitBtnDisabled(false);
    setIsLoggedIn(true); // Set login status to true
    Navigate("/admin");
  };

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill in all the fields...");
      return;
    }
    setErrorMsg("");

    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        handleLoginSuccess(); // Call the success handler
      })
      .catch((err) => {
        setSubmitBtnDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
    navigate("/");
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={values.email}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={values.pass}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {isLoggedIn ? ( // Check login status and render button text accordingly
                <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  disabled={submitBtnDisabled}
                  onClick={handleSubmission}
                >
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

















