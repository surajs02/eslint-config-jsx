const add1 = x => ++x;
const firstLetter = (s = '') => s[0];
const sum = arr => arr.reduce((a, v) => a += v, 0);
const arrToStr = a => a.join(', ').trim();
const valuesO = o => Object.values(o);
const map = t => a => a.map(t);
const comp = (...fs) => x => fs.reverse().reduce((v, f) => f(v), x);

const nums = [1, 2, 3];
const words = {
    one: 'one',
    two: 'two',
    three: 'three',
};

console.debug(`nums=${arrToStr(nums)}`);
console.debug(`words=${valuesO(words)}`);
console.debug(`firstLetter=${comp(map(firstLetter), valuesO)(words)}`);
console.debug(`sum=${sum(nums)}`);
console.debug(`nums+1=${arrToStr(nums.map(add1))}`);

