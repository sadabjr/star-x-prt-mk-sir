import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { useParams } from "react-router-dom";
import { getDemoNoteById } from "../../Firebase";
import pdf from '../../asssets/pdf/MS Paint क्या है.pdf'

const PdfViewer = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfPath, setPdfPath] = useState(null); // Rename the state variable
  const { pdfId } = useParams();

  // useEffect(() => {
  //   const fetchPdfPath = async () => {
  //     try {
  //       const demoNote = await getDemoNoteById(pdfId);
  //       console.log("Fetched demoNote:", demoNote);

  //       if (demoNote && demoNote.pdfPath) {
  //         const pdfPath = demoNote.pdfPath;
  //         console.log("Resolved pdfPath:", pdfPath);
  //         setPdfPath(pdfPath);
  //       } else {
  //         console.error("PDF path not found in demoNote:", demoNote);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching PDF path:", error);
  //     }
  //   };

  //   fetchPdfPath(); // Call the fetchPdfPath function when the component mounts or pdfId changes
  // }, [pdfId]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="h-screen ">
      <div className="pdf-div m-auto">
        <p>
          Page {pageNumber} of {numPages}
        </p>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => {
                return(
                  <Page
                  pageNumber={page}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
                )
              })}
          </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
