// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../asssets/images/logo.png";

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Set this to true when the user is logged in.

//   const handleLogout = () => {
//     setIsLoggedIn(true);
//     navigate("/");
//   };

//   return (
//     <>
//       <div className="navbar bg-base-100 border-b shadow-sm">
//         <div className="flex-1">
//           <a href="/" className=" normal-case text-xl">
//             <img className="w-[5rem]" src={logo} alt="logo" />
//           </a>
//           <a
//             href="/"
//             className="btn btn-ghost normal-case md:text-[1.5rem] text-[1.5rem] text-center md:inline-block pt-2"
//           >
//             <span className="text-[#5b67a5]">Star</span>
//             <span className="text-[#5b67a5]">Prt</span>
//           </a>
//         </div>
//         <div className="md:flex md:space-x-4">
//           <ul className="mainMenu menu menu-horizontal px-1 uppercase text-xs font-semibold md:">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/courses">Courses</Link>
//             </li>
//             <li>
//               <Link to="/tutorials">Tutorials</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li>
//               {isLoggedIn ? (
//                 <button onClick={handleLogout}>Log Out</button>
//               ) : (
//                 <Link to="/login">Login</Link>
//               )}
//             </li>
//           </ul>
//           <div className="dropdown dropdown-end hidden">
//             <label tabIndex={0} className="btn btn-ghost btn-circle">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h7"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
//             >
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/courses">Courses</Link>
//               </li>
//               <li>
//                 <Link to="/tutorials">Tutorials</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../asssets/images/logo.png";
import { useState } from "react";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Set this to true when the user is logged in.
  
    const handleLogout = () => {
      setIsLoggedIn(true);
      navigate("/");
    };
  return (
    <>
      <div className="navbar bg-base-100 border-b shadow-sm">
        <div className="flex-1">
          <a href="/" className=" normal-case text-xl">
            <img className="w-[5rem]" src={logo} alt="logo" />
          </a>
          <a
            href="/"
            className="btn btn-ghost normal-case md:text-[1.5rem] text-[1.5rem] text-center md:inline-block pt-2"
          >
            <span className="text-[#5b67a5]">Star</span> X-
            <span className="text-[#5b67a5]">Prt</span>
          </a>
        </div>
        <div className="md:flex md:space-x-4">
          <ul className="mainMenu menu menu-horizontal px-1 uppercase text-xs font-semibold md:">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/pdf-list">Download Pdf Notes</Link>
            </li>
            <li>
              <Link to="/tutorials">Tutorials</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
              <Link to="/pdf-list">Download Pdf Notes</Link>
            </li>
              <li>
                <Link to="/tutorials">Tutorials</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
              {isLoggedIn ? (
           <button onClick={handleLogout}>Log Out</button>
               ) : (
                 <Link to="/login">Login</Link>
               )}
               </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className=" w-screen overflow-hidden ">
        <div className="top-0 right-full whitespace-nowrap animate-movetext  ">
          <h3 className="text-[1.5rem]">
            Hardware Training is 30% free on every course
          </h3>
        </div>
      </div> */}
    </>
  );
};

export default Header;
