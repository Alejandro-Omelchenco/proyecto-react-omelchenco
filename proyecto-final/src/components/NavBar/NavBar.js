import React from 'react';
import './NavBar.css'

function NavBar(props) {
    return (
        <div>
        <h1>SUSHI LAND</h1>
            <ul className='nav'>
                <a href="#">CONOCENOS</a>
                <a href="#">CARTA RESTAURANT</a>
                <a href="#">CARTA DELIVERY</a>
                <a href="#">PEDI ONLINE</a>
            </ul>
        </div>
    );
}

export default NavBar;