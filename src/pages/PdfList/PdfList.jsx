import React, { useEffect, useState } from "react";
import { getAllDemoNotes } from "../../Firebase";
import Loader from "../../components/loader/Loader";

const PdfList = () => {
  const [demoNotes, setDemoNotes] = useState([]);
  const [filteredDemoNotes, setFilteredDemoNotes] = useState([]);
  const [demoNotesLoaded, setDemoNotesLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // Fetch Students
  const fetchAllDemoNotes = async () => {
    const result = await getAllDemoNotes();
    setDemoNotesLoaded(true);
    if (!result) {
      return;
    }
    const tempDemoNotes = [];
    result.forEach((doc) => tempDemoNotes.push({ ...doc.data(), bid: doc.id }));
    setDemoNotes(tempDemoNotes);
    setFilteredDemoNotes(tempDemoNotes);
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearchInput(searchQuery);

    const filteredDemoNotes = demoNotes.filter((student) => {
      return student.sid.toLowerCase().includes(searchQuery);
    });

    setFilteredDemoNotes(filteredDemoNotes);
  };

  useEffect(() => {
    fetchAllDemoNotes();
  }, []);
  return (
    <div className="h-screen">
      <div className="">
        <div className="flex col justify-center items-center m-4 font-semibold">
          <div className="">
            <div className="p-4">
              {/* <div className="relative">
                <input
                  type="text"
                  className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent w-full max-w-md mx-auto"
                  placeholder="Search by SID..."
                  value={searchInput}
                  onChange={handleSearch}
                />
                <svg
                  className="w-4 h-4 absolute left-2.5 top-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div> */}
              <h1 className="text-2xl md:text-3xl text-center mt-4">
                Notes List
              </h1>
            </div>
          </div>
        </div>
        {filteredDemoNotes && demoNotesLoaded ? (
          filteredDemoNotes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {filteredDemoNotes.map((item, index) => (
                    <div className="flex justify-center items-center" key={item.bid}>
                      <div className="card w-90 bg-primary text-primary-content">
                        <div className="card-body">
                          <h2 className="card-title">{item.name}</h2>
                          <p>
                            {item.desc}
                          </p>
                          <p>
                            Rs. {item.price}
                          </p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-sm">Demo</button>
                            <button className="btn btn-sm">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert">
              <h1 className="text-center m-auto text-2xl font-bold text-danger-600">No notes Found !</h1>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default PdfList;
