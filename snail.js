// my version
snail = function(array) {
  let size = array[0].length
  let direction = 0
  let twice = -1
  let x=0
  let y=0
  let needSteps=size-1
  let steps=needSteps
  let res=[]
  for(let i=0;i<size**2;i++){
    res.push(array[y][x])
    if(steps==0){
      direction = (direction+1) %4
      twice+=1
      if(twice==2){
        twice=0
        needSteps-=1
      }
      steps = needSteps
    }
    if(direction==0) x+=1
    if(direction==1) y+=1
    if(direction==2) x-=1
    if(direction==3) y-=1
    steps-=1
  }
  return res
}
snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}
snail = function(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(snail([
  [1, 2, 3, 4, 5], 
  [6, 7, 8, 9, 10], 
  [11, 12, 13, 14, 15], 
  [16, 17, 18, 19, 20], 
  [21, 22, 23, 24, 25]
]))
// 1 way recurrent view 5*5 then 3*3, 1*1
// 1.1 take with array.shift for each line
// 1.2 take each element for other methods
// 2 way reccurent take 5*5 reverse 4*4 reverse 3*3 ...
// 3 way for 5*5 take for example 5,4,4,3,3,2,2,1,1 like the first program

