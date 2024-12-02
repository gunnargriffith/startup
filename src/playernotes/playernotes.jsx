import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './playernotes.css';

export function PlayerNotes({ notes, addNote, deleteNote }) {
  const [newNoteTitle, setNewNoteTitle] = useState('');

  const handleAddNote = () => {
    if (newNoteTitle.trim()) {
      addNote(newNoteTitle);
      setNewNoteTitle('');
    }
  };

  return (
    <main>
      <div className="notesBox">
        <fieldset>
          <h2 className="NotesTitle">Player Notes</h2>
          <ul>
            {notes.map((note) => (
              <li key={note.id}>
                <Link className="noteEntry" to={`/playernotes/${note.id}`}>
                  {note.title}
                </Link>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="deleteButton"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="addNote">
            <input
              type="text"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              placeholder="New note title"
              className="noteInput"
            />
            <button onClick={handleAddNote} className="addNoteButton">
              Add Note
            </button>
          </div>
        </fieldset>
      </div>
    </main>
  );
}