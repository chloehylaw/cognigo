import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import brain from '../images/brain.jpg';
import memory from '../images/memory.jpg';
import language from '../images/Language.jpg';
import Visual from '../images/Visual.jpg';
import attention from '../images/attention.jpg';
import './progress.css';
import {BsFill1CircleFill,BsFill2CircleFill, BsFill3CircleFill } from 'react-icons/bs'

export default function AboutUs() {
    return <div className='containerDiv'>
        <Container className='gridContainerDiv'>
            <div className='dashSection' style={{marginTop: "1em", marginBottom: "1em"}}>
                <h2 style={{textAlign:'center'}}> What are we?</h2>
                <p> We are a Company that wishes to enhance the traditional means of cognitive rehabilitation therapy, we do this by using a gamefied approach to better increase your skills in memory, attention, visual spatial reasoning and language. As well, with a customizable interface, you can change the way this whole app looks to better your experience.</p>
            </div>  
            <div className='dashSection' style={{marginTop: "1em", marginBottom: "1em"}}>
                <h2 style={{marginTop:'1em', textAlign:'center'}}> Why did we do this?</h2>
                <p> We felt that patients who had cognitive impariements didn't have the best means to get better given the current system being slow and unmotivating. So we felt with our method, that users could stay motivated and get better from the comfort of their homes.  </p>
            </div>
            <div className='dashSection' style={{marginTop: "1em", marginBottom: "1em"}}>
                <Row>
                    <h2 style={{marginTop:'1em', marginBottom:'1em', textAlign:'center'}}>The engineers behind this app</h2>
                    <Col>Zachary Bruce</Col>
                    <Col>Victoria Castelli</Col>
                    <Col>Maxime Joanisse</Col>
                    <Col>Chloe Hei Yu Law</Col>
                    <Col>Khaled Owaida</Col>
                    <Col>Mauran Pavan</Col>
                </Row>
            </div>
             
        </Container>
    </div>
}