import { useState } from 'react';
import Dice from './Dice'
import Button from './Button';

function random(n) {
    return Math.floor(Math.random() * n + 1);
}

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
    };

    const handleResetClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    }; 

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleResetClick}>처음부터</Button>
            </div>
            <div>
                <h2>나</h2>
                <Dice color='blue' num = {num}/>
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                <p>{gameHistory.join(", ")}</p>
            </div>
        </div>
    );
}

export default App;