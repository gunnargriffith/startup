import React from 'react';
import './playernotes.css'

export function PlayerNotes() {
  return (
    <main>
        <div className="notesBox">
          <fieldset>
            <h2 className="NotesTitle">Player Notes</h2>

            <a className="noteEntry" href="#">Yosai's Notes</a>
            <br  />
            <a className="noteEntry" href="#">Ciel's Journal</a>
            <br  />
            <a className="noteEntry" href="#">Eliane Notes</a>
          
          </fieldset>
        </div>
    </main>
  );
}