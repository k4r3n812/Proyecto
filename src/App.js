import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Psico-Félix</h1>
      <table>
                 
                 <caption>Integrantes de Psico-Félix</caption>
                
                 <tr>
                     <th>Nombre</th>
                     <th>Apellido</th>
                     <th>Correo</th>
                     <th>Celular</th>
                 </tr>
                 <tr>
                     <td>Dayanna Patricia </td>
                     <td>Martínez Morelo</td>
                     <td>pdayanamartinez@gmail.com</td>
                     <td>3024552122</td>     
                </tr>
           
                <tr>
                 <td>Karen Alexandra </td>
                 <td>Gordon Duque</td>
                 <td>lexandra.gorodn29@gmail.com</td>
                 <td>3114637757</td>
               </tr>
           
               <tr>
                <td>Natacha Yanelis </td>
                <td>Fornier Ríos</td>
                <td>nathy20032003@gmail.com</td>
                <td>3116120971</td> 
                 </tr>
           
                 <tr>
                   <td>Santiago </td>
                   <td>Ríos Quintero</td>
                   <td>Sriosquintero80@gmail.com</td>
                   <td>3233566143</td>
                 </tr>
             </table>   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
