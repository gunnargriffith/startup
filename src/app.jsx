import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { GmPermissions } from './gmpermissions/gmpermissions';
import { PlayerNotes } from './playernotes/playernotes';
import { NotePage } from './playernotes/notepage';
import { WorldLore } from './worldlore/worldlore';
import { EditPage } from './worldlore/editpage'

export default function App() {
  const [notes, setNotes] = useState(() => {
    // Load notes from localStorage on initial render
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title) => {
    const newNote = {
      id: notes.length ? notes[notes.length - 1].id + 1 : 1,
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
    <BrowserRouter>
      <div>
        <header>
          <h1 className="titleWord">LoreCore</h1>

          <nav>
            <ul className="navbar">
              <li>
                <NavLink className="nav-link" to="">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="playernotes">
                  Player Notes
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="worldlore">
                  World Lore
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="gmpermissions">
                  Edit Permissions
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route
            path="/playernotes"
            element={
              <PlayerNotes
                notes={notes}
                addNote={addNote}
                deleteNote={deleteNote}
              />
            }
          />
          <Route
            path="/playernotes/:id"
            element={<NotePage notes={notes} updateNote={updateNote} />}
          />
          <Route path="/worldlore" element={<WorldLore />} />
          <Route path="/gmpermissions" element={<GmPermissions />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/worldlore" element={<WorldLore />} />
          <Route path="/edit/:section" element={<EditPage />} />

        </Routes>

        <footer>
          <hr />
          <span className="text-reset">Author Name(s)</span>
          <br />
          <a href="https://github.com/gunnargriffith/startup">LoreCore GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}