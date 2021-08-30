import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';
import equipe from './img/serratec/equipe.png';
import equipeImg from './img/icones/equipe.svg';
import equipeVideo from './serratec2020.mp4';


class Equipe extends Component {
  render() {
  return (
    <header className = 'App-header'>
      <Container>        
        <Row>
            <h1><img src={equipeImg} width="80" height="80"/>Equipe</h1>
        </Row>        
        <Row>
          <Col xs={5}><video width="100%" height="100%" controls="100%" src={equipeVideo} type="Video/mp4"></video></Col>
          <Col xs={7}><img width="650px" height="325px"className="img-responsive img-circle center-block"src={equipe}alt="Equipe Teams" /></Col>          
        </Row>            
      </Container>
    </header>  
    );
  }
}
export default Equipe;
