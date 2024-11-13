import React from 'react';


export function Login() {
  return (
    <main>
  <fieldset className="loginMain">
    <h4>Please login as a Game Master or Player:</h4>

    <label className="checkBoxLabel" htmlFor="GameMaster">Game Master</label>
    <input
      className="textbox"
      type="checkbox"
      id="GameMaster"
      name="gmCheckbox"
      value="Game Master"
      style={{ marginRight: '20px' }}
    />

    <label className="checkBoxLabel" htmlFor="Player">Player</label>
    <input className="textbox" type="checkbox" id="Player" name="pCheckbox" value="Player" />

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

    <button type="submit" onClick={() => window.location.href = 'playernotes.html'}>
      Login
    </button>
    
    <button type="submit" onClick={() => window.location.href = 'playernotes.html'}>
      New Profile
    </button>

  </fieldset>
</main>
  );
}