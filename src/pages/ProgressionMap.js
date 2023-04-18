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
import { CircularProgress } from '@mui/material';

export default function ProgressionMap() {
    return <div className='containerDiv'>
        <h1>Welcome back, Alex!</h1>
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
                    <h3><strong>Goals:</strong></h3>
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
                        <GiUpgrade className='icon'/><span><h3 className='sectionHeader'>Level</h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                    <CircularProgress variant="determinate" value={75} />
                </Col>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <FaAward className='icon'/><span><h3 className='sectionHeader'>Daily Points</h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                </Col>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <BsFillCalendarWeekFill className='icon'/><span><h3 className='sectionHeader'>Weekly Logins</h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                </Col>
            </Row>
            <Row>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <BsEmojiSmile className='icon'/><span><h3 className='sectionHeader'>Mood</h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                </Col>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <TbStethoscope className='icon'/><span><h3 className='sectionHeader'>Symptoms</h3></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                </Col>
                <Col className="dashSection">
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <MdWaterDrop className='smallIcon'/><span><h5 className='sectionHeader'>Water Intake: 32oz</h5></span>
                    </div>
                    <hr style={{width: "90%"}}/>
                    <div className="dashSectionHeader" style={{ textAlign: "left"}}>
                        <BsClockFill className='smallIcon'/><span><h5 className='sectionHeader'>Sleep: 8.25hrs</h5></span>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    </div>
}