import { useState } from 'react';
import Dice from './Dice'
import Button from './Button';
import ScoreBoard from './ScoreBoard';
import './App.css';
import diceGameLogo from './assets/logo.png'
import { useMemo } from 'react';


function random(n) {
    return Math.floor(Math.random() * n + 1);
}

function App() {
    const [gameHistory, setGameHistory] = useState([]);
    const [otherGameHistory, setOtherGameHistory] = useState([]);
    const gameHistorySum = useMemo(() => {
        return gameHistory.reduce((acc, cur) => acc + cur, 0);
    }, [gameHistory]);
    const otherGameHistorySum = useMemo(() => {
        return otherGameHistory.reduce((acc, cur) => acc + cur, 0);
    }, [otherGameHistory]);

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
                <div className="App-boards">
                    <ScoreBoard className="App-board" name="나" color="blue" gameHistory={gameHistory} sum={gameHistorySum} isWinner={gameHistorySum>otherGameHistorySum}/>
                    <ScoreBoard className="App-board" name="상대" color="red" gameHistory={otherGameHistory} sum={otherGameHistorySum} isWinner={gameHistorySum<otherGameHistorySum}/>
                </div>
            </div>
        </div>
    );
}

export default App;