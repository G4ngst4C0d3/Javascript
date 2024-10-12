import React from 'react';
import Header  from './Header';
import './App.css';


function App() {
  return (
    <div>
      <Header name="Daswag StreetWear" links={["Catálogo", "Comprar", "Contato", "Sobre nós"]}></Header>
      
    </div>
  ); 
}

export default App;
