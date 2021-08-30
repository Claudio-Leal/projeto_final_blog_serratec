import React from 'react';
import './App.css';
import { Card, Col, Container, Image, Row} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import Professores from './professores';


export default function ListaPessoasUse() {    

    return (
        <header className = 'App-header'>
        <Container>
            <Row id = "alinhamento">
            { Professores.map(p => (
                <Col xs={6} md={4} key = {p.id}>
                    <Link to={ { pathname:'/detalheprof', state: { p } } }>
                        <Image src={p.foto} roundedCircle />
                    </Link>
                    <Card.Body>
                        <Card.Title>{ `${p.nome}`}</Card.Title>
                        <Card.Title>{ `${p.disciplina}`}</Card.Title>
                    </Card.Body>
                </Col>
            ))}
            </Row>
        </Container>
        </header>
    );
}