import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Board from './components/Board';

function App() {
  const [gameDifficulty, setGameDifficulty] = useState([]);
  const [comOrPlayer, setComORPlayer] = useState([]);
  // const [comDifficulty, setComDifficulty] = useState([]);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [gameRunning, setGameRumming] = useState(false);

  const toggleGameRunning = () => {
    setGameRumming(current => !current);
  };

  const easyGame = () => {

  };
  const medGame = () => {

  };
  const hardGame = () => {

  };


  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
