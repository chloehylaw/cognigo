import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './dashboard.css';
import womanProfile from '../images/9651081.jpg';
import { BsClockFill, BsFillCalendarWeekFill } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { GiUpgrade } from 'react-icons/gi';
import { BsEmojiSmile, BsFire } from 'react-icons/bs';
import { MdWaterDrop, MdAddCircle } from 'react-icons/md';
import { TbStethoscope } from 'react-icons/tb';
import CircularProgressPurple from './CircularProgressPurple';
import CircularProgressOrange from './CircularProgressOrange';
import CircularProgressGreen from './CircularProgressGreen';

export default function DailyChallenges() {
    return <div className='containerDiv'>
    <h1><strong>Daily Challenge</strong></h1>
    <div className='gridContainerDiv'>
        <Container fluid="md">
        <Row>
            <Col className="dashSection">
                <div className="profileInfo" style={{ textAlign: "left"}}>
                <h3><span>Hey, Alex!</span></h3>
                <h5 style={{marginTop: "4%"}}> <BsFire className="icon"/><span>You're on a roll! You've completed <strong style={{color: "#D65354"}}>3 consecutive daily challenges</strong> this week. Keep it up!</span></h5>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="dashSection">
                <div className="profileInfo" style={{ textAlign: "left"}}>
                <h3><strong>Here's your daily challenge:</strong></h3>
                <hr style={{width: "80%"}}/>
                <ul>
                    <li><strong>Remembering daily appointments and events:</strong> I want to work on techniques for remembering important dates, appointments, and tasks, such as using a calendar, setting reminders on their phone, or using a memory aid like a whiteboard or sticky notes.</li>
                    <li><strong>Improving working memory:</strong> I want to improve my ability to hold information in my mind for short periods of time, such as remembering a phone number or a list of items.</li>
                    <li><strong>Improving executive functioning skills:</strong> I want to work on skills related to executive functioning, such as planning, organizing, prioritizing, and time management. </li>
                </ul>
                </div>
            </Col>
        </Row>
               </Container>
    </div>
</div>
}