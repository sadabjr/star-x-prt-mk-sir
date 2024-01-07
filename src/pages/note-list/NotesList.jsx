import { Firestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


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
  return (
    <div className="container mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4">Demo Notes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* {demoNotes.map((note) => (
        <div key={note.id} className="border p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
          <p className="text-gray-600 mb-4">{note.description}</p>
          <div className="flex justify-between items-center">
            <Link to={`/demo/${note.id}`} className="text-blue-500 hover:underline">
              Demo
            </Link>
            <Link to={`/purchase/${note.id}`} className="bg-green-500 text-white px-4 py-2 rounded-full">
              Purchase Now
            </Link>
          </div>
        </div>
      ))} */}
    </div>
  </div>
  )
}

export default NotesList