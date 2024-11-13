import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { GmPermissions } from './gmpermissions/gmpermissions';
import { PlayerNotes } from './playernotes/playernotes';
import { WorldLore } from './worldlore/worldlore';

export default function App() {
  return (
    <BrowserRouter>
        <div>
            <header>
                <h1 className="titleWord">LoreCore</h1>    

                <nav>
                    <ul className="navbar">

                        <li>
                            <NavLink className='nav-link' to=''>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='playernotes'>
                                Player Notes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='worldlore'>
                                World Lore
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='gmpermissions'>
                                Edit Permissions
                            </NavLink>
                        </li>
                    </ul>
                </nav>    
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/playernotes' element={<PlayerNotes />} />
                <Route path='/worldlore' element={<WorldLore />} />
                <Route path='/gmpermissions' element={<GmPermissions />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <hr />
                <span className="text-reset">Author Name(s)</span>
                <br />
                <a href="https://github.com/gunnargriffith/startup">LoreCore GitHub</a>
            </footer>

        </div>
    </BrowserRouter>
    );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}