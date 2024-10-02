import React from 'react';
import '../App.css';

export default function Header(){
    return (
        <header>
                 <div className="site-name">MySite</div>
                 <div className="nav-links">
                    <a href="#Page"className="nav-link">Page</a>
                    <a href="#Page"className="nav-link">Page</a>
                    <a href="#Page"className="nav-link">Page</a>
                    <button className="nav-button">Button</button>
                </div>
        </header>
    );
}