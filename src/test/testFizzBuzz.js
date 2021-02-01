const FIZZ_BUZZ_WORDS = {
    fizzBuzz: 'fizzBuzz',
    fizz: 'fizz',
    buzz: 'buzz',
};
// Numerically ordered map capable of extending the classic fizzBuzz divisors, (e.g., even numbers map to 'Fuzz').
const DIVISOR_WORDS = new Map([
    [15, FIZZ_BUZZ_WORDS.fizzBuzz],
    [3, FIZZ_BUZZ_WORDS.fizz],
    [5, FIZZ_BUZZ_WORDS.buzz],
    [2, 'fuzz'],
]);

const toDivisorWord = n => [
    DIVISOR_WORDS.get([...DIVISOR_WORDS.keys()].find(k => n % Number(k) === 0)),
    n,
].find(v => v != null);
const toDivisorWords = (lo = 1, hi = 100) => [...Array(hi).keys()]
    .map(v => v + lo)
    .reduce((a, v) => a.concat({ number: v, word: toDivisorWord(v) }), []);
const getFizzBuzzWords = (lo, hi) => toDivisorWords(lo, hi)
    .filter(({ number, word }) => Object.values(FIZZ_BUZZ_WORDS).includes(word) || typeof number === 'number');
const getFizzBuzzStr = (lo, hi) => getFizzBuzzWords(lo, hi).reduce((a, { number, word }) => a += `${word || number}\n`, '');

console.debug(getFizzBuzzStr());
