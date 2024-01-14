import { Document, Page } from 'react-pdf';

const PdfCard = ({ file, pageNumber }) => {
    return (
      <div className="card w-[17rem] bg-primary text-primary-content m-3 flex-grow">
        <div className="card-body flex flex-col justify-between">
          <div>
            <Document file={file}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      </div>
    );
  };

  export default PdfCard;