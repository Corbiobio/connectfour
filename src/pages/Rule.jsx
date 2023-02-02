import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Rule() {
    return (
        <>

            <div className='flex'>
                <section className='sectionrule'>
                    <h1>Rules</h1>

                    <article>
                        <h3 className='title'>objective</h3>
                        <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
                    </article>

                    <article>
                        <h3 className='title'>How to play</h3>
                        <ol>
                            <li>Red goes first in the first game.</li>
                            <li>Players must alternate turns, and only one disc can be dropped in each turn. </li>
                            <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
                            <li>The starter of the previous game goes second on the next game.</li>
                        </ol>
                    </article>
                    <Link to="/" className='check-btn'>
                        <img src="src/images/icon-check.svg" alt="svg" />
                    </Link>
                </section>
            </div>

        </>
    );
}

export default Rule;