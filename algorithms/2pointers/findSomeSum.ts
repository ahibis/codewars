function findSomeSum(arr:number[], find:number){
  let start = 0;
  let end = arr.length - 1;
  while(start<end){
    const startVal = arr[start]
    const endVal = arr[end]
    const sum = startVal + endVal
    if(sum == find){
      return [startVal, endVal]
    }
    if(sum < find){
      start ++;
      continue;
    }
    end --;
  }
  return []
}
console.log(findSomeSum([-1,2,5,8],7))
console.log(findSomeSum([-3,-1,0,2,6],6))
console.log(findSomeSum([2,4,5],8))
console.log(findSomeSum([-2,-1,1,2],0))