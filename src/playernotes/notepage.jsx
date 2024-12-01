import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './notepage.css';

export function NotePage({ notes, updateNote }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === parseInt(id));
  const [content, setContent] = useState(note ? note.content : '');

  const handleSave = () => {
    updateNote(note.id, content);
    navigate('/');
  };

  if (!note) {
    return <div>Note not found!</div>;
  }

  return (
    <main>
      <div className="noteEditor">
        <h2>{note.title}</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          className="noteTextarea"
        />
        <div className="noteActions">
          <button onClick={handleSave} className="saveButton">
            Save
          </button>
          <button onClick={() => navigate('/')} className="cancelButton">
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}