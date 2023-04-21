import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import './games-overview.css';
import { BsClockFill, BsFillCalendarWeekFill } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { GiUpgrade, GiAzulFlake } from 'react-icons/gi';
import { BsEmojiSmile } from 'react-icons/bs';
import { MdWaterDrop, MdAddCircle } from 'react-icons/md';
import { TbStethoscope } from 'react-icons/tb';

import imgTowerofhanoi from '../images/imgTowerofhanoi.webp';
import imgCardMemory from '../images/imgCardMemory.png';
import imgFaceMemory from '../images/imgFaceMemory.webp';
import imgRestaurantMemory from '../images/imgRestaurantMemory.png';
import imgChunking from '../images/imgChunking.png';
import imgShapeColor from '../images/imgShapeColor.webp';
import imgDisplayed from '../images/imgDisplayed.webp';




export default function GamesOverview() {
    return <div className='containerDiv'>
        <h1><strong>Games Overview</strong></h1>
        <div className='gridContainerDiv'>
            <Container fluid="md">
                <Row>
                    <Col className="dashSection" style={{ display: "flex", alignItems: "left" }}>
                        <div className="profileInfo" style={{ flex: "1 0 75%", textAlign: "left" }}>
                            <p><GiAzulFlake color="red" size="3em" />Remember to prioritize assigned exercises by your therapist!</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <span><h3 className='sectionHeader'><strong>Tower of Hanoi</strong></h3></span>
                            <Button href="/games/hanoi" variant="warning" size="lg" style={{ margin: "5px" }}>Play</Button>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <p style={{ textAlign: "left" }}>The Tower of Hanoi is a game of logical thinking and sequential reasoning.
                        The rings are of different sizes and stacked upon in an ascending order, the smaller one sits over the larger one.
                        </p>
                        <Accordion eventKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <strong style={{ color: "#3620BE" }}>Rules</strong></Accordion.Header>
                                <Accordion.Body style={{ textAlign: "left" }}>
                                    <ul>
                                        <li>
                                            Only the topmost ring on a pile can be moved each time.
                                        </li>
                                        <li>
                                            A ring with a larger number cannot be placed on top of a smaller ring.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div class="gamePreviewImg">
                            <img src={imgTowerofhanoi} alt="towerofhanoi" />
                        </div>
                    </Col>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <span><h3 className='sectionHeader'><strong>Card <br></br> Match</strong></h3></span>
                            <Button href="/games/card-memory/go" variant="warning" size="lg" style={{ margin: "5px" }}>Play</Button>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <p style={{ textAlign: "left" }}>
                            Card Match is is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn.
                            The object of the game is to turn over pairs of matching cards.</p>
                        <Accordion eventKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <strong style={{ color: "#3620BE" }}>Rules</strong></Accordion.Header>
                                <Accordion.Body style={{ textAlign: "left" }}>
                                    <ul>
                                        <li>
                                            Flip the cards and match the tiles together in pairs
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div class="gamePreviewImg">
                            <img src={imgCardMemory} alt="imgCardMemory" />
                        </div>
                    </Col>

                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <span><h3 className='sectionHeader'><strong>Restaurant Memory</strong></h3></span>
                            <Button href="#" variant="warning" size="lg" style={{ margin: "5px" }}>Play</Button>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <p style={{ textAlign: "left" }}>
                            This exercise demands you to pay attention to what each guest ordered, the location of each guest, and the names of each guest.
                            Remember the orders of the customers in your own restaurant!</p>
                        <Accordion eventKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <strong style={{ color: "#3620BE" }}>Rules</strong></Accordion.Header>
                                <Accordion.Body style={{ textAlign: "left" }}>
                                    <ul>
                                        <li>
                                            Orders must be matched correctly
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div class="gamePreviewImg">
                            <img src={imgRestaurantMemory} alt="imgRestaurantMemory" />
                        </div>
                    </Col>


                </Row>
                <Row>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <span><h3 className='sectionHeader'><strong>Chunking Memory</strong></h3></span>
                            <Button href="#" variant="warning" size="lg" style={{ margin: "5px" }}>Play</Button>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <p style={{ textAlign: "left" }}>In this exercise, you must focus on a configuration of objects on a grid.
                            With a set memorization time, they must memorize the objects they have seen and where they are located on the grid.
                            After the time is up, they must then place the objects they have seen exactly as they were displayed onto a blank grid.</p>

                        <div class="gamePreviewImg">
                            <img src={imgChunking} alt="imgChunking" />
                        </div>
                    </Col>
                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <span><h3 className='sectionHeader'><strong>Shapes and Colors</strong></h3></span>
                            <Button href="#" variant="warning" size="lg" style={{ margin: "5px" }}>Play</Button>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <p style={{ textAlign: "left" }}>In this exercise, you must memorize several figures of various shapes and colors and then recognize them among slightly different ones.
                            This exercise will test your occipital lobes as well as their ventral processing stream to effectively identify the shapes and colors that you have seen.
                        </p>

                        <div class="gamePreviewImg">
                            <img src={imgShapeColor} alt="imgShapeColor" />
                        </div>
                    </Col>

                    <Col className="dashSection">
                        <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                            <span><h3 className='sectionHeader'><strong>Displaced Characters</strong></h3></span>
                            <Button href="#" variant="warning" size="lg" style={{ margin: "5px" }}>Play</Button>
                        </div>
                        <hr style={{ width: "90%" }} />
                        <p style={{ textAlign: "left" }}>In this exercise, you must discern which figures are present in one list and are not present in a second list.
                            At the beginning, you will see two lists side by side.
                            Next, they will have to compare the lists on separate screens.
                            This will help practice attention to detail, memorization techniques, and figure discrimation.</p>

                        <div class="gamePreviewImg">
                            <img src={imgDisplayed} alt="imgDisplayed" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
}