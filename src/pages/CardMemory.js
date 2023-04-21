import MemoryGame from 'react-card-memory-game';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function CardMemory() {
    const [showUnsuccessful, setShowUnsuccessful] = useState(undefined);
    const [countUnsuccessful, setCountUnsuccessful] = useState(0);
    const [gridNumber, setGridNumber] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);

    const styles = {
        container: { padding: 20, textAlign: 'center', color: 'black' },
        chooseContainer: { padding: 20, fontSize: "1.5rem" },
        chooseGridButton: { padding: 20, border: "1px solid white", cursor: "pointer" }
    }

    return (
        <div style={styles.container}>
            <h1>Card Memory Game</h1>
            {!gridNumber && (
                <>
                    <h2>
                        Choose grid size:
                    </h2>
                    <div style={styles.chooseContainer}>
                        <span onClick={() => setGridNumber(4)} style={styles.chooseGridButton}>4x4</span>
                        <span onClick={() => setGridNumber(5)} style={styles.chooseGridButton}>4x5</span>
                        <span onClick={() => setGridNumber(6)} style={styles.chooseGridButton}>4x6</span>
                    </div>
                </>
            )}
            {(gridNumber > 0 && !showUnsuccessful) && (
                <div>
                    <h2>
                        Show unsuccessful attempts?
                    </h2>
                    <div style={styles.chooseContainer}>
                        <span onClick={() => setShowUnsuccessful('yes')} style={styles.chooseGridButton}>Yes</span>
                        <span onClick={() => setShowUnsuccessful('no')} style={styles.chooseGridButton}>No</span>
                    </div>
                </div>
            )}
            {showUnsuccessful === 'yes' && (
                <div>
                    unsuccessful attempts: {countUnsuccessful}
                </div>
            )}
            {gridNumber > 0 && showUnsuccessful && (
                <MemoryGame
                    holeCardsColor={"orange"}
                    foundCardsColor={"yellow"}
                    gridNumber={gridNumber}
                    gameFinished={() => setGameFinished(true)}
                    notFoundPair={() => {
                        if (showUnsuccessful) {
                            setTimeout(() => {
                                setCountUnsuccessful(prev => prev + 1)
                            }, 200)
                        }
                    }}
                />
            )}
            {gameFinished && (
                <div>
                    <h1>Victory!</h1>
                    <Button href="/games/card-memory/go" variant="warning">Play again</Button>
                </div>
            )}
        </div>
    );
}
export default CardMemory;