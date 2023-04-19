import React, { useState } from 'react'
import '../../assets/css/Hanoi.css'
import { Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function HanoiStartScreen() {

  const navigate = useNavigate();

  const start = (difficulty) => {
    navigate('/games/hanoi/go', {state:{difficulty: difficulty}})
  }

  return (
    <>
      <Row>
        <h1>Tower of Hanoi</h1>
      </Row>
      <Row>
        <h2><span className="text-title">Objective:</span> Rebuild the tower in the third column using as few moves as possible</h2>
        <h2><span className="text-title">Instructions:</span> Move one tile at a time, bigger tiles cannot be placed on top of smaller tiles</h2>
        <h2><span className="text-title">Trains: </span> 
          <ul>
            <li>Problem-solving</li>
            <li>Planning</li>
            <li>Memory</li>
            <li>Visual-Spatial Reasoning</li>
          </ul>
        </h2>
      </Row>
      <Row className="difficulty-button-row">
        <h1>Select a difficulty</h1>
        <Col>
          <Button onClick={() => start('easy')}>Easy</Button>
        </Col>
        <Col>
          <Button onClick={() => start('medium')}>Medium</Button>
        </Col>
        <Col>
          <Button onClick={() => start('hard')}>Hard</Button>
        </Col>
        <Col>
          <Button onClick={() => start('very_hard')}>Very Hard</Button>
        </Col>
      </Row>
    </>
  )
}

export default HanoiStartScreen
