import { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  return (
    <div className='h-screen'>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PdfViewer;


// import React from "react";
// import { Document, Page } from "react-pdf";


// const PdfViewer = ({ pdfUrl }) => {
//   return (
//     <div className="h-screen">
//       <Document file={pdfUrl}>
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// };

// export default PdfViewer;
