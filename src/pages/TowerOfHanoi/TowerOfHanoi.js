import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Col, Row, Container } from "react-bootstrap";
import {easy_mode_init, 
        medium_mode_init, 
        hard_mode_init,
        very_hard_mode_init} from "../../contants/HanoiConstants";
import '../index.css'
import '../../assets/css/Hanoi.css'

/**
 * Note: The React implementation of the Tower of Hanoi game was adapted from 
 * https://codesandbox.io/s/react-tower-of-hanoi-uje04?file=/src/styles.css,
 * written by user colin5530 https://codesandbox.io/u/colin5530
 */

function TowerOfHanoi() {

  const location = useLocation();
  const navigate = useNavigate();

  let init = JSON.parse(JSON.stringify(easy_mode_init))
  
  const [moveCount, setMoveCount] = useState(0);
  const [dragId, setDragId] = useState();
  const [tiles, setTiles] = useState(init);
  const [difficulty, setDifficulty] = useState('');
  const [ready, setReady] = useState(false);
  const [idealMoves, setIdealMoves] = useState(0)

  let ideal_num_moves = 0;

  useEffect(() => {
    initializeDifficulty();
    initializeTiles();
  }, [ready])
  
  const initializeDifficulty = () => {
    if (location.state !== null && location.state.difficulty !== undefined) {
      setDifficulty(location.state.difficulty);
      setReady(true);
    } else {
      setDifficulty('easy');
      setReady(true);
    }
  }

  const initializeTiles = () => {
    switch(difficulty) {
      case 'easy':
        let easy_init = JSON.parse(JSON.stringify(easy_mode_init));
        setTiles(easy_init);
        ideal_num_moves = Math.pow(2, 3) - 1;
        setIdealMoves(ideal_num_moves);
        break;
      case 'medium':
        let med_init = JSON.parse(JSON.stringify(medium_mode_init));
        setTiles(med_init);
        ideal_num_moves = Math.pow(2, 4) - 1;
        setIdealMoves(ideal_num_moves);
        break;
      case 'hard':
        let hard_init = JSON.parse(JSON.stringify(hard_mode_init));
        setTiles(hard_init);
        ideal_num_moves = Math.pow(2, 5) - 1;
        setIdealMoves(ideal_num_moves);
        break;
      case 'very_hard':
        let v_hard_init = JSON.parse(JSON.stringify(very_hard_mode_init));
        setTiles(v_hard_init);
        ideal_num_moves = Math.pow(2, 6) - 1;
        setIdealMoves(ideal_num_moves);
        break;
      default:
        let default_init = JSON.parse(JSON.stringify(easy_mode_init))
        setTiles(default_init);
        ideal_num_moves = Math.pow(2, 3) - 1;
        setIdealMoves(ideal_num_moves);
        break;
    }
    setMoveCount(0);
  }

  const handleReset = () => {
    initializeTiles();
  }

  const handleBack = () => {
    navigate(-1);
  }

  const handleDrag = (ev) => {
    const dragTile = tiles.find((tile) => tile.id === ev.currentTarget.id);
    const topTile = tiles
      .filter((tile) => tile.column === dragTile.column)
      .sort((a, b) => a.width - b.width)[0];

    if (topTile && ev.currentTarget.id === topTile.id) {
      setDragId(ev.currentTarget.id);
    } else {
      ev.preventDefault();
    }
  };

  const handleDrop = (ev) => {
    const dragTile = tiles.find((tile) => tile.id === dragId);
    const dropColumn = ev.currentTarget.id;

    const dropColumnTopTile = tiles
      .filter((tile) => tile.column.toString() === dropColumn.toString())
      .sort((a, b) => a.width - b.width)[0];

    let newTileState = tiles;

    if (!dropColumnTopTile || dragTile.width < dropColumnTopTile.width) {
      newTileState = tiles.map((tile) => {
        if (tile.id === dragTile.id) {
          tile.column = parseInt(dropColumn, 10);
          setMoveCount(moveCount + 1);
        }

        return tile;
      });
    }

    setTiles(newTileState);
  };

  const column1Tiles = tiles.filter((tile) => tile.column === 1);
  const column2Tiles = tiles.filter((tile) => tile.column === 2);
  const column3Tiles = tiles.filter((tile) => tile.column === 3);

  const winCondition = tiles.every((tile) => tile.column === 3);

  return (
    <>
      <div className="App">
        <Row className="instructions">
          <Col sm={2} md={2} id="back-button-container">
            <Button className="game-button" onClick={handleBack}>Back</Button>
          </Col>
          <Col sm={6} md={8}>
              <p><span className="text-title">Objective:</span> Rebuild the tower in the third column using as few moves as possible</p>
              <p><span className="text-title">Instructions:</span> Move one tile at a time, bigger tiles cannot be placed on top of smaller tiles</p>
          </Col>
          <Col sm={2} md={2} id="reset-button-container">
            <Button className="game-button" onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
        <Container className="hanoi-game-container">
          <div className="hanoi-game-window">
            <div className="hanoi-column" id={1}
              onDragOver={(ev) => ev.preventDefault()}
              onDrop={handleDrop}
            >
              <div className="center-bar" />
              {column1Tiles
                .sort((a, b) => a.width - b.width)
                .map((tile, index) => {
                  const tileCount = column1Tiles.length;
                  const tileStyles = {
                    width: `${tile.width}em`
                  };
                  tileStyles.marginTop =
                    index === 0 ? `calc(60vh - ${tileCount * 40 + 1}px)` : "0";
                  return (
                    <div
                      {...tile}
                      className="tile"
                      draggable
                      key={`column-1-${tile.id}`}
                      onDragOver={(ev) => ev.preventDefault()}
                      onDragStart={handleDrag}
                      style={tileStyles}
                    />
                  );
                })}
            </div>
            <div className="hanoi-column" id={2}
              onDragOver={(ev) => ev.preventDefault()}
              onDrop={handleDrop}
            >
              <div className="center-bar" />
              {column2Tiles
                .sort((a, b) => a.width - b.width)
                .map((tile, index) => {
                  const tileCount = column2Tiles.length;
                  const tileStyles = {
                    width: `${tile.width}em`
                  };
                  tileStyles.marginTop =
                    index === 0 ? `calc(60vh - ${tileCount * 40 + 1}px)` : "0";
                  return (
                    <div
                      {...tile}
                      className="tile"
                      draggable
                      key={`column-2-${tile.id}`}
                      onDragOver={(ev) => ev.preventDefault()}
                      onDragStart={handleDrag}
                      style={tileStyles}
                    />
                  );
                })}
            </div>
            <div className="hanoi-column" id={3}
              onDragOver={(ev) => ev.preventDefault()}
              onDrop={handleDrop}
            >
              <div className="center-bar" />
              {column3Tiles
                .sort((a, b) => a.width - b.width)
                .map((tile, index) => {
                  const tileCount = column3Tiles.length;
                  const tileStyles = {
                    width: `${tile.width}em`
                  };
                  tileStyles.marginTop =
                    index === 0 ? `calc(60vh - ${tileCount * 40 + 1}px)` : "0";
                  return (
                    <div
                      {...tile}
                      className="tile"
                      draggable
                      key={`column-3-${tile.id}`}
                      onDragOver={(ev) => ev.preventDefault()}
                      onDragStart={handleDrag}
                      style={tileStyles}
                    />
                  );
                })}
            </div>
          </div>
        </Container>
        {winCondition && (
          <div className="win-message">
            You Win!
            {moveCount == idealMoves ? 
              <div className="win-subtitle">
                You solved it in <span className="win-number">{moveCount}</span>moves, the smallest possible number of moves!
              </div> : 
              <div className="win-subtitle">
              You solved it in <span className="win-number">{moveCount}</span> moves!
              </div>
            }
          </div>
        )}
        Move count: {moveCount}
      </div>
    </>
  );
}

export default TowerOfHanoi
