const field = [
  [0, 2, 4, 8],
  [0, 0, 0, 0],
  [0, 2, 2, 8],
  [0, 2, 2, 2],
]; 
function lineShift(line){ // 2 0 2 4 -> 0 0 4 4, 2 4 0 4 -> 0 0 2 8
  const size = line.length;
  for(let i = size-1; i>-1; i-=1){
    let index = i;
    for(let k = i+1; k < size; k+=1){
      if(line[k] == line[i] || line[k] == 0){
        index = k
      }else{
        break
      }
    }
    if(i!=index){
      line[index] = line[i] + line[index]
      line[i] = 0
    }
  }
  return line
}

function transpose(field){ // транспонирование матрицы  0 1 ; 2 3 -> 0 2 ; 1 3
  const size = field.length
  for(let i = 0; i < size; i++){
    for (let k = 0; k < size; k++) {
      if(i<k){
        [field[i][k],field[k][i]] =  [field[k][i],field[i][k]]
      }
    }
  }
  return field
}
function eventExecute(field, moveType) {
  if(moveType == "R")
    field.map(line=>lineShift(line));
  if(moveType == "L")
    field.map(line=>lineShift(line.reverse()).reverse())
  if(moveType == "D")
    transpose(transpose(field).map(line=>lineShift(line)))
  if(moveType == "U")
    transpose(transpose(field).map(line=>lineShift(line.reverse()).reverse()))
}
function solution(field, moves) {
  const moveTypes = moves.split(" ");
  moveTypes.forEach((moveType) => eventExecute(field, moveType));
  return field;
}

const moves = "U U U";
console.log(solution(field, moves));
