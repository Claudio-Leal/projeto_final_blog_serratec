import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';
import equipe from './img/serratec/equipe.png';
import curiosidadesImg from './img/icones/curiosidades.svg';
import curiosidadesVideo from './curiosidades.mp4';


class Curiosidades extends Component {
  render() {
  return (
    <header className = 'App-header'>
      <Container>        
        <Row>
            <h1><img src={curiosidadesImg} width="80" height="80"/>Curiosidades</h1>
        </Row>        
        <Row>
          <Col xs={5}><video width="100%" height="100%" controls="100%" src={curiosidadesVideo} type="Video/mp4"></video></Col>
          <Col xs={7}><img width="650px" height="325px"class="img-responsive img-circle center-block"src={equipe}alt="Equipe" /></Col>          
        </Row>            
      </Container>
    </header>  
    );
  }
}
export default Curiosidades;

