import React from 'react';
import './gmpermissions.css'

export function GmPermissions() {
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
              <label htmlFor="player">Players: </label>
              <select id="player" name="varPlayer" defaultValue="Any">
                <option>Any</option>
                <option>None</option>
                <option>Yosai</option>
                <option>Ciel</option>
                <option>Eliane</option>
                <option>Brynhild</option>
              </select>
            </li>
            <li>
              <label htmlFor="Race">Races: </label>
              <select id="Race" name="varRace" defaultValue="Any">
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
              <label htmlFor="Class">Classes: </label>
              <select id="Class" name="varClass" defaultValue="Any">
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
                <label for="player">Players: </label>
                <select id="player" name="varPlayer">
                  <option selected>Any</option>
                  <option>None</option>
                  <option>Yosai</option>
                  <option>Ciel</option>
                  <option>Eliane</option>
                  <option>Brynhild</option>
                </select>
              </li>
              <li>
                <label for="Race">Races: </label>
                <select id="Race" name="varRace">
                  <option selected>Any</option>
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
                <label for="Class">Classes: </label>
                <select id="Class" name="varClass">
                  <option>Any</option>
                  <option>Barbarian</option>
                  <option>Fighter</option>
                  <option selected>Cleric</option>
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
              <label for="player">Players: </label>
              <select id="player" name="varPlayer">
                <option selected>Any</option>
                <option>None</option>
                <option>Yosai</option>
                <option>Ciel</option>
                <option>Eliane</option>
                <option>Brynhild</option>
              </select>
            </li>
            <li>
              <label for="Race">Races: </label>
              <select id="Race" name="varRace">
                <option>Any</option>
                <option selected>Human</option>
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
              <label for="Class">Classes: </label>
              <select id="Class" name="varClass">
                <option selected>Any</option>
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
              <label for="player">Players: </label>
              <select id="player" name="varPlayer">
                <option>Any</option>
                <option>None</option>
                <option>Yosai</option>
                <option selected>Ciel</option>
                <option>Eliane</option>
                <option>Brynhild</option>
              </select>
            </li>
            <li>
              <label for="Race">Races: </label>
              <select id="Race" name="varRace">
                <option selected>Any</option>
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
              <label for="Class">Classes: </label>
              <select id="Class" name="varClass">
                <option selected>Any</option>
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
  </main>
  );
}