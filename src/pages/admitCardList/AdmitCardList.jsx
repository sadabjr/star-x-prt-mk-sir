import React, { useState, useEffect } from "react";
import { getAllAdmitCard, deleteAdmitCard } from "../../Firebase";
import Loader from "../../components/loader/Loader";

const AdmitCardList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [admitCards, setAdmitCards] = useState([]);
    const [admitCardLoaded, setAdmitCardLoaded] = useState(false);
    const [filteredAdmitCard, setFilteredAdmitCard] = useState([]);
  
    const fetchAllAdmitCards = async () => {
      const result = await getAllAdmitCard();
      setAdmitCardLoaded(true);
      if (!result) {
        return;
      }
      const tempTestimonial = result.docs.map((doc) => ({
        ...doc.data(),
        tid: doc.id,
      }));
      setAdmitCards(tempTestimonial);
      setFilteredAdmitCard(tempTestimonial);
    };
  
    const handleAdmitCard = async (aid) => {
      await deleteAdmitCard(aid);
      fetchAllAdmitCards();
    };
  
    useEffect(() => {
      fetchAllAdmitCards();
    }, []);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredAdmitCard.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
  
    const getContinuousSrNo = (index) =>
      index + 1 + (currentPage - 1) * itemsPerPage;
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
      const indexOfLastItem = pageNumber * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setFilteredAdmitCard(admitCards.slice(indexOfFirstItem, indexOfLastItem));
    };
  return (
    <>
      <div className="mt-[2rem] h-screen">
        <div className="flex justify-center items-center m-4 font-semibold">
          <h1 className="text-center font-bold text-2xl mb-3 sm:mb-0 sm:order-2 sm:mx-auto">
            ADMIT CARD LIST
          </h1>
        </div>
        {filteredAdmitCard && admitCardLoaded ? (
          filteredAdmitCard.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-gray-200">
                  <tr className="text-[1rem]">
                    <th>Sr. No.</th>
                    <th>Application No.</th>
                    <th>Image</th>
                    <th>Student Name</th>
                    <th>Course</th>
                    <th>Center</th>
                    <th>Exam Date</th>
                    <th>Exam Time</th>

                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAdmitCard.map((item, index) => (
                    <tr key={item.aid}>
                      <td className="flex items-center space-x-3">
                        <div className="font-bold">{getContinuousSrNo(index)}.</div>
                      </td>
                      <td>
                        <div className="font-semibold">{item.appNo}</div>
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
                        <div className="font-semibold">{item.studentName}</div>
                      </td>

                      <td className="font-semibold">{item.course}</td>
                      <td className="font-semibold">{item.center}</td>
                      <td className="font-semibold">{item.examDate}</td>
                      <td className="font-semibold">{item.reportingTime}</td>

                      <td>
                        <button
                          className="btn btn-error btn-xs"
                          onClick={() => handleAdmitCard(item.tid, item.title)}
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
      <div className="pagination flex justify-center items-center">
        {Array.from(
          { length: Math.ceil(admitCards.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`pagination-item btn ${
                index + 1 === currentPage ? "btn-primary" : "btn-outline"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default AdmitCardList;
