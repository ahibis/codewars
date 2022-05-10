function digital_root(n) {
    if(n<10) return n
    let res=0;
    while(n>0){
        res+=n%10
        n=Math.floor(n/10)
    }
    return digital_root(res)
}
console.log(digital_root(173))
console.log(digital_root(456))
console.log(digital_root(132189))
console.log(digital_root(493193))