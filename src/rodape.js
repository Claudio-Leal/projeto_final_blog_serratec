import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';
import facebook from './img/icones/facebook.png';
import instagram from './img/icones/instagram.png';

class Footer extends Component {
    render() {
        return (
            <header className = 'App-footer'>
      <Container >        
        <Row className='assinatura'>
        <Col xs={4}></Col>
        <Col ><h1 className = "th">Entre em contato !</h1></Col>   
        <Col xs={4}></Col>
        </Row>  
              
        <Row>
         <Col xs={5}></Col>
         <Col id = "social"> <a target="_blank" href="https://www.facebook.com/"><img width="50" height="50"className="img-responsive img-circle center-block"src={facebook}alt="Fabebook" /></a></Col>
          <Col id = "social"><a target="_blank" href="https://www.instagram.com/?hl=pt-br/"><img width="50" height="50"className="img-responsive img-circle center-block"src={instagram}alt="Instagram" /> </a></Col>          
          <Col xs={5}></Col>
         
        </Row>            
      </Container>
    </header>  
    );
    }
    }

export default Footer;


