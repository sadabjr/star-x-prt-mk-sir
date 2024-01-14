import React, { useEffect, useState } from "react";
import { getAllDemoNotes } from "../../Firebase";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


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
              <h1 className="text-2xl md:text-3xl text-center mt-4">
                Notes List
              </h1>
            </div>
          </div>
        </div>
        {filteredDemoNotes && demoNotesLoaded ? (
        filteredDemoNotes.length > 0 ? (
          <div className="flex flex-wrap justify-center items-start">
            {filteredDemoNotes.map((item, index) => (
              <div key={index} className="flex">
                <Link to={`/pdf-viewer/${item.bid}`}>
                  {/* Link to the PdfViewer page with the PDF id */}
                  <div className="card w-[17rem] bg-primary text-primary-content m-3 flex-grow">
                    <div className="card-body flex flex-col justify-between">
                      <div>
                        <h2 className="card-title text-white">{item.name}</h2>
                        <p className="text-white">{item.desc}</p>
                        <p className="font-semibold text-red-300">Rs. {item.price}</p>
                      </div>
                      <div className="card-actions flex justify-end">
                        <button className="btn btn-sm">Demo</button>
                        <button className="btn btn-sm">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )  : (
            <div className="alert">
              <h1 className="text-center m-auto text-2xl font-bold text-danger-600">
                No notes Found!
              </h1>
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
