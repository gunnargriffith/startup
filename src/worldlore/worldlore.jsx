import React from 'react';
import './worldlore.css';
import { useLocation } from 'react-router-dom';

export function WorldLore() {
  const location = useLocation();

  // Extract the permissions data from location.state or provide a fallback
  const permissions = location.state || {
    generalHistory: { player: "None", race: "None", class: "None" },
    pantheon: { player: "None", race: "None", class: "None" },
    westFold: { player: "None", race: "None", class: "None" },
    waterdeepGuilds: { player: "None", race: "None", class: "None" },
  };

  return (
    <main>
      <fieldset className="loreBox">
        <h2 className="sectionTitle">World Lore</h2>
        
        {/* General World History */}
        <div className="loreEntryContainer">
          <a href="#" className="loreEntry">General World History</a>
          <span className="accessText">
            --Access: Player: {permissions.generalHistory.player}, Race: {permissions.generalHistory.race}, Class: {permissions.generalHistory.class}--
          </span>
        </div>
        
        {/* Pantheon */}
        <div className="loreEntryContainer">
          <a href="#" className="loreEntry">Pantheon</a>
          <span className="accessText">
            --Access: Player: {permissions.pantheon.player}, Race: {permissions.pantheon.race}, Class: {permissions.pantheon.class}--
          </span>
        </div>
        
        {/* The West Fold */}
        <div className="loreEntryContainer">
          <a href="#" className="loreEntry">The West Fold</a>
          <span className="accessText">
            --Access: Player: {permissions.westFold.player}, Race: {permissions.westFold.race}, Class: {permissions.westFold.class}--
          </span>
        </div>
        
        {/* Waterdeep Guilds */}
        <div className="loreEntryContainer">
          <a href="#" className="loreEntry">Waterdeep Guilds</a>
          <span className="accessText">
            --Access: Player: {permissions.waterdeepGuilds.player}, Race: {permissions.waterdeepGuilds.race}, Class: {permissions.waterdeepGuilds.class}--
          </span>
        </div>
      </fieldset>
    </main>
  );
}