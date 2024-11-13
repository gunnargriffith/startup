import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
        <header>
            <h1 className="titleWord">LoreCore</h1>    

            <nav>
                <ul className="navbar">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="playernotes.html">Player Notes</a></li>
                    <li><a href="worldlore.html">World Lore</a></li>
                    <li><a href="gmpermissions.html">Edit Permissions</a></li>
                </ul>
            </nav>    
        </header>

        <main>App Stuff here</main>

        <footer>
            <hr />
            <span className="text-reset">Author Name(s)</span>
            <br />
            <a href="https://github.com/gunnargriffith/startup">LoreCore GitHub</a>
        </footer>

    </div>



    );
}