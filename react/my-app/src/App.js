import React from 'react';
import Header  from './Header';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Header name="Daswag StreetWear" links={["Catálogo", "Comprar", "Contato", "Sobre nós"]}></Header>
      <Counter></Counter>
    </div>
  ); 
}

export default App;
