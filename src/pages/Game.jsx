import React from 'react';

function Game() {
    return (
        <>

            {/* <div className='menu'>
                <section className='menu__pause'>
                    <h1>pause</h1>
                    <article className='btn-container'>
                        <button className='btn-container__btn '>Continue game</button>
                        <button className='btn-container__btn '>Restart</button>
                        <button className='btn-container__btn quit'>Quit Game</button>
                    </article>
                </section>
            </div> */}

            <header>
                <button className='purple_btn'>MENU </button>
                <img alt="logo" src="src/images/logo.svg" />
                <button className='purple_btn'>RESTART</button>

            </header>

            <main>
                <section className='player-section'>
                    <article className='player-div player-div-left'>
                        <img className='first-player' src="src/images/player-one.svg" alt="player one" />
                        Player 1
                        <span>50</span>
                    </article>
                    <article className='player-div player-div-right'>
                        <img className='second-player' src="src/images/player-two.svg" alt="player two" />
                        Player 2
                        <span>20</span>
                    </article>
                </section>

                <div className='board-container'>
                    <img className='board1 boardMobile' src="src/images/board-layer-black-small.svg" alt="black board" />
                    <img className='board2 boardMobile' src="src/images/board-layer-white-small.svg" alt="white board" />
                    <img className='board1 boardPC' src="src/images/board-layer-black-large.svg" alt="black board" />
                    <img className='board2 boardPC' src="src/images/board-layer-white-large.svg" alt="white board" />
                    <div className='arrow-div'>
                        <p className='arrow-p'>Player 1's turn</p>
                        <p className='arrow-p timer'><span>20</span>s</p>
                        <img className='arrow' src="src/images/turn-background-red.svg" alt="board background" />


                    </div>
                </div>
            </main>

            <footer>
                <section className='bottom-page'>

                </section>
            </footer>


        </>
    );
}

export default Game;