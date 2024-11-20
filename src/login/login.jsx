import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './login.css'; // Import the CSS file

export function Login() {
  const [selectedRole, setSelectedRole] = useState(null); // Track selected role
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleCheckboxChange = (role) => {
    setSelectedRole(selectedRole === role ? null : role); // Toggle the role or clear selection
  };

  const handleLogin = () => {
    if (selectedRole === 'Game Master') {
      navigate('/gmpermissions'); // Navigate to the Game Master page
    } else if (selectedRole === 'Player') {
      navigate('/playernotes'); // Navigate to the Player Notes page
    } else {
      alert('Please select a role before proceeding.'); // Prompt the user to select a role
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
    </main>
  );
}