import { Firestore } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PdfList from "../PdfList/PdfList";
import PdfViewer from "../PdfViewer/PdfViewer";

import YoutubeCard from "../../components/layout/YoutubeCard";
import YouTubePlaylist from "../../components/layout/YoutubePlayList";
const NotesList = () => {
  // const [demoNotes, setDemoNotes] = useState([]);

  // useEffect(() => {
  //     const fetchDemoNotes = async () => {
  //       try {
  //         const demoNotesRef = firestore.collection('demoNotes');
  //         const snapshot = await demoNotesRef.get();

  //         const notesData = snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         }));

  //         setDemoNotes(notesData);
  //       } catch (error) {
  //         console.error('Error fetching demo notes:', error.message);
  //       }
  //     };

  //     fetchDemoNotes();
  //   }, []);

  // const [selectedPdf, setSelectedPdf] = useState(null);

  // const pdfs = [
  //   { title: "PDF 1", url: "../../asssets/pdf/POPC-READS-INVOICE-2023-V1.pdf" },
  //   { title: "PDF 2", url: "../../asssets/pdf/demo.pdf" },
  //   { title: "PDF 3", url: "../../asssets/pdf/Invoice-Letter.pdf" },
  //   // Add more PDFs as needed
  // ];

  const items = [
    // { type: 'video', videoId: 'As3LGNTlPQ0', title: 'Video 1 Title' },
    // { type: 'video', videoId: 'YOUR_VIDEO_ID_2', title: 'Video 2 Title' },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUngy5ZAYDPBcN_u60y3zJ_-",
      title: "MS Word Tutorials",
      img: require("../../asssets/images/Word.png"),
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUnswFv9A9-aboTavmS3Aowb",
      img: require("../../asssets/images/Excel.png"),
      title: "MS Excel Tutorials",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUnVong3ik1MvT0jAV_AKK71",
      img: require("../../asssets/images/power.png"),
      title: "MS Power Point Tutorials",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUmsCph_hbecCvLVsA30oR0Y",
      img: require("../../asssets/images/ps.png"),
      title: "Adobe Photoshop Tutorials",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUmvF58_YETn7UiiaK_A-xIU",
      img: require("../../asssets/images/tally.png"),
      title: "Tally Prime Tutorials",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUmOWyUSgJCESp_xb7ECft1G",
      img: require("../../asssets/images/coral.png"),
      title: "Coral Draw Tutorials",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUnNTO-OG9DEEs3ApL2Mg_Y6",
      img: require("../../asssets/images/tips.png"),
      title: "Computer Tricks & Tips",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUnqhHjmwznJ078l4GthDZky",
      img: require("../../asssets/images/dos.png"),
      title: "MS DOS Tutorials",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUmX_mFrWkbFE1msf6QdyUiT",
      img: require("../../asssets/images/paint.png"),
      title: "MS Paint Tutorials",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUkgyJCcZJyy7Bl-BEoBJIHk",
      img: require("../../asssets/images/ccc.png"),
      title: "CCC Tutorials",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUlorqkrrskfLNmUHNQ4y4kG",
      img: require("../../asssets/images/web.png"),
      title: "HTML Tutorials",
    },
    {
      type: "playlist",
      playlistId: "PLiXSm0yMQQUlgGZr2D5uLrGyOX471DX5Y",
      img: require("../../asssets/images/libre.png"),
      title: "Libre Office Tutorials",
    },
  ];

  // const handleCardClick = (pdf) => {
  //   setSelectedPdf(pdf.url);
  // };
  return (
    //   <div className="container mx-auto mt-8">
    //   <h2 className="text-2xl font-bold mb-4">Demo Notes</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //     {/* {demoNotes.map((note) => (
    //       <div key={note.id} className="border p-4 rounded-md shadow-md">
    //         <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
    //         <p className="text-gray-600 mb-4">{note.description}</p>
    //         <div className="flex justify-between items-center">
    //           <Link to={`/demo/${note.id}`} className="text-blue-500 hover:underline">
    //             Demo
    //           </Link>
    //           <Link to={`/purchase/${note.id}`} className="bg-green-500 text-white px-4 py-2 rounded-full">
    //             Purchase Now
    //           </Link>
    //         </div>
    //       </div>
    //     ))} */}
    //   </div>
    // </div>
    // <div>
    //   <PdfList pdfs={pdfs} onCardClick={handleCardClick} />
    //   {selectedPdf && <PdfViewer pdfUrl={selectedPdf} />}
    // </div>

    <div className="min-h-screen">
      <div>
      <h4
          className="font-bold md:text-3xl text-3xl text-center py-8"
          style={{ textDecoration: "underline" }}
        >
          NOTES
        </h4>
      </div>
      <div className=" flex justify-center items-center">
        <div className="p-4 gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, index) =>
            item.type === "video" ? (
              <YoutubeCard
                key={index}
                videoId={item.videoId}
                img={item.img}
                title={item.title}
              />
            ) : (
              <div>
                <YouTubePlaylist
                key={index}
                playlistId={item.playlistId}
                img={item.img}
                title={item.title}
              />
              <Link class="btn btn-accent mt-3">See Demo</Link>
              </div>
            )
          )}
          <div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesList;
