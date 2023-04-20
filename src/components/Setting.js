import Card from 'react-bootstrap/Card'
import { BsArrowRight, BsFillPersonFill,BsLockFill,BsFillBellFill, BsArrowLeftRight, BsFileEarmarkFontFill, BsLightbulbFill, BsFillQuestionCircleFill } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Setting() {
    return <Container>
     <Card style={{ marginLeft:'7em', marginRight:'7em', marginTop:'2em', textAlign:'center'}}>
        <Card.Title style={{fontSize:'2em', marginTop:'0.2em'}}>Settings</Card.Title>
<Row style={{marginBottom:'1em', marginTop:'1em'}}>
    <Col style={{marginLeft:'1em', textAlign:'left', fontSize:'150%', fontWeight:'bold'}}>Account</Col>
    <Col></Col>
</Row>       
<Row style={{marginBottom:'1em', marginTop:'1em'}}>
    <Col style={{marginLeft:'1em', textAlign:'left', fontSize:'130%'}}><BsFillPersonFill style={{marginRight:'1em'}}></BsFillPersonFill>Profile</Col>
    <Col style={{textAlign:'right', marginRight:'1em'}}><BsArrowRight style={{fontSize:'150%'}}></BsArrowRight></Col>
</Row>
<Row style={{marginBottom:'1em', marginTop:'1em'}}>
    <Col style={{marginLeft:'1em', textAlign:'left', fontSize:'130%'}}><BsLockFill style={{marginRight:'1em'}}></BsLockFill>Password</Col>
    <Col style={{textAlign:'right', marginRight:'1em'}}><BsArrowRight style={{fontSize:'150%'}}></BsArrowRight></Col>
</Row>
<Row style={{marginBottom:'1em', marginTop:'1em'}}>
    <Col style={{marginLeft:'1em', textAlign:'left', fontSize:'130%'}}><BsFillBellFill style={{marginRight:'1em'}}></BsFillBellFill>Notifications</Col>
    <Col style={{textAlign:'right', marginRight:'1em'}}><BsArrowRight style={{fontSize:'150%'}}></BsArrowRight></Col>
</Row>
<Row style={{marginBottom:'1em', marginTop:'1em'}}>
    <Col style={{marginLeft:'1em', textAlign:'left', fontSize:'130%'}}><BsArrowLeftRight style={{marginRight:'1em'}}></BsArrowLeftRight>Paired Therapist</Col>
    <Col style={{textAlign:'right', marginRight:'1em'}}><BsArrowRight style={{fontSize:'150%'}}></BsArrowRight></Col>
</Row>
<Row style={{marginBottom:'1em', marginTop:'1em'}}>
    <Col style={{marginLeft:'1em', textAlign:'left', fontSize:'150%', fontWeight:'bold'}}>Preferences</Col>
    <Col></Col>
</Row>       
<Row style={{marginBottom:'1em', marginTop:'1em'}}>
    <Col style={{marginLeft:'1em', textAlign:'left', fontSize:'130%'}}><BsFileEarmarkFontFill style={{marginRight:'1em'}}></BsFileEarmarkFontFill>Font Selection</Col>
    <Col style={{textAlign:'right', marginRight:'1em'}}><BsArrowRight style={{fontSize:'150%'}}></BsArrowRight></Col>
</Row>
<Row style={{marginBottom:'1em', marginTop:'1em'}}>
    <Col style={{marginLeft:'1em', textAlign:'left', fontSize:'130%'}}><BsLightbulbFill style={{marginRight:'1em'}}></BsLightbulbFill>Dark/Light Color Theme</Col>
    <Col style={{textAlign:'right', marginRight:'1em'}}><BsArrowRight style={{fontSize:'150%'}}></BsArrowRight></Col>
</Row>
<Row style={{marginBottom:'1em', marginTop:'1em'}}>
    <Col style={{marginLeft:'1em', textAlign:'left', fontSize:'130%'}}><BsFillQuestionCircleFill style={{marginRight:'1em'}}></BsFillQuestionCircleFill>Help</Col>
    <Col style={{textAlign:'right', marginRight:'1em'}}><BsArrowRight style={{fontSize:'150%'}}></BsArrowRight></Col>
</Row>

    </Card>
    
    
    </Container>
}