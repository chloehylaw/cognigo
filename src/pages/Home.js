import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import brain from '../images/brain.jpg';
import memory from '../images/memory.jpg';
import language from '../images/Language.jpg';
import Visual from '../images/Visual.jpg';
import attention from '../images/attention.jpg';
import './progress.css';
import {BsFill1CircleFill,BsFill2CircleFill, BsFill3CircleFill } from 'react-icons/bs'

export default function Home() {

    return <Container>
        <Row >
            <Col ><h1 className='text-center'>Welcome to CogniGo!</h1>
            <p style={{textAlign:'justify'}} > Cognitive rehabilitation therapy (CRT)
                is useful for people with cognitive impairments. However, 
                it can be difficult and time-consuming for patients.
                With CogniGo we can help to make you the best you can be. </p>
            
                <Button variant="dark" size='lg' href='http://localhost:3000/register'>Get started now</Button>

            </Col>
            <Col><img src={brain} style={{width:'20em'}}></img></Col>
            
            
            </Row>

            <h2 style={{textAlign:'left', marginBottom:'1em'}}>How to works!</h2>
            <Row style={{height:'10em', marginBottom:'6em'}}>
                <Col style={{textAlign:'left'}}><BsFill1CircleFill style={{fontSize:'300%', marginBottom:'0.2em'}}></BsFill1CircleFill><h3>Sign up to our app</h3> <p style={{opacity:0.85}}>Using the register page you can click on the button get started now</p></Col>
                <Col style={{textAlign:'left'}}><BsFill2CircleFill style={{fontSize:'300%', marginBottom:'0.2em'}}></BsFill2CircleFill><h3>Do The Challenges Daily</h3> <p style={{opacity:0.85}}>You can have a therapy assign you games or you can do it yourself, either visiting the Games Overview or the Daily Challenges page can help you improve your cogintive skills.</p></Col>
                <Col style={{textAlign:'left'}}><BsFill3CircleFill style={{fontSize:'300%', marginBottom:'0.2em'}}></BsFill3CircleFill><h3>Check your progession</h3> <p style={{opacity:0.85}}>By doing the games and daily challenges, you will be able to see how much you improved in your skill overtime!</p></Col>
            </Row>

        <h2 style={{marginBottom:'1em'}}>With us you can be treated to improve your</h2>
        <Row>
        <Col><Card >
        <Card.Img className='home' variant="top" src={memory} />
        <Card.Title style={{fontSize:'1.3em', opacity:'0.85'}}>Memory</Card.Title>
            </Card></Col>
            <Col><Card>
        <Card.Img className='home' variant="top" src={Visual}/>
        <Card.Title style={{fontSize:'1.3em', opacity:'0.85'}}>Visual-Spatial Reasoning</Card.Title>
            </Card></Col>
            <Col><Card>
        <Card.Img className='home' variant="top" src= {language}/>
        <Card.Title style={{fontSize:'1.3em', opacity:'0.85'}}>Language</Card.Title>
            </Card></Col>
            <Col><Card>
        <Card.Img className='home' variant="top" src={attention} />
        <Card.Title style={{fontSize:'1.3em', opacity:'0.85'}}>Attention</Card.Title>
            </Card></Col>

        </Row>

        <h2 style={{marginBottom:'0.75em', marginTop:'2em'}}>See more details about us</h2>
        <p>Skip the trouble and long clinics of Canada, instead use CogniGo. Improve cognitive skills in memory, 
            visual-spatial reasoning, language, and attention. Talk to your therapist whenever, see your progression and customise how the app looks with your own preferences </p>
            <Button variant="dark" size='lg' href='http://localhost:3000/aboutus'>See more about us</Button>
</Container>
}