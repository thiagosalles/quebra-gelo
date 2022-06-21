import { useState } from 'react';
import logo from './ice-cubes.svg';
import './App.css';
import questions from './questions'
import people from './people'

// eslint-disable-next-line no-extend-native
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function App() {
  const searchParams = new URLSearchParams(window.location.search)
  const teamName = searchParams.get('team')
  const [currentPerson, setCurrentPerson] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(`Quebra-Gelo${teamName ? ` de ${teamName}` : ''}`)
  
  const showRandomQuestion = () => {
    let newPerson = null
    do {
      newPerson = people.random()
    } while (newPerson === currentPerson)
    setCurrentPerson(newPerson)

    let newQuestion = null
    do {
      newQuestion = questions.random()
    } while (newQuestion === currentQuestion)
    setCurrentQuestion(newQuestion)
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
