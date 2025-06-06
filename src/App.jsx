import { useState } from 'react';
import Dice from './Dice'
import Button from './Button';
import ScoreBoard from './ScoreBoard';
import './App.css';
import diceGameLogo from './assets/logo.png'


function random(n) {
    return Math.floor(Math.random() * n + 1);
}

function App() {
    const [gameHistory, setGameHistory] = useState([]);
    const [otherGameHistory, setOtherGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        const nextOtherNum = random(6);
        setGameHistory([...gameHistory, nextNum]);
        setOtherGameHistory([...otherGameHistory, nextOtherNum]);
    };

    const handleResetClick = () => {
        setGameHistory([]);
        setOtherGameHistory([]);
    };

    return (
        <div className="App">
            <div>
                <img className="App-logo" src = {diceGameLogo} alt="주사위게임 로고" />
                <h1 className="App-title"> 주사위게임 </h1>
                <div>
                    <Button className="App-button" color='blue' onClick={handleRollClick}>던지기</Button>
                    <Button className="App-button" color='red' onClick={handleResetClick}>처음부터</Button>
                </div>
                <div>
                    <ScoreBoard name="나" color="blue" gameHistory={gameHistory} />
                    <ScoreBoard name="상대" color="red" gameHistory={otherGameHistory} />
                </div>
            </div>
        </div>
    );
}

export default App;