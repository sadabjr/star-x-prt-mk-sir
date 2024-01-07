import React from 'react';

const PdfList = ({ pdfs, onCardClick }) => {
  return (
    <div>
      {pdfs.map((pdf, index) => (
        <div key={index} onClick={() => onCardClick(pdf)}>
          {/* Display PDF card content */}
          {pdf.title}
        </div>
      ))}
    </div>
  );
};

export default PdfList;
