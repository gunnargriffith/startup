import React from 'react';
import './worldlore.css'
import { useLocation } from 'react-router-dom';

  

export function WorldLore() {
  const location = useLocation();
  const { player, race, class: playerClass } = location.state || {};
  return (
    <main>
      <fieldset className="loreBox" >
        <h2 className="sectionTitle">World Lore</h2>
        <div className="loreEntryContainer">
          <a href="#" class="loreEntry">General World History</a> <a className="accessText"> --Access: { player } --</a>
        </div>
        <div className="loreEntryContainer">
          <a href="#" className="loreEntry">Pantheon</a> <a className="accessText"> --Access: Clerics/Paladins--</a>
        </div>
        <div className="loreEntryContainer">
          <a href="#" className="loreEntry">The West Fold</a> <a className="accessText"> --Access: Humans/Dwarfs--</a>
        </div>
        <div className="loreEntryContainer">
          <a href="#" className="loreEntry">Waterdeep Guilds</a> <a className="accessText"> --Access: Ceil Aldoilea--</a>
        </div>
      </fieldset>
    </main>
  );
}