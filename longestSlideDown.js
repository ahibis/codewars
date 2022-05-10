//https://www.codewars.com/kata/551f23362ff852e2ab000037/train/javascript
const max = (a,b) => (a > b ? a : b);
function longestSlideDown(pyramid) {
  return pyramid.reverse().reduce((arr, v) => {
    if (!arr) return v;
    return v.map((e, i) => max(e + arr[i], e + arr[i + 1]));
  }, 0)[0];
}
function longestSlideDownBest (pyramid) {
  return pyramid.reduceRight((last,current)=>current.map(
    (v,i)=>v+Math.max(last[i],last[i+1])
  ))[0];
}
console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));
