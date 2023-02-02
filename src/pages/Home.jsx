import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
    return (

        <>

            <div className='homesection'>


                <Link to="/">
                    <img alt="logo" src="src/images/logo.svg" className='height-75 ' />
                </Link>
                <Link to="/Game" className='playerbtn'>
                    play vs player
                    <img src='src/images/player-vs-player.svg'></img>
                </Link>

                <Link to="/Rule" className='rulebtn' >
                    Game rules
                </Link>

            </div>
        </>
    );
}

export default Home;