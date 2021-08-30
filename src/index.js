import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Gente from './gente';
import Curiosidades from './curiosidades';
import Mestres from './mestres';
import Equipe from './equipe';
import Serratec from './serratec';
import Depoimentos from './depoimentos';
import DetalhePessoa from './DetalhePessoa';
import DetalheProfessor from './DetalheProfessor';
import Home from './home';
import Rodape from './rodape';

ReactDOM.render(
    <BrowserRouter>  
    <Home/>
      <Switch>                       
        <Route path = '/' exact = {true}>
          <App />
        </Route>        
        
        <Route path = '/gente'>
          <Gente />
        </Route>
        
        <Route path = '/curiosidades'>
          <Curiosidades />
        </Route>
        
        <Route path = '/mestres'>
          <Mestres />
        </Route>
        
        <Route path = '/equipe'>
          <Equipe />
        </Route>
        
        <Route path = '/serratec'>
          <Serratec />
        </Route> 
        
        <Route path = '/depoimentos'>
          <Depoimentos />
        </Route>  
        <Route path='/detalhe' exact component={DetalhePessoa} >
      <DetalhePessoa/>
      </Route>
      <Route path='/detalheprof' exact component={DetalheProfessor} >
      <DetalheProfessor/>
      </Route>
      </Switch>
      <Rodape/>
    </BrowserRouter>,  
  document.getElementById('root')
);


