import { useState } from 'react';
import logo from './ice-cubes.svg';
import './App.css';

// eslint-disable-next-line no-extend-native
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const people = [
  "André",
  "Breno",
  "Daniel",
  "Michel",
  "Thiago"
];

const questions = [
  "Há algo que você adora, mas que tem vergonha ou constrangimento de assumir?",
  "Qual era o seu medo mais incoerente/infantil/insensato no passado?",
  "Qual é o papel de parede que você está usando na tela do seu computador ou celular agora? Por que essa imagem?",
  "Descreva um dia na sua vida em que nada parecia dar certo"
]

function App() {
  const searchParams = new URLSearchParams(window.location.search)
  const teamName = searchParams.get('team')
  const [currentPerson, setCurrentPerson] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(`Quebra-Gelo${teamName ? ` de ${teamName}` : ''}`)
  
  const showRandomQuestion = () => {
    setCurrentPerson(people.random())
    setCurrentQuestion(questions.random())
  }

  return (
    <div className="App">
      <header className="App-header">
        {currentPerson || <img src={logo} className="App-logo" alt="logo" />}
        <p className={currentPerson ? 'question' : 'title'}>
          {currentQuestion}
        </p>
        <button className="App-link" onClick={showRandomQuestion}>
          {(currentPerson && "Próxima pergunta") || "Começar"}
        </button>
      </header>
    </div>
  );
}

export default App;
