import { suma } from './components/sum.js';
import { multiply as daugyba} from './components/multiply.js';
import { matematika} from './components/matematika.js';


const rez1lt = matematika.sudeti(8, 5);
const rez2lt = matematika.atimti(8, 5);
const rez3lt = matematika.sudauginti(8, 5);
const rez4lt = matematika.dalinti(8, 5);

const rez1en = matematika.sudeti(8, 5);
const rez2en = matematika.atimti(8, 5);
const rez3en = matematika.sudauginti(8, 5);
const rez4en = matematika.dalinti(8, 5);


console.log(rez1lt);
console.log(rez2lt);
console.log(rez3lt);
console.log(rez4lt);

console.log(rez1en);
console.log(rez2en);
console.log(rez3en);
console.log(rez4en);
