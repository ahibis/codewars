var lastDigit = function(str1, str2){
  let digit = Number(str1.slice(-1));
  let remains = [digit]
  let val = digit
  while(1){
    val=(val*digit)%10
    if(digit == val) break;
    remains.push(val)
  }
  const size = remains.length
  const tenRemain = 10 % size
  let i=0

  const degree = str2
    .split("")
    .slice(0,-1)
    .reduceRight((arr,e)=>{
      i+=1
      return (arr+Number(e)*(tenRemain**i))%size
    } ,Number(str2.slice(-1)))
  return str2=="0"?1:remains[(degree-1+size)%size]; 
}
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))