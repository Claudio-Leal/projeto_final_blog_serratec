import React, {useState} from 'react'
import './App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

function Depoimentos (){

let [nome] = useState();
let [email] = useState();
let [classificacao] = useState();
let [depoimento] = useState();


    const handleEnvio = (event) => {
        event.preventDefault();
        console.log('envio')
    }

    const handleChange = (event) => {
   let campo = event.target;
   let novo = {
       [campo.id]: campo.value
   }

        console.log('Nova Informação', novo)
        console.log('state', nome)
    }
    
    return (  
                <header className = 'App-header'>
                <Container>               
                <Row>                    
                    <h1 id = 'depoimentoA'> <strong>Deixe seu depoimento!</strong></h1>                    
                </Row>
                
                <form action = '/action_page.php' onSubmit= {handleEnvio}>
                <Row>
                    <Col xs={2}><label htmlFor = "nome"><strong>Nome</strong></label></Col>
                    <Col xs={10}><input type="text" id = "nome" value={nome} onChange= {handleChange}></input></Col>                
                </Row>            
                <Row>
                    <Col xs={2}><label htmlFor='email'><strong>E-mail</strong></label></Col>
                    <Col xs={10}><input type="email" id = "email" value={email} onChange= {handleChange}></input></Col>                
                </Row>            

                <Row>
                    <Col xs={2}><label htmlFor = "classificacao"><strong>Classificação</strong></label></Col>
                    <Col xs={10}><select type = "text" id= "classificacao" value={classificacao} onChange= {handleChange}>
                                <option value = "classificacao">Escolha uma Classificação</option>
                                <option value = "Uma estrela"> Uma estrela</option>
                                <option value = "Duas estrelas"> Duas estrelas</option>
                                <option value = "Três estrelas"> Três estrelas</option>
                                <option value = "Quatro estrelas"> Quatro estrelas</option>
                                <option value = "Cinco estrelas"> Cinco estrelas</option>
                                </select></Col>                
                </Row>
                <Row>
                    <Col><label htmlFor = "depoimento"><strong>Depoimentos</strong></label></Col>                
                </Row>            

                <Row>                
                    <Col><input type="text" id = "depoimento" value={depoimento} onChange= {handleChange}></input></Col>                                
                </Row>            
                <Row>                                
                    <Col xs={11}></Col>
                    <Col xs= {1} id= "enviar"><Button type = "submit">Enviar</Button></Col>             
                </Row>                             
                </form>
                </Container>
                </header>
            )
    }
            
            export default Depoimentos;  
            
            
            
            
            
            
            
                
                    
                
                
                
                    
                
             
             
             
             
             
             




    








