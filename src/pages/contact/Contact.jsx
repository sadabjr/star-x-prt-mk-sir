import React, { useState } from "react";
import "./style.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_w9v5mir";
    const templateID = "template_npaa5f9";
    const userID = "HH-NUeiHFEqLCe8xK"; // Your EmailJS User ID (API Key)

    // Get the form data
    const formData = new FormData(e.target);

    const templateParams = {
      to_name: formData.get("to_name"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setShowToast(true); // Show the toast on successful email sending

        // Hide the toast after 3 seconds (adjust duration as needed)
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    // Reset the form after sending the email
    e.target.reset();
  };

  return (
    <div className="min-h-screen ">
      <div className="banner">
        <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Rest of the banner content */}
          <h1 className="font-bold md:text-4xl text-2xl pt-40 pb-24">
            <span className="text-white p-0 m-0 text-[3rem]">Get In Touch</span>{" "}
            <br />
            <span className="font-bold md:text-xl text-xl text-white p-0 m-0">
              The Ultimate Guide To Computer Knowledge.
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-[100%] md:w-[60%] bg-[#fff] ">
          <div className="bg-[#fff] px-10 py-5">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                  Get in touch
                </p>
                <div className="">
                  <form onSubmit={sendEmail} className="space-y-8">
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required
                        name="to_name"
                      />
                    </div>
                    <div>
                      <label
                        for="subject"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you"
                        required
                        name="subject"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        for="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                        name="message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn ">
                      Send Message
                    </button>
                  </form>
                  <div
                    className={`toast toast-top toast-start ${
                      showToast ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="alert alert-success">
                      <span>Message sent successfully.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
