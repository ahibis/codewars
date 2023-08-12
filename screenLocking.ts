type Cord = [number, number];

const matrix = ["abc", "def", "ghi"];
const getLetter = (cord: Cord): string | undefined => {
  const line = matrix[cord[0]];
  return line ? line[cord[1]] : undefined;
};

const rotate = (cord: Cord): Cord => [-cord[1], cord[0]];
const getRotates = (cord: Cord) => {
  const r1 = rotate(cord);
  const r2 = rotate(r1);
  const r3 = rotate(r2);
  return [cord, r1, r2, r3];
};
const availableMoves = [
  ...getRotates([0, 1]),
  ...getRotates([1, 1]),
  ...getRotates([2, 1]),
  ...getRotates([2, -1]),
];
const availableMovesThrough = [...getRotates([0, 1]), ...getRotates([1, 1])];

const sumCords = (cord1: Cord, cord2: Cord): Cord => [
  cord1[0] + cord2[0],
  cord1[1] + cord2[1],
];
const double = (cord: Cord): Cord => [cord[0] * 2, cord[1] * 2];

function countPatterns(cord: Cord = [0, 0], length = 1, letters = new Set()) {
  letters.add(getLetter(cord));
  // console.log(letters)
  if (!length) return 1;
  let count = 0;
  availableMoves.forEach((move) => {
    const newCord = sumCords(cord, move);
    const letter = getLetter(newCord);
    if (letter && !letters.has(letter)) {
      count += countPatterns(newCord, length - 1, letters);
      letters.delete(letter);
    }
  });
  availableMovesThrough.forEach((move) => {
    const letterCheck = getLetter(sumCords(cord, move));
    const newCord = sumCords(cord, double(move));
    const letter = getLetter(newCord);
    if (letter && !letters.has(letter) && letters.has(letterCheck)) {
      count += countPatterns(newCord, length - 1, letters);
      letters.delete(letter);
    }
  });
  return count;
}
// console.log(countPatterns([1,1],3))
const letters: number[] = [];
for (let i = 0; i < 9; i += 1) {
  const value = countPatterns([1, 1], i);
  letters.push(value);
}
console.log(letters);

const letters1: number[] = [0, 1, 5, 31, 154, 684, 2516, 7104, 13792, 13792];
const letters2: number[] = [0, 1, 7, 37, 188, 816, 2926, 8118, 15564, 15564];
const letters3: number[] = [0, 1, 8, 48, 256, 1152, 4248, 12024, 23280, 23280];
const lettersToCount: { [a: string]: number[] } = {
  A: letters1,
  B: letters2,
  C: letters1,
  D: letters2,
  E: letters3,
  F: letters2,
  G: letters1,
  H: letters2,
  I: letters1,
};

function calculateCombinations(startPosition: string, patternLength: number): number {
  if(length>9) return 0;
  return lettersToCount[startPosition][patternLength]
}
//console.log(countPatternsFrom("A",2))
