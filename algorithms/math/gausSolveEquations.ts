function gausSolveEquations(matrix: number[][]) {
  function changeLine(
    lineIndex: number,
    func: (item: number, index: number) => number
  ) {
    const line = matrix[lineIndex];
    for (let i in line) {
      line[i] = func(line[i], +i);
    }
  }

  function findValidLine(index: number) {
    for (let i in matrix) {
      if (matrix[i][index]) return +i;
    }
    return -1;
  }

  function addLine(lineIndex1: number, lineIndex2: number) {
    changeLine(lineIndex1, (val, i) => val + matrix[lineIndex2][i]);
  }

  function subLineSmart(lineIndex1: number, lineIndex2: number) {
    const param = matrix[lineIndex1][lineIndex2];
    changeLine(lineIndex1, (val, i) => val - matrix[lineIndex2][i] * param);
    //if (matrix[lineIndex1].every((v,i) =>matrix[lineIndex1].length -1 == i || (v == 0))) throw Error("");
  }

  function simplifyLine(index: number) {
    const val = matrix[index][index];
    if (!val) {
      const validLine = findValidLine(index);
      if (!~validLine) {
        throw Error("не удалось упростить");
      }
      addLine(index, validLine);
    }
    changeLine(index, (v) => v / val);
  }

  for (let i in matrix) {
    const index = +i;
    try {
      simplifyLine(index);

      for (let k in matrix) {
        if (k == i) continue;
        subLineSmart(+k, index);
      }
    } catch (e) {
      return undefined;
    }
  }
  if(isNaN(matrix[0][0])) return undefined;
  return matrix;
}
// console.log(
//   gausSolveEquations([
//     [1, 2, 1, 8],
//     [2, 1, 2, 10],
//     [2, 1, 0, 4],
//   ])
// );
console.log(
  gausSolveEquations([
    [2, 1, 2, 10],
    [2, 1, 3, 10],
    [2, 1, 0, 4],
  ])
);
