import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

// Simulated backend service endpoint (replace with a real URL later)
const BACKEND_URL = 'https://placeholder-backend.com/api/login';

// Class to represent user roles and authentication status
class AuthStatus {
  constructor() {
    this.isAuthenticated = false;
    this.role = null;
  }

  authenticate(role) {
    this.isAuthenticated = true;
    this.role = role;
  }

  clearAuth() {
    this.isAuthenticated = false;
    this.role = null;
  }
}

export function Login() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authStatus, setAuthStatus] = useState(new AuthStatus());
  const [abilityScore, setAbilityScore] = useState(null); 
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

  const handleLogin = async () => {
    if (!email || !password || !selectedRole) {
      alert('Please fill out all fields and select a role before proceeding.');
      return;
    }

    try {
      // Simulate a backend request
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role: selectedRole }),
      });

      const result = await response.json();

      if (response.ok) {
        // Update authentication status
        const newAuthStatus = new AuthStatus();
        newAuthStatus.authenticate(selectedRole);
        setAuthStatus(newAuthStatus);

        // Navigate based on role
        if (selectedRole === 'Game Master') {
          navigate('/gmpermissions');
        } else if (selectedRole === 'Player') {
          navigate('/playernotes');
        }
      } else {
        alert(`Login failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Failed to connect to the backend. Please try again later.');
    }
  };

  const handleNewProfile = () => {
    alert('Redirecting to create a new profile...'); // Placeholder for future functionality
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
          <input
            className="form-control"
            type="text"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input
            className="form-control"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleLogin}>
          Login
        </button>

        <button type="submit" onClick={handleNewProfile}>
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