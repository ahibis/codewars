
// function twoSum(nums: number[], target: number): number[] {
//   const numbers = nums.map((e,i)=>[e,i]).sort(([a],[b])=>a-b)
//   let left = 0
//   let right = numbers.length - 1

//   while(left < right){
//     const valLeft = numbers[left][0]
//     const valRight = numbers[right][0]

//     if(target - valLeft == valRight){
//       break;
//     }
//     if(target - valLeft < valRight){
//       right -= 1
//     }else{
//       left += 1
//     }
//   }

//   let res1 = numbers[left][1]
//   let res2 = numbers[right][1]
//   if(res1 > res2) [res1, res2] = [res2,res1]

//   return [res1, res2]
// };
function twoSum(numbers: number[], target: number): number[] {
  let x = 0
  let i = 1
  while( numbers[x] + numbers[i] !== target ){
      if( i== numbers.length ) {
          x++
          i=x   
      }
      i++    
  }
  return [x,i] 
}
console.log(twoSum([2,7,11,15],9))