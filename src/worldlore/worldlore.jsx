import React from 'react';
import { useNavigate } from 'react-router-dom';
import './worldlore.css';

export function WorldLore() {
  const navigate = useNavigate();

  
  const defaultPermissions = {
    generalHistory: { player: "Any", race: "Any", class: "Any" },
    pantheon: { player: "Any", race: "Any", class: "Any" },
    westFold: { player: "Any", race: "Any", class: "Any" },
    waterdeepGuilds: { player: "Any", race: "Any", class: "Any" },
  };

  const permissions = location.state || JSON.parse(localStorage.getItem('gmPermissionsSelections')) || defaultPermissions;

  const handleNavigate = (sectionName) => {
    navigate(`/edit/${sectionName}`, { state: { permissions: permissions[sectionName] } });
  };

  return (
    <main>
      <fieldset className="loreBox">
        <h2 className="sectionTitle">World Lore</h2>

        {/* Render clickable sections */}
        {Object.keys(permissions).map((section) => (
          <div key={section} className="loreEntryContainer">
            <a
              href="#"
              className="loreEntry"
              onClick={() => handleNavigate(section)}
            >
              {section
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </a>
            <span className="accessText">
              --Access: Player: {permissions[section].player}, Race: {permissions[section].race}, Class: {permissions[section].class}--
            </span>
          </div>
        ))}
      </fieldset>
    </main>
  );
}