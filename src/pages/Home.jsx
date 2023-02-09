import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
    return (

        <>
            <div className='container'>


                <div className='container__homesection'>



                    <img alt="logo" src="src/images/logo.svg" className='menu_logo' />

                    <Link to="/Game" className='player home-btn'>
                        play vs player
                        <img src='src/images/player-vs-player.svg'></img>
                    </Link>

                    <Link to="/Rule" className='rule home-btn' >
                        Game rules
                    </Link>

                </div>
            </div>
        </>
    );
}

export default Home;