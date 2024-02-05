import React from "react";

export const AdmitCard = () => {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        class="object-cover object-center w-full rounded-t-lg h-72 dark:bg-gray-500"
        src="https://example.com/image.jpg"
        alt="Image"
      />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Student Name
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Admission Date: 01/01/2022
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Exam Date: 01/15/2022
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Date of Birth: 01/01/2001
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Institution: Example Institution
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Signature:{" "}
          <img
            class="inline-block h-6 w-6 rounded-full"
            src="https://example.com/signature.jpg"
            alt="Signature"
          />
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Exam Time: 09:00 AM - 12:00 PM
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Place: Example Hall
        </p>
      </div>
    </div>
  );
};
