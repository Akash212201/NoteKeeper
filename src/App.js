import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CreateNote from './pages/CreateNote.jsx';
import EditNote from './pages/EditNote';
import Note from './components/Note.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);
  const notesPerPage = 6;

  useEffect(() => {
    setFilteredNotes(
      notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [notes, searchQuery]);

  // Add a new note
  const addNote = ({ note }) => {
    setNotes((prevData) => {
      const pinnedNotes = prevData.filter((note) => note.pinned);
      const unpinnedNotes = prevData.filter((note) => !note.pinned);
      const updatedNotes = note.pinned
        ? [{ ...note, pinned: false }, ...pinnedNotes, ...unpinnedNotes]
        : [...pinnedNotes, { ...note, pinned: false }, ...unpinnedNotes];

      return updatedNotes;
    });
  };


  // Delete a note
  const deleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  // Toggle pin for a note
  const togglePin = (index) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      const noteToToggle = { ...newNotes[index], pinned: !newNotes[index].pinned };
  
      if (!noteToToggle.pinned) {
        const originalIndex = prevNotes.findIndex(note => note.id === noteToToggle.id);
        newNotes.splice(originalIndex, 1); 
        let newIndex = originalIndex;
        while (newIndex < newNotes.length && newNotes[newIndex].pinned) {
          newIndex++;
        }
        newNotes.splice(newIndex, 0, noteToToggle); 
      } else {
        newNotes.splice(index, 1); 
        newNotes.unshift(noteToToggle);
      }
  
      return newNotes;
    });
  };
  
  
  
  


  // Open edit popup for a note
  const openEditPopup = (index) => {
    setSelectedNoteIndex(index);
    setIsEditPopupOpen(true);
  };

  // Close edit popup
  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedNoteIndex(null);
  };

  // Update a note
  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note,index) =>
        index === updatedNote.id ? { ...note, ...updatedNote } : note
      )
    );
    closeEditPopup();
  };


  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  // Handle pagination
  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />
      <CreateNote passNote={addNote} />

      <div className='px-10 py-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
        {currentNotes.map((note, index) => (
          <Note
            key={index}
            id={index}
            noteData={note}
            deleteData={() => deleteNote(indexOfFirstNote + index)}
            togglePin={() => togglePin(indexOfFirstNote + index)}
            openEdit={() => openEditPopup(indexOfFirstNote + index)}
          />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4 absolute bottom-12 left-1/2 right-1/2">
        <button
          onClick={() => pagination(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-200 px-4 py-2 mr-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => pagination(currentPage + 1)}
          disabled={currentNotes.length < notesPerPage}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>

      {isEditPopupOpen && (
        <EditNote
        id={selectedNoteIndex}
          onClose={closeEditPopup}
          noteData={notes[selectedNoteIndex]}
          updateNote={updateNote}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
