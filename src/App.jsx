import { useState } from 'react';
import Dice from './Dice'
import Button from './Button';

function random(n) {
    return Math.floor(Math.random() * n + 1);
}

function App() {
    const [num, setNum] = useState(1);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
    };

    const handleResetClick = () => {
        setNum(1);
    };  

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleResetClick}>처음부터</Button>
            </div>
            <Dice color='blue' num = {num}/>
        </div>
    );
}

export default App;