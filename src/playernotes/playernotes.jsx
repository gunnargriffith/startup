import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './playernotes.css';

export function PlayerNotes() {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const navigate = useNavigate();

  // Function to add a new note
  const addNote = () => {
    if (newNoteTitle.trim()) {
      const newNote = { id: Date.now(), title: newNoteTitle, content: '' };
      setNotes([...notes, newNote]);
      setNewNoteTitle('');
      navigate(`/notes/${newNote.id}`);
    }
  };

  return (
    <main>
      <div className="notesBox">
        <fieldset>
          <h2 className="NotesTitle">Player Notes</h2>

          <ul>
            {notes.map(note => (
              <li key={note.id}>
                <Link className="noteEntry" to={`/notes/${note.id}`}>
                  {note.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="newNoteForm">
            <input
              type="text"
              placeholder="Enter new note title"
              value={newNoteTitle}
              onChange={e => setNewNoteTitle(e.target.value)}
              className="noteInput"
            />
            <button onClick={addNote} className="noteButton">
              Add Note
            </button>
          </div>
        </fieldset>
      </div>
    </main>
  );
}

export function NotePage({ notes, setNotes }) {
  const { id } = useParams();
  const note = notes.find(note => note.id === parseInt(id));

  const updateContent = e => {
    const updatedNotes = notes.map(n =>
      n.id === note.id ? { ...n, content: e.target.value } : n
    );
    setNotes(updatedNotes);
  };

  if (!note) {
    return <div>Note not found!</div>;
  }

  return (
    <main>
      <div className="noteEditor">
        <h2>{note.title}</h2>
        <textarea
          value={note.content}
          onChange={updateContent}
          placeholder="Write your note here..."
          className="noteTextarea"
        />
      </div>
    </main>
  );
}

// Main App Component
export function App() {
  const [notes, setNotes] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PlayerNotes notes={notes} setNotes={setNotes} />}
        />
        <Route
          path="/notes/:id"
          element={<NotePage notes={notes} setNotes={setNotes} />}
        />
      </Routes>
    </Router>
  );
}