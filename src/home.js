import React, {Component} from 'react';
import './App.css';

class HomePage extends Component {
    render() {
        return (
  <ul id = "h">
  <li><a className="active" href="http://localhost:3000/">Home</a></li>
  <li><a href="/gente">Gente</a></li>
  <li><a href="/curiosidades">Curiosidades</a></li>
  <li><a href="/mestres">Mestres</a></li>
  <li><a href="/equipe">Equipe</a></li>
  <li><a href="/serratec">Serratec</a></li>
  <li><a href="/depoimentos">Depoimentos</a></li>
  </ul>
 )}
}

export default HomePage
