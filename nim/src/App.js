import './App.css';
import {useState} from 'react';
import Home from './components/Home';

function App() {
  const [gameDifficulty, setGameDifficulty] = useState([]);
  const [comOrPlayer, setComORPlayer] = useState([]);
  const [comDifficulty, setComDifficulty] = useState([]);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');


  return (
    <div className="App">
    </div>
  );
}

export default App;
