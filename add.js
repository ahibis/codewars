function add(a, b) {
  [a,b] = a.length>b.length?[a,b]:[b,a];
  b = "0".repeat(a.length-b.length)+b
  let res=""
  let buf = 0
  for(let i=a.length-1;i>=0;i--){
    let sum = Number(a[i]) +Number(b[i]) + buf
    buf = Math.floor(sum/10)
    res = String(sum%10) + res
  }
  if(buf) res = buf + res
  return res
}
function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}
console.log(add("923","99"))