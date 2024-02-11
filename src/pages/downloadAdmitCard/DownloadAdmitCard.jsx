import React, { useState } from "react";
import { getAllAdmitCard } from "../../Firebase";

const DownloadAdmitCard = () => {
  const [searchAppNo, setSearchAppNo] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchChange = (event) => {
    setSearchAppNo(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    // Fetch all admit cards
    const allAdmitCards = await getAllAdmitCard();

    // Find the matching admit card based on the application number
    const matchingAdmitCard = allAdmitCards.find(
      (admitCard) => admitCard.appNo === searchAppNo
    );

    setSearchResult(matchingAdmitCard);
  };

  return (
    <div className="h-screen">
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="appNo">Enter Application Number:</label>
        <input
          type="number"
          id="appNo"
          value={searchAppNo}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
        {searchResult ? (
          // Render Admit Card Information
          <div>
            <h2>Admit Card Details:</h2>
            {/* Render admit card details here */}
          </div>
        ) : (
          // Render "Not Found" Message
          <p>Admit Card not found for the given application number.</p>
        )}
      </form>
    </div>
  );
};

export default DownloadAdmitCard;
