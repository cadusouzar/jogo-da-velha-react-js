import React from 'react';
import './App.css';
import Header from './Components/header'; 
import Tabuleiro from './Components/tabuleiro';
import Checkbox from './objects/Checkbox';
import Input from './objects/Input';

const App = () => {
  return(
      <main className='app'>
        <Header/>
        <Tabuleiro/>
        <Checkbox id="show" value="show" content = "Mostrar Eventos"/>
      </main>
  )
}

export default App;
