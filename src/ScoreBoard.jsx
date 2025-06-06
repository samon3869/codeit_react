import Dice from './Dice';
import './ScoreBoard.css';

function ScoreBoard({ name, color, gameHistory, className='', sum, isWinner='' }) {
    const num = gameHistory.length > 0 ? gameHistory[gameHistory.length - 1] : 1;
    const classNames = `Board ${className} ${isWinner ? 'Board-winner': ''}`;
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
