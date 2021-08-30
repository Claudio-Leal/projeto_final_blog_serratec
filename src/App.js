import React, {Component} from 'react';
import logo from './img/icones/serratec_teams.png';
import gente from './img/icones/gente.png';
import curiosidades from './img/icones/curiosidades.png';
import mestres from './img/icones/mestres.png';
import equipe from './img/icones/equipe.png';
import serratec from './img/icones/serratec.png';
import depoimentos from './img/icones/depoimentos.png';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
  return (
    <header className = 'App-header'>
      <Container>        
        <Row>
          <Col></Col>
          <Col><img src={logo} className="App-logo" alt="logo" /></Col>
          <Col></Col>
        </Row>            
        <Row>        
          <Col xs={2} id = "efeito"><Link to = "/gente"><img id="icones" className="img-responsive img-thumbnail center-block" src={gente} alt="Gente"/></Link></Col>
          <Col xs={2} id = "efeito"><Link to = "/curiosidades"><img id="icones" className="img-responsive img-thumbnail center-block" src={curiosidades} alt="Curiosidades"/></Link></Col>
          <Col xs={2} id = "efeito"><Link to = "/mestres"><img id="icones" className="img-responsive img-thumbnail center-block" src={mestres} alt="Mestres"/></Link></Col>
          <Col xs={2} id = "efeito"><Link to = "/equipe"><img id="icones" className="img-responsive img-thumbnail center-block" src={equipe} alt="Equipe"/></Link></Col>
          <Col xs={2} id = "efeito"><Link to = "/serratec"><img id="icones" className="img-responsive img-thumbnail center-block" src={serratec} alt="Serratec"/></Link></Col>
          <Col xs={2} id = "efeito"><Link to = "/depoimentos"><img id="icones" className="img-responsive img-thumbnail center-block" src={depoimentos} alt="Gente"/></Link></Col>
        </Row>  
      </Container>
    </header>           
    );
  }
}
export default App;
