import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './dashboard.css';
import womanProfile from '../images/9651081.jpg';
import { BsClockFill, BsFillCalendarWeekFill } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { GiUpgrade } from 'react-icons/gi';
import { BsEmojiSmile } from 'react-icons/bs';
import { MdWaterDrop, MdAddCircle } from 'react-icons/md';
import { TbStethoscope } from 'react-icons/tb';
import CircularProgressPurple from './CircularProgressPurple';
import CircularProgressOrange from './CircularProgressOrange';
import CircularProgressGreen from './CircularProgressGreen';

export default function ProgressionMap() {
    return <div className='containerDiv'>
        <h1><strong>Welcome back, Alex!</strong></h1>
        <div className='gridContainerDiv'>
            <Container fluid="md">
            <Row>
                <Col className="dashSection" style={{ display: "flex", alignItems: "left" }}>
                    <div style={{ flex: "1 0 25%" }}>
                        <img src={womanProfile} alt="My Image" />
                    </div>
                    <div className="profileInfo" style={{ flex: "1 0 75%", textAlign: "left"}}>
                        <h3><strong>Alex Thompson</strong></h3>
                        <hr style={{width: "80%"}}/>
                        <p>Age: 29</p>
                        <p>Gender: Female</p>
                        <p>Occupation: Software Engineer</p>
                        <p>Location: Seattle, WA</p>
                        <p>Assigned Therapist: Natalie Brown</p>
                        <p>Interests: Painting, Hiking, Playing Guitar</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="dashSection">
                    <div className="profileInfo" style={{ textAlign: "left"}}>
                    <h3><strong>My Goals:</strong></h3>
                    <hr style={{width: "80%"}}/>
                    <ul>
                        <li><strong>Remembering daily appointments and events:</strong> I want to work on techniques for remembering important dates, appointments, and tasks, such as using a calendar, setting reminders on their phone, or using a memory aid like a whiteboard or sticky notes.</li>
                        <li><strong>Improving working memory:</strong> I want to improve my ability to hold information in my mind for short periods of time, such as remembering a phone number or a list of items.</li>
                        <li><strong>Improving executive functioning skills:</strong> I want to work on skills related to executive functioning, such as planning, organizing, prioritizing, and time management. </li>
                    </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <GiUpgrade className='icon'/><span><h3 className='sectionHeader'><strong>Level</strong></h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                    <p style={{textAlign: "left"}}>You're just <strong style={{color: "#3620BE"}}>750 points away</strong> from leveling up!</p>
                    <div style={{height: "250px"}}><CircularProgressPurple/></div>
                    
                </Col>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <FaAward className='icon'/><span><h3 className='sectionHeader'><strong>Daily Points</strong></h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                    <p style={{textAlign: "left"}}>You only need <strong style={{color: "#D65354"}}>375 more points</strong> to hit your daily target! Keep it up!</p>
                    <div style={{height: "250px"}}><CircularProgressOrange/></div>
                </Col>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <BsFillCalendarWeekFill className='icon'/><span><h3 className='sectionHeader'><strong>Exercises</strong></h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                    <p style={{textAlign: "left"}}>Just <strong style={{color: "#1F4027"}}>3 more days to go</strong> to meet your weekly target!</p>
                    <div style={{height: "250px"}}><CircularProgressGreen/></div>
                </Col>
            </Row>
            <Row>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <BsEmojiSmile className='icon'/><span><h3 className='sectionHeader'><strong>Mood</strong></h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <span><p style={{textAlign: "left"}}>How are you feeling today?</p></span><MdAddCircle style={{marginLeft:"10px"}} className='icon'/>
                    </div>

                </Col>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <TbStethoscope className='icon'/><span><h3 className='sectionHeader'><strong>Symptoms</strong></h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <span><p style={{textAlign: "left"}}>Report any negative symptoms</p></span><MdAddCircle style={{marginLeft:"10px"}} className='icon'/>
                    </div>
                </Col>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <MdWaterDrop className='smallIcon'/><span><h5 className='sectionHeader'><strong>Water Intake:</strong> 32oz</h5></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <BsClockFill className='smallIcon'/><span><h5 className='sectionHeader'><strong>Sleep:</strong> 8.25hrs</h5></span>
                    </div>
                    <MdAddCircle style={{marginLeft:"250px"}} className='icon'/>
                    
                </Col>
            </Row>
            </Container>
        </div>
    </div>
}