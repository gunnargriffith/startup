import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './gmpermissions.css'



export function GmPermissions() {
  const navigate = useNavigate();

  const defaultSelections = {
    generalHistory: { player: "Any", race: "Any", class: "Any" },
    pantheon: { player: "Any", race: "Any", class: "Any" },
    westFold: { player: "Any", race: "Any", class: "Any" },
    waterdeepGuilds: { player: "Any", race: "Any", class: "Any" },
  };

  // Initialize state with saved selections from localStorage, or use defaults
  const [selections, setSelections] = useState(() => {
    const savedSelections = localStorage.getItem('gmPermissionsSelections');
    return savedSelections ? JSON.parse(savedSelections) : defaultSelections;
  });

  // Save selections to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('gmPermissionsSelections', JSON.stringify(selections));
  }, [selections]);

  const handleSelectionChange = (section, key, value) => {
    setSelections((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleNavigate = () => {
    navigate('/worldlore', { state: selections });
  };

  return (
    <main>
      <h2>Player info:</h2>
      <div className="container">
        <table className="infoTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Race</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yosai Redleaf</td>
              <td>Halfling</td>
              <td>Warlock</td>
            </tr>
            <tr>
              <td>Ciel Aldoilea</td>
              <td>Half-Elf</td>
              <td>Cleric</td>
            </tr>
            <tr>
              <td>Eliane Syclla</td>
              <td>Human</td>
              <td>Barbarian</td>
            </tr>
            <tr>
              <td>Brynhild Thorne</td>
              <td>Human</td>
              <td>Monk</td>
            </tr>
          </tbody>
        </table>
        
        <h2>Lore Permissions</h2>

        <div>
          <span>General World History access:</span>
          <ul>
            <li>
              <label htmlFor="general-player">Players: </label>
              <select id="general-player" name="varPlayer" value={selections.generalHistory.player}
              onChange={(e) =>
                handleSelectionChange("generalHistory", "player", e.target.value)
              }>
                <option>Any</option>
                <option>None</option>
                <option>Yosai</option>
                <option>Ciel</option>
                <option>Eliane</option>
                <option>Brynhild</option>
              </select>
            </li>
            <li>
              <label htmlFor="general-Race">Races: </label>
              <select id="general-Race" name="varRace" value={selections.generalHistory.race}
              onChange={(e) =>
                handleSelectionChange("generalHistory", "race", e.target.value)
              }>
                <option>Any</option>
                <option>Human</option>
                <option>Elf</option>
                <option>Half-Elf</option>
                <option>Halfling</option>
                <option>Dwarf</option>
                <option>Gnome</option>
                <option>Half-Orc</option>
                <option>Tiefling</option>
              </select>
            </li>
            <li>
              <label htmlFor="general-Class">Classes: </label>
              <select id="general-Class" name="varClass" value={selections.generalHistory.class}
              onChange={(e) =>
                handleSelectionChange("generalHistory", "class", e.target.value)
              }>
                <option>Any</option>
                <option>Barbarian</option>
                <option>Fighter</option>
                <option>Cleric</option>
                <option>Paladin</option>
                <option>Monk</option>
                <option>Rogue</option>
                <option>Ranger</option>
                <option>Druid</option>
                <option>Sorcerer</option>
                <option>Wizard</option>
                <option>Warlock</option>
                <option>Bard</option>
              </select>
            </li>
          </ul>
        </div>
        <br />
        <div>
          <span>Pantheon access:</span> 
            <ul>
              <li>
                <label htmlFor="pantheon-player">Players: </label>
                <select id="pantheon-player" name="varPlayer" value={selections.pantheon.player}
              onChange={(e) =>
                handleSelectionChange("pantheon", "player", e.target.value)
              }>
                  <option >Any</option>
                  <option>None</option>
                  <option>Yosai</option>
                  <option>Ciel</option>
                  <option>Eliane</option>
                  <option>Brynhild</option>
                </select>
              </li>
              <li>
                <label htmlFor="pantheon-Race">Races: </label>
                <select id="pantheon-Race" name="varRace" value={selections.pantheon.race}
              onChange={(e) =>
                handleSelectionChange("pantheon", "race", e.target.value)
              }>
                  <option >Any</option>
                  <option>Human</option>
                  <option>Elf</option>
                  <option>Half-Elf</option>
                  <option>Halfling</option>
                  <option>Dwarf</option>
                  <option>Gnome</option>
                  <option>Half-Orc</option>
                  <option>Tiefling</option>
                </select>
              </li>
              <li>
                <label htmlFor="pantheon-Class">Classes: </label>
                <select id="pantheon-Class" name="varClass" value={selections.pantheon.class}
              onChange={(e) =>
                handleSelectionChange("pantheon", "class", e.target.value)
              }>
                  <option>Any</option>
                  <option>Barbarian</option>
                  <option>Fighter</option>
                  <option>Cleric</option>
                  <option>Paladin</option>
                  <option>Monk</option>
                  <option>Rogue</option>
                  <option>Ranger</option>
                  <option>Druid</option>
                  <option>Sorcerer</option>
                  <option>Wizard</option>
                  <option>Warlock</option>
                  <option>Bard</option>
                </select>
              </li>
            </ul>
          </div>
          <br />
          <div>
            <span>The West Fold access:</span> 
            <ul>
            <li>
              <label htmlFor="westfold-player">Players: </label>
              <select id="westfold-player" name="varPlayer" value={selections.westFold.player}
              onChange={(e) =>
                handleSelectionChange("westFold", "player", e.target.value)
              }>
                <option >Any</option>
                <option>None</option>
                <option>Yosai</option>
                <option>Ciel</option>
                <option>Eliane</option>
                <option>Brynhild</option>
              </select>
            </li>
            <li>
              <label htmlFor="westfold-Race">Races: </label>
              <select id="westfold-Race" name="varRace" value={selections.westFold.race}
              onChange={(e) =>
                handleSelectionChange("westFold", "race", e.target.value)
              }>
                <option>Any</option>
                <option >Human</option>
                <option>Elf</option>
                <option>Half-Elf</option>
                <option>Halfling</option>
                <option>Dwarf</option>
                <option>Gnome</option>
                <option>Half-Orc</option>
                <option>Tiefling</option>
              </select>
            </li>
            <li>
              <label htmlFor="westfold-Class">Classes: </label>
              <select id="westfold-Class" name="varClass" value={selections.westFold.class}
              onChange={(e) =>
                handleSelectionChange("westFold", "class", e.target.value)
              }>
                <option>Any</option>
                <option>Barbarian</option>
                <option>Fighter</option>
                <option>Cleric</option>
                <option>Paladin</option>
                <option>Monk</option>
                <option>Rogue</option>
                <option>Ranger</option>
                <option>Druid</option>
                <option>Sorcerer</option>
                <option>Wizard</option>
                <option>Warlock</option>
                <option>Bard</option>
              </select>
            </li>
          </ul>
        </div>
        <br  />
        <div>
          <span>Waterdeep Guilds access:</span> 
          <ul>
            <li>
              <label htmlFor="waterdeep-player">Players: </label>
              <select id="waterdeep-player" name="varPlayer" value={selections.waterdeepGuilds.player}
              onChange={(e) =>
                handleSelectionChange("waterdeepGuilds", "player", e.target.value)
              }>
                <option>Any</option>
                <option>None</option>
                <option>Yosai</option>
                <option>Ciel</option>
                <option>Eliane</option>
                <option>Brynhild</option>
              </select>
            </li>
            <li>
              <label htmlFor="waterdeep-Race">Races: </label>
              <select id="waterdeep-Race" name="varRace" value={selections.waterdeepGuilds.race}
              onChange={(e) =>
                handleSelectionChange("waterdeepGuilds", "race", e.target.value)
              }>
                <option>Any</option>
                <option>Human</option>
                <option>Elf</option>
                <option>Half-Elf</option>
                <option>Halfling</option>
                <option>Dwarf</option>
                <option>Gnome</option>
                <option>Half-Orc</option>
                <option>Tiefling</option>
              </select>
            </li>
            <li>
              <label htmlFor="waterdeep-Class">Classes: </label>
              <select id="waterdeep-Class" name="varClass" value={selections.westFold.class}
              onChange={(e) =>
                handleSelectionChange("waterdeepGuilds", "class", e.target.value)
              }>
                <option>Any</option>
                <option>Barbarian</option>
                <option>Fighter</option>
                <option>Cleric</option>
                <option>Paladin</option>
                <option>Monk</option>
                <option>Rogue</option>
                <option>Ranger</option>
                <option>Druid</option>
                <option>Sorcerer</option>
                <option>Wizard</option>
                <option>Warlock</option>
                <option>Bard</option>
              </select>
            </li>
          </ul>
        </div>
        <br  />
    </div>
    <button onClick={handleNavigate}>Save Changes</button>
  </main>
  );
}