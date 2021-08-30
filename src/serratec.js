import React, {Component} from 'react';
import Serratec2 from './img/serratec/serratec_2.jpg';
import SerratecIcone from './img/icones/serratec.svg';
import Serratec4 from './img/serratec/serratec_4.jpg';
import Turma from './img/alunos/Turma 10 Banco de Dados.jpg';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';

class Serratec extends Component {
  render() {
  return (
    
    <header className = 'App-header'>
      <Container>
        <Row id='s'>
         <Col><h1><span><img id="imagem-topo" src={SerratecIcone} width="80" height="80"/>
          </span>Serratec</h1></Col>
        <hr></hr>
        </Row>  
          
        <h5 className="text-uppercase"><strong>Sobre o Parque Tecnológico Serratec</strong></h5>
        <Row id='s'>
        <Col xs={4}><img src={Serratec2} alt="Empresa Serratec" width="600" height="600" class="img-thumbnail"/></Col>
        <Col xs={8}><p className="text-justify">O maior parque tecnológico do interior do Estado do Rio de Janeiro, 
              o Parque Serratec - Tecnológico Região Serrana 
              é a união do setor de tecnologia das três principais cidades da Região Serrana 
              Fluminense: Petrópolis, Teresópolis e Nova Friburgo,
              sendo que cada uma destas cidades constitui um pilar do Serratec,
              único parque tecnológico no Brasil que não está confinado
              numa área delimitada, e ser de âmbito regional. No setor de TIC
              as 3 cidades juntas contam com cerca de 170 empresas,
              empregando mais de 3 mil funcionários, com um faturamento de
              R$ 585 milhões anuais. Todas as empresas trabalham na produção
              de software, de novas tecnologias, em projetos de inovação e
              com pesquisa e desenvolvimento. 
            </p></Col>
            </Row>

          
          
        <h5 className="text-uppercase"><strong>Laboratório Nacional de Computação Científica</strong></h5>
        <Row id='s'>
        <Col xs={4}><img src={Serratec4} alt="Empresa Serratec" width="800" height="400" class="img-thumbnail"/></Col>
        <Col xs={8}><p className="text-justify">
                Computação Científica – LNCC, que abriga o
                supercomputador mais rápido da América Latina, o Santos Dumont,
                capaz de fazer 1,1 trilhão de operações de soma
                ou subtração por segundo. A sede do laboratório está localizada
                em Petrópolis, Região Serrana do Rio de Janeiro.</p></Col>
            </Row>

   
            <h5 className="text-uppercase"><strong>Sobre o projeto Serratec</strong></h5>
        <Row id='s'>
        <Col><p className="text-justify">
        Com o aumento da demanda de desenvolvimento de sistemas,
        o Serratec e seus parceiros desenharam um Programa de Residência de
        Software focado em Web, Mobile, Nuvem, Telecom e afins. A iniciativa visa suprir a demanda de profissionais capacitados para os
        empreendimentos que já atuam na região e atrair novas empresas.
        
        A Residência de Software é uma imersão que mistura o
        conhecimento teórico com a prática, para preparar
        profissionais no desenvolvimento de softwares. O residente participa
        de experiências diretas, como se estivesse dentro da empresa, com tutores,
        mentores e problemas reais a serem resolvidos.</p></Col>
            </Row>

            <h5 className="text-uppercase"><strong>Sobre a Seleção dos Residentes</strong></h5>
        <Row id='s'>
        <Col><p className="text-justify">
        As inscrições para a residência poderiam ser feitas até dia 31 de Janeiro de 2020.
        O programa recebia inscrições dos interessados das cidades de Petrópolis e Teresópolis;
        foram ao todo 3535 inscritos para o processo seletivo do curso "Programa Residência de
         Software" do Serratec e 2.608 pré-selecionados. As etapas seguintes foram todas
        eliminatórias e a primeira delas, foi a trilha de qualificação, onde o candidato
        deveria apresentar um aproveitamento de 100%. Quem atingisse esta marca, seria
        classificado para próxima etapa.</p></Col>
            </Row>

            <h5 className="text-uppercase"><strong>As outras etapas foram:</strong></h5>
        <Row id='s'>
            <Col classeName='se'>
              
                      <ol>Prova Online</ol>
                      <ol>Prova Presencial</ol>
                      <ol>Entrevista</ol>
                      <ol>Dinâmica de grupo</ol>


                      <p className="text-justify">
                    O início das aulas estava previsto para o dia 17 de março de 2020, mas
                    seguindo as recomendações da OMS e protocólo adotado pelo Governo do Estado
                    do Rio de Janeiro para prevenção e combate ao Novo Coronavírus 
                    as aulas foram adiadas sem uma data definida.
                    Até que uma nova data para início das aulas fosse oficialmente definida, foram sugeridos alguns
                    onteúdos para nos familiarizarmos com os termos, conceitos e noções gerais para se tornar um
                  programador. Foi criado um ambiente de sala de aula virtual (Google Classroom) para que
                  pudéssemos compartilhar conteúdos e comunicação.</p>
        
                  </Col>
                  </Row>
                  

            <h5 className="text-uppercase"><strong>Início das aulas online</strong></h5>
        <Row id='s'>
        <Col><p className="text-justify">
        Inicialmente as aulas seriam na modalidade presencial, mas por conta das recomendações da OMS e
              protocólos adotados pelo Governo do Estado do Rio de Janeiro para prevenção e combate do Novo Coranavírus, 
              as aulas se iniciaram no dia 06 de julho de 2020. Estávamos todos ansiosos e cheios de expectativas.
              Éramos 74 alunos em <a target="_blank" href="https://www.google.com/maps/place/Teres%C3%B3polis+-+RJ/@-22.2971211,-43.0194186,11z/data=!3m1!4b1!4m5!3m4!1s0x9847e1ddc05303:0xea9ad59ed5709c35!8m2!3d-22.4178833!4d-42.9732217"> Teresópolis </a>e fomos divididos em 2 turmas: turma 09 e turma 10.</p></Col>
            </Row>

            <h5 className="text-uppercase"><strong>Fazemos parte da turma 10</strong></h5>
      <Row id='s'>
                <Col xs={5}><img src={Turma} alt="Empresa Serratec" width="600" height="300" class="img-thumbnail"/></Col>
        <Col xs={7}><p className="text-justify">
        Iniciamos com 37 alunos na nossa turma, mas infelizmente alguns desistiram pelo caminho, como
    por exemplo, o Cesar, que era extremamente engraçado, sempre tinha sons que nos representava em
    aula - como o som do grilo quando todos ficavam quietos ou o som de erro do Windows quando o
    conteúdo estava muito complicado; E o Douglas, que era um rapaz muito esforçado e focado, mas
    por conta de problemas pessoais teve que deixar o curso.</p>
    <p>Hoje, somos 32 alunos, com histórias, conhecimentos e vidas diferentes umas das outras, mas
    todos temos algo em comum: a vontade de aprender, crescer e se tornar um excelente profissional
    na área de programação e juntos eu tenho certeza que vamos conseguir!</p></Col>
            </Row>
           
</Container>  
    </header>           
    );
  }
}
export default Serratec;
