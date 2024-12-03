import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './login.css'; 

export function Login() {
  const [selectedRole, setSelectedRole] = useState(null); 
  const [abilityScore, setAbilityScore] = useState(null); // State to hold API data
  const navigate = useNavigate(); 

  // Array of API URLs
  const apiUrls = [
    'https://www.dnd5eapi.co/api/ability-scores/str',
    'https://www.dnd5eapi.co/api/ability-scores/con',
    'https://www.dnd5eapi.co/api/ability-scores/dex',
    'https://www.dnd5eapi.co/api/ability-scores/int',
    'https://www.dnd5eapi.co/api/ability-scores/wis',
    'https://www.dnd5eapi.co/api/ability-scores/cha',
  ];

  // Fetch random API data on component mount
  useEffect(() => {
    const fetchAbilityScore = async () => {
      try {
        // Pick a random API URL
        const randomUrl = apiUrls[Math.floor(Math.random() * apiUrls.length)];
        const response = await fetch(randomUrl);
        const data = await response.json();
        setAbilityScore(data);
      } catch (error) {
        console.error('Error fetching ability score data:', error);
      }
    };

    fetchAbilityScore();
  }, []);

  const handleCheckboxChange = (role) => {
    setSelectedRole(selectedRole === role ? null : role); 
  };

  const handleLogin = () => {
    if (selectedRole === 'Game Master') {
      navigate('/gmpermissions'); 
    } else if (selectedRole === 'Player') {
      navigate('/playernotes');
    } else {
      alert('Please select a role before proceeding.');
    }
  };

  return (
    <main>
      <fieldset className="loginMain">
        <h4>Please login as a Game Master or Player:</h4>

        <label className="checkBoxLabel" htmlFor="GameMaster">
          <input
            className="textbox"
            type="checkbox"
            id="GameMaster"
            name="gmCheckbox"
            value="Game Master"
            checked={selectedRole === 'Game Master'}
            onChange={() => handleCheckboxChange('Game Master')}
          />
          Game Master
        </label>

        <label className="checkBoxLabel" htmlFor="Player">
          <input
            className="textbox"
            type="checkbox"
            id="Player"
            name="pCheckbox"
            value="Player"
            checked={selectedRole === 'Player'}
            onChange={() => handleCheckboxChange('Player')}
          />
          Player
        </label>

        <br />
        <br />

        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input className="form-control" type="text" placeholder="your@email.com" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input className="form-control" type="password" placeholder="password" />
        </div>

        <button type="submit" onClick={handleLogin}>
          Login
        </button>

        <button type="submit" onClick={handleLogin}>
          New Profile
        </button>
      </fieldset>

      <section className="apiData">
        <h5>Ability Score Spotlight</h5>
        {abilityScore ? (
          <div className="abilityInfo">
            <p><strong>Name:</strong> {abilityScore.full_name}</p>
            <p><strong>Abbreviation:</strong> {abilityScore.index.toUpperCase()}</p>
            <p><strong>Description:</strong> {abilityScore.desc.join(' ')}</p>
          </div>
        ) : (
          <p>Loading ability score data...</p>
        )}
      </section>
    </main>
  );
}