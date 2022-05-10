// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  const lettersCounts = {};
  const sList = [...s];
  sList.forEach((e) => {
    e = e.toLowerCase();
    return lettersCounts[e] ? (lettersCounts[e] += 1) : (lettersCounts[e] = 1);
  });
  for (let e of sList) {
    if (lettersCounts[e.toLowerCase()] == 1) return e;
  }
  return "";
}
console.log(firstNonRepeatingLetter("sTreSs"));
