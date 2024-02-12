import React, { useState } from "react";
import { getAdmitCardByAppNum } from "../../Firebase";


const DownloadAdmitCard = () => {
  const [appNum, setAppNum] = useState("");
  const [admitCard, setAdmitCard] = useState(null);

  const handleSearch = async () => {
    
    const result = await getAdmitCardByAppNum(appNum);

    setAdmitCard(result);
  };

    const handlePrint = () => {
      window.print();
    };

  return (
    <div className="h-screen">
      <h2>Download Admit Card</h2>
      <div>
        <label>
          Application Number:
          <input
            type="number"
            value={appNum}
            onChange={(e) => setAppNum(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {admitCard ? (
          <div>
          <div className="admin-card bg-base-200 p-5 md:p-10 flex flex-col justify-between border-2 bd-slate-950">
        {/* Left side */}
        <div className="border-2 bd-slate-950 pt-2 md:pt-5">
          <h1 className="text-xl md:text-2xl font-bold mb-1 text-center uppercase underline">
            Star-X-Prt Computer Technical Institute Dhanghata (S.K.N.)</h1>
          <h3 className="font-bold text-center mb-2 md:mb-4 uppercase">Admit Card</h3>
        </div>
        <div className="bg-base-200 p-5 md:p-12 flex flex-col-reverse md:flex-row justify-between border-2 bd-slate-950">
          <div className="left-side">
            <div className="info">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <th className="font-semibold">Application Number:</th>
                    <td>{admitCard.appNo}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold">Student Name:</th>
                    <td>{admitCard.studentName}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold">Father Name:</th>
                    <td>{admitCard.fatherName}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold">Date of Birth:</th>
                    <td>{admitCard.dob}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold">Course:</th>
                    <td>{admitCard.course}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold">Center:</th>
                    <td>
                      {admitCard.center}
                    </td>
                  </tr>
                  <tr>
                    <th className="font-semibold">Exam Date:</th>
                    <td>{admitCard.examDate}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold">Reporting Time:</th>
                    <td>{admitCard.reportingTime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="right-side mt-4 md:mt-0">
            <img
              src={admitCard.thumbnail}
              alt="Student"
              className="rounded-lg shadow-2xl w-[10rem] md:w-[8rem]"
            />

            <div className="font-bold mt-4 md:mt-[5rem]">
              <h3>Institution Signature</h3>
              <div className="w-[10rem] md:w-[11rem] h-5 p-5 border-4 mt-2"></div>
            </div>
          </div>
        </div>
        <div className="border-2 bd-slate-950 py-2 md:py-5 px-2 md:px-5">
          <h2 className="font-bold text-justify mt-2 md:mt-5">Instructions:</h2>
        </div>
      </div>
      <div className="px-2 md:px-5 py-2 md:py-5">
        <button className="btn btn-error  md:w-auto float-right mb-4" onClick={handlePrint}>Print</button>
      </div>
          </div>
        ) : (
          <p>Admit Card not found for Application Number: {appNum}</p>
        )}
      </div>
    </div>
  );
};

export default DownloadAdmitCard;
