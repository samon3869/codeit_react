import diceblue01 from './assets/dice-blue-1.svg'
import diceblue02 from './assets/dice-blue-2.svg'
import diceblue03 from './assets/dice-blue-3.svg'
import diceblue04 from './assets/dice-blue-4.svg'
import diceblue05 from './assets/dice-blue-5.svg'
import diceblue06 from './assets/dice-blue-6.svg'
import dicered01 from './assets/dice-red-1.svg'
import dicered02 from './assets/dice-red-2.svg'
import dicered03 from './assets/dice-red-3.svg'
import dicered04 from './assets/dice-red-4.svg'
import dicered05 from './assets/dice-red-5.svg'
import dicered06 from './assets/dice-red-6.svg'

const DICE_IMAGES = {
    blue: [diceblue01, diceblue02, diceblue03, diceblue04, diceblue05, diceblue06], 
    red: [dicered01, dicered02, dicered03, dicered04, dicered05, dicered06]
}

function Dice({color = 'red', num = 1}) {
    const src = DICE_IMAGES[color][num-1]
    const alt = `${color} 주사위 ${num}번`
    return <img src={src} alt={alt}/>;
}

export default Dice;