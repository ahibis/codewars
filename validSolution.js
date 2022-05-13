//https://www.codewars.com/kata/529bf0e9bdf7657179000008
function validSolution(board){
  const linesCheck = board.map(
    e=>e.sort().reduce((last,e)=>e==last+1?e:last,0)
  )
  let boardReverse = (new Array(9))
  .fill(new Array(9).fill(0))
  .map((line,y)=>line
  .map(((v,x)=>board[y][x])))
  const columnCheck = boardReverse.map(
    e=>e.sort().reduce((last,e)=>e==last+1?e:last,0)
  )
  return [linesCheck, columnCheck]
}
console.log(validSolution([
  [1, 3, 4, 6, 7, 8, 9, 1, 2], 
  [1, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [1, 5, 9, 7, 6, 1, 4, 2, 3],
  [1, 2, 6, 8, 5, 3, 7, 9, 1],
  [1, 1, 3, 9, 2, 4, 8, 5, 6],
  [1, 6, 1, 5, 3, 7, 2, 8, 4],
  [1, 8, 7, 4, 1, 9, 6, 3, 5],
  [1, 4, 5, 2, 8, 6, 1, 7, 9]]))