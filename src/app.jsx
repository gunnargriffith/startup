import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PlayerNotes } from './playernotes/playernotes';
import { NotePage } from './playernotes/notepage';

export function App() {
  const [notes, setNotes] = useState(() => {
    // Load notes from localStorage on initial render
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Persist notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title) => {
    const newNote = {
      id: notes.length ? notes[notes.length - 1].id + 1 : 1, // Unique ID
      title,
      content: '',
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedContent) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, content: updatedContent } : note
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PlayerNotes
              notes={notes}
              addNote={addNote}
              deleteNote={deleteNote}
            />
          }
        />
        <Route
          path="/notes/:id"
          element={<NotePage notes={notes} updateNote={updateNote} />}
        />
      </Routes>
    </Router>
  );
}