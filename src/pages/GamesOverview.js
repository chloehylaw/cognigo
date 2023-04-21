import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './games-overview.css';
import { BsClockFill, BsFillCalendarWeekFill } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { GiUpgrade } from 'react-icons/gi';
import { BsEmojiSmile } from 'react-icons/bs';
import { MdWaterDrop, MdAddCircle } from 'react-icons/md';
import { TbStethoscope } from 'react-icons/tb';

import imgTowerofhanoi from '../images/imgTowerofhanoi.webp';



export default function GamesOverview() {
    return <div className='containerDiv'>
        <h1><strong>Games Overview</strong></h1>
        <div className='gridContainerDiv'>
            <Container fluid="md">
                <Row>
                    <Col className="dashSection" style={{ display: "flex", alignItems: "left" }}>
                        <div className="profileInfo" style={{ flex: "1 0 75%", textAlign: "left" }}>
                            <p>Remember to prioritize assigned exercises by your therapist!</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <GiUpgrade className='icon' /><span><h3 className='sectionHeader'><strong>Tower of Hanoi</strong></h3></span>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <p style={{ textAlign: "left" }}>The Tower of Hanoi is a classic game of logical thinking and sequential reasoning.
                            Move rings from one tower to another but make sure you follow the rules! <strong style={{ color: "#3620BE" }}>Rules:</strong>
                            <ul>
                                <li>
                                    Only the topmost ring on a pile can be moved each time.
                                </li>
                                <li>
                                    A ring with a larger number cannot be placed on top of a smaller ring.
                                </li>
                            </ul>
                        </p>
                        <div style={{ flex: "1 0 5%" }}>
                            <img src={imgTowerofhanoi} alt="towerofhanoi" />
                        </div>
                        <Button href="/games/hanoi/go" variant="warning" size="lg" style={{ margin: "5px" }}>Play</Button>
                    </Col>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <FaAward className='icon' /><span><h3 className='sectionHeader'><strong>Daily Points</strong></h3></span>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <p style={{ textAlign: "left" }}>You only need <strong style={{ color: "#D65354" }}>375 more points</strong> to hit your daily target! Keep it up!</p>
                    </Col>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <BsFillCalendarWeekFill className='icon' /><span><h3 className='sectionHeader'><strong>Exercises</strong></h3></span>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <p style={{ textAlign: "left" }}>Just <strong style={{ color: "#1F4027" }}>3 more days to go</strong> to meet your weekly target!</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <BsEmojiSmile className='icon' /><span><h3 className='sectionHeader'><strong>Mood</strong></h3></span>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <span><p style={{ textAlign: "left" }}>How are you feeling today?</p></span><MdAddCircle style={{ marginLeft: "10px" }} className='icon' />
                        </div>

                    </Col>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <TbStethoscope className='icon' /><span><h3 className='sectionHeader'><strong>Symptoms</strong></h3></span>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <span><p style={{ textAlign: "left" }}>Report any negative symptoms</p></span><MdAddCircle style={{ marginLeft: "10px" }} className='icon' />
                        </div>
                    </Col>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <MdWaterDrop className='smallIcon' /><span><h5 className='sectionHeader'><strong>Water Intake:</strong> 32oz</h5></span>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <BsClockFill className='smallIcon' /><span><h5 className='sectionHeader'><strong>Sleep:</strong> 8.25hrs</h5></span>
                        </div>
                        <MdAddCircle style={{ marginLeft: "250px" }} className='icon' />

                    </Col>
                </Row>
            </Container>
        </div>
    </div>
}