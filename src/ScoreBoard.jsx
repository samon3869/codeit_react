import Dice from './Dice';
import './ScoreBoard.css';

function ScoreBoard({ name, color, gameHistory, className='' }) {
    const num = gameHistory.length > 0 ? gameHistory[gameHistory.length - 1] : 1;
    const sum = gameHistory.reduce((acc, cur) => acc + cur, 0);
    const classNames = `Board ${className}`;
    return (
        <div className={classNames}>
            <h2 className="Board-heading">{name}</h2>
            <Dice color={color} num={num} />
            <h2 className="Board-heading">총점</h2>
            <p>{sum}</p>
            <h2 className="Board-heading">기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    );
}

export default ScoreBoard;
