import React from 'react';
import { useLocation} from 'react-router-dom';
import {
    Card,
    Col,
    Container,
    Image,
    Row
} from  'react-bootstrap';
 
    export default function DetalheProf () {
      const location = useLocation ();
      const {foto, nome, disciplina, texto} = location.state.p


      return (
            <header className = 'App-header'>
            <Container>
            <Row id = "alinhamento">
                <Col></Col>
               <Col xs = {6}>
                    <Image src={foto} roundedCircle />
                     <Card.Body>
                        <Card.Title>{ `${nome}`}</Card.Title>
                        <Card.Title>{ `${disciplina}`}</Card.Title>
                      <p><strong>{texto}</strong></p>
                    </Card.Body>
                 </Col>
                 <Col></Col>
           </Row>
        </Container>
        
            </header>
        );
        } 



