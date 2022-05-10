//https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
let Romans = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
let RomansInverse = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const RomanNumerals = {
  toRoman(number) {
    let res = "";
    let k = 1;
    while (number > 0) {
      let digit = number % 10;
      let RomanDigit = "";
      if (digit == 4) RomanDigit = Romans[k] + Romans[k * 5];
      if (digit == 9) RomanDigit = Romans[k] + Romans[k * 10];
      else if (digit > 4) {
        RomanDigit = Romans[k * 5];
        digit -= 5;
      }
      if (digit < 4) RomanDigit = RomanDigit + Romans[k].repeat(digit);
      res = RomanDigit + res;
      number = Math.floor(number / 10);
      k *= 10;
    }
    return res;
  },
  fromRoman(string) {
    let res = 0;
    string.split("").forEach((e, i) => {
      let number = RomansInverse[e];
      if (i + 1 != string.length)
        if (RomansInverse[string[i + 1]] > number) number *= -1;
      res += number;
    });
    return res;
  },
};
console.log(RomanNumerals.toRoman(1000));
console.log(RomanNumerals.toRoman(1990));
console.log(RomanNumerals.toRoman(2008));
console.log(RomanNumerals.toRoman(4));

console.log(RomanNumerals.fromRoman('XXI'));
console.log(RomanNumerals.fromRoman('MMVIII'));
console.log(RomanNumerals.fromRoman('IV'));
console.log(RomanNumerals.fromRoman('MDCLXVI'));


