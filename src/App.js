import React from 'react'
import './App.css';
import Ohiologo from './Assets/image/ohio_state_buckeyes.png';
import GeorgiaLogo from './Assets/image/georgia-state-university-logo.png';
import washingtonLogo from './Assets/image/Washington-State-University-Pullman-472B0937.jpg';
import FloridaLogo from './Assets/image/florida-state-university-62.jpeg';
import Game from './component/game/Game.js';


  function App(props) {
    const Ohio = {
      name: 'ohio State ',
      logoSrc: Ohiologo
    }
  
    const Georgia = {
      name: 'Georgia State',
      logoSrc: GeorgiaLogo
    }
  
    const washington = {
      name: 'Washington State',
      logoSrc: washingtonLogo
    }
  
    const Florida = {
      name: 'Florida State',
      logoSrc: FloridaLogo
    }
  
    return (
      <div className="App">
        <Game
          venue="Ohio State Studiom"
          homeTeam={Ohio}
          visitingTeam={Georgia}
        />
        <Game
          venue="Apple Studiom"
          homeTeam={washington}
          visitingTeam={Florida}
        />
      </div>
    )
  }


export default App;