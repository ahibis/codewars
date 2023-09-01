type Vector = [number, number];
const rotate = (cord: Vector): Vector => [cord[1], -cord[0]];
const vecSum = (vec1: Vector, vec2: Vector): Vector => [
  vec1[0] + vec2[0],
  vec1[1] + vec2[1],
];

function drawSpiral(
  spiralSize: number,
  startPos: Vector | undefined = undefined
) {
  const matrix = new Array(spiralSize)
    .fill(null)
    .map(() => new Array(spiralSize).fill(null));
  let brushPos: Vector = startPos || [
    ~~(spiralSize / 2),
    ~~(spiralSize / 2),
  ];

  const setValue = ([x, y]: Vector, val: number) => (matrix[x][y] = val);
  const getValue = ([x, y]: Vector) => matrix[x][y];
  const isValidPos = (pos: Vector) => typeof getValue(pos) != "undefined";

  let direction: Vector = [0, 1];
  let nextDirection = rotate(direction);
  let value = 0;
  while (true) {
    if (!isValidPos(brushPos)) break;
    setValue(brushPos, value);

    brushPos = vecSum(brushPos, direction);
    const nextDirectionIsAvailable =
      getValue(vecSum(brushPos, nextDirection)) == null;
    if (nextDirectionIsAvailable) {
      direction = nextDirection;
      nextDirection = rotate(nextDirection);
    }
    value += 1;
  }
  return matrix;
}
console.log(drawSpiral(5))

function drawText(size: number, text: string) {
  return drawSpiral(size)
    .map((line) => line.map((e) => text[e] || " ").join(""))
    .join("\n");
}
