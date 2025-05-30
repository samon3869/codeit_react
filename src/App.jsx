import { useState } from 'react';
import Dice from './Dice'
import Button from './Button';
import ScoreBoard from './ScoreBoard';

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
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleResetClick}>처음부터</Button>
            </div>
            <div>
                <ScoreBoard name="나" color="blue" gameHistory={gameHistory} />
                <ScoreBoard name="상대" color="red" gameHistory={otherGameHistory} />
            </div>
        </div>
    );
}

export default App;