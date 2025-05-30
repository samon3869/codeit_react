import { useState } from 'react';
import Dice from './Dice'
import Button from './Button';
import ScoreBoard from './ScoreBoard';

function random(n) {
    return Math.floor(Math.random() * n + 1);
}

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);

        const nextOtherNum = random(6);
        setOtherNum(nextOtherNum);
        setOtherSum(otherSum + nextOtherNum);
        setOtherGameHistory([...otherGameHistory, nextOtherNum]);
    };

    const handleResetClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
        setOtherNum(1);
        setOtherSum(0);
        setOtherGameHistory([]);
    };

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleResetClick}>처음부터</Button>
            </div>
            <div>
                <ScoreBoard name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory} />
                <ScoreBoard name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
            </div>
        </div>
    );
}

export default App;