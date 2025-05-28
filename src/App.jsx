import Dice from './Dice'
import Button from './Button';

function App() {
    return (
        <div>
            <div>
                <Button text="던지기"/>
                <Button text="처음부터"/>
            </div>
            <Dice color='blue' num = {2}/>
        </div>
    );
}

export default App;